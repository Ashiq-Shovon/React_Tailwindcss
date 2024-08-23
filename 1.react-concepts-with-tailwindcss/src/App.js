import React from "react";
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
