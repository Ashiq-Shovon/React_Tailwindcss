import React from "react";
import FormManupulation from "./components/mainContent/FormManupulation";
import Gallery from "./components/mainContent/Gallery";
import MapMethod from "./components/mainContent/MapMethod";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseRef from "./components/mainContent/UseRef";
import Effect from "./components/mainContent/Effect";
import AppChat from "./components/mainContent/chat/App";
import Map from "./components/mainContent/Map";
import Layout from "./components/mainContent/chai_aur_javascript/layout/Layout";
import String from "./components/mainContent/chai_aur_javascript/content/String";
import DashBoard from "./components/mainContent/chai_aur_javascript/content/formHandling/content/DashBoard";
import Array from "./components/mainContent/chai_aur_javascript/content/Array";
import ObjectComp from "./components/mainContent/chai_aur_javascript/content/ObjectComp";
import MasterLayout from "./components/master-layout/MasterLayout";
import FormLayout from "./components/mainContent/chai_aur_javascript/content/formHandling/layout/FormLayout";
import WithState from "./components/mainContent/chai_aur_javascript/content/formHandling/content/WithState";
import { RouterProvider } from "react-router-dom";
import { router } from "./utilities/router";
function App() {
  return (
    <>
      {/* <BrowserRouter>
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
              <Route path="" element={<FormLayout />}>
                <Route index element={<DashBoard />} />
                <Route
                  path="form_manupulation_with_formData"
                  element={<WithState />}
                />
              </Route>
              <Route path="string" element={<String />} />
              <Route path="array" element={<Array />} />
              <Route path="object" element={<ObjectComp />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
