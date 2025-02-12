import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from 'react-router-dom';

const ORS_API_KEY = '5b3ce3597851110001cf6248087e3cc0d26b4e2ebca5a1787d6fc142';
const socket = io('http://localhost:5000');

const LiveMap = () => {
  const [location, setLocation] = useState({ lat: 27.7172, lng: 85.324 });
  const [destination, setDestination] = useState('');
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [route, setRoute] = useState(null);
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    if (lat && lng) {
      setLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    }
  }, [searchParams]);

  useEffect(() => {
    socket.on('locationUpdate', (data) => {
      const newLocation = { lat: data.lat, lng: data.lng };
      setLocation(newLocation);
      setSearchParams({ lat: data.lat, lng: data.lng });
  
      // If a destination exists, update the route and distance in real-time
      if (destinationCoords) {
        fetchRoute(newLocation, destinationCoords);
      }
    });
  
    return () => socket.off('locationUpdate');
  }, [destinationCoords, setSearchParams]);
  

  const sendLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        socket.emit('sendLocation', { lat: latitude, lng: longitude });
        setSearchParams({ lat: latitude, lng: longitude });
      },
      (error) => setError(error.message),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const fetchDestinationCoords = async () => {
    if (!destination) {
      setError('Please enter a destination');
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const coords = { lat: parseFloat(lat), lng: parseFloat(lon) };
        setDestinationCoords(coords);
        fetchRoute(location, coords);
      } else {
        setError('Destination not found');
      }
    } catch {
      setError('Error fetching destination data');
    }
  };

  const fetchRoute = async (start, end) => {
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ORS_API_KEY}&start=${start.lng},${start.lat}&end=${end.lng},${end.lat}`
      );
      const data = await response.json();
      if (data.features.length > 0) {
        const routeData = data.features[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
        setRoute(routeData);
        setDistance(data.features[0].properties.summary.distance / 1000);
      } else {
        setError('Route not found');
      }
    } catch {
      setError('Error fetching route data');
    }
  };

  const moveTowardsDestination = (route) => {
    if (!route || route.length === 0) {
      setError('No route data available.');
      return;
    }

    let stepCount = 0;
    const interval = setInterval(() => {
      if (stepCount >= route.length) {
        clearInterval(interval);
        return;
      }

      const [lat, lng] = route[stepCount];
      socket.emit('sendLocation', { lat, lng });
      setLocation({ lat, lng });
      setSearchParams({ lat, lng });
      stepCount++;
    }, 2000);
  };

  const startMovement = () => {
    if (route && route.length > 0) {
      moveTowardsDestination(route);
      console.log("first and i am moving");
    } else {
      setError('Route not found. Try searching again.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Real-Time Location Tracking</h2>
      <button onClick={sendLocation}>Share My Live Location</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <input
          type="text"
          value={destination}
          onChange={handleDestinationChange}
          placeholder="Enter destination"
        />
        <button onClick={fetchDestinationCoords}>Find Destination</button>
      </div>
      {distance && <p>Distance to destination: {distance.toFixed(2)} km</p>}
      <p>
        Share this link:
        <a href={`${window.location.origin}?lat=${location.lat}&lng=${location.lng}`}>
          {window.location.origin}?lat={location.lat}&lng={location.lng}
        </a>
      </p>
      <div style={{ width: '100%', height: '500px' }}>
        <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[location.lat, location.lng]}>
            <Popup>Your Live Location</Popup>
          </Marker>
          {destinationCoords && (
            <>
              <Marker position={[destinationCoords.lat, destinationCoords.lng]}>
                <Popup>Destination: {destination}</Popup>
              </Marker>
              {route && <Polyline positions={route} color="blue" weight={4} />}
            </>
          )}
        </MapContainer>
      </div>
      <button onClick={startMovement}>Start Movement</button>
    </div>
  );
};

export default LiveMap;