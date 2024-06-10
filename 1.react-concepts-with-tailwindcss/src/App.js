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
import Layout from "./components/chai_aur_javascript/Layout";
import String from "./components/chai_aur_javascript/String";
import DashBoard from "./components/chai_aur_javascript/FormHandling/DashBoard";
import Array from "./components/chai_aur_javascript/Array";
import ObjectComp from "./components/chai_aur_javascript/ObjectComp";
import MasterLayout from "./components/MasterLayout";
import  FormLayout from  "./components/chai_aur_javascript/FormHandling/FormLayout"
import WithState from "./components/chai_aur_javascript/FormHandling/WithState";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route path="gallery" element={<Gallery />}></Route>
            <Route path="mapMethod" element={<MapMethod />}></Route>
            <Route path="useRef" element={<UseRef />}></Route>
            <Route
              path="formManupulation"
              element={<FormManupulation />}
            ></Route>
            <Route path="effect" element={<Effect />} />
            <Route path="chat" element={<AppChat />} />
            <Route path="map" element={<Map />} />
            <Route path="chaiAurJavascript" element={<Layout />}>
              <Route path="" element={<FormLayout />} >
                <Route index element={<DashBoard />} />
                <Route path="form_manupulation_with_formData" element={<WithState />} />
              </Route>
              <Route path="string" element={<String />} />
              <Route path="array" element={<Array />} />
              <Route path="object" element={<ObjectComp />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
