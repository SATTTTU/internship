// This optional code enables Progressive Web App + Offline capabilities
const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      window.location.hostname === "[::1]" ||
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[0-9]{1,2})){3}$/
      )
  );
  
  export function register() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        const swUrl = "/service-worker.js";

  
        if (isLocalhost) {
          // Running on localhost, check if service worker exists
          checkValidServiceWorker(swUrl);
        } else {
          // Register service worker
          registerValidSW(swUrl);
        }
      });
    }
  }
  
  function registerValidSW(swUrl) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  console.log("New content is available, refresh the page.");
                } else {
                  console.log("Content is cached for offline use.");
                }
              }
            };
          }
        };
      })
      .catch((error) => console.error("Error during service worker registration:", error));
  }
  
  function checkValidServiceWorker(swUrl) {
    fetch(swUrl, { headers: { "Service-Worker": "script" } })
      .then((response) => {
        if (
          response.status === 404 ||
          response.headers.get("content-type")?.indexOf("javascript") === -1
        ) {
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => window.location.reload());
          });
        } else {
          registerValidSW(swUrl);
        }
      })
      .catch(() => console.log("No internet connection, running in offline mode."));
  }
  
  export function unregister() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  }
  