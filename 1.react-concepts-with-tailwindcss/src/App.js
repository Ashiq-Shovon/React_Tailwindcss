import React from "react";
import FormManupulation from "./FormManupulation";
import Gallery from "./Gallery";
import MapMethod from "./MapMethod";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/mapMethod" element={<MapMethod />}></Route>
          <Route
            path="/formManupulation"
            element={<FormManupulation />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
