import React from "react";
import FormManupulation from "./components/FormManupulation";
import Gallery from "./components/Gallery";
import MapMethod from "./components/MapMethod";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseRef from "./components/UseRef";
import Effect from "./components/Effect";
import AppChat from "./components/chat/App";
import Map from "./components/map/Map";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/mapMethod" element={<MapMethod />}></Route>
          <Route path="/useRef" element={<UseRef />}></Route>
          <Route
            path="/formManupulation"
            element={<FormManupulation />}
          ></Route>
          <Route path="/effect" element={<Effect />} />
          <Route path="/chat" element={<AppChat />} />
          <Route path="map" element={<Map />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
