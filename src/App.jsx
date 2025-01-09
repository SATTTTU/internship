import React from "react";
import "./App.css";

import GridMember1 from "../Component/gridmember1.jsx";
import GridMember2 from "../Component/gridmember2.jsx";
import GridMember3 from "../Component/gridmember3.jsx";
import GridMember4 from "../Component/gridmember4.jsx";
import GridMember5 from "../Component/gridmember5.jsx";
import GridMember6 from "../Component/gridmember6.jsx";
import GridMember7 from "../Component/gridmember7.jsx";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GridMember1 />
          <GridMember2 />
          <GridMember3 />
          <GridMember4 />
          <GridMember5 />
          <GridMember6 />
          <GridMember7 />
        </div>
      </section>
    </div>
  );
}

export default App;
