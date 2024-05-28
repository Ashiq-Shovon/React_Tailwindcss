import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
  Navigate,
  Redirect,
  useNavigate,
  redirect,
  useParams,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { errorElement, useLoader as vanLoader } from "./pages/Van/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Van/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans, { useLoader as hostVanLoader } from "./pages/Host/HostVans";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVanDetail, {
  useLoader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Error from "./components/Error";
import Login from "./pages/Login";
import { authRequired, requireAuth } from "./utils";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { useGetHostVanDetailQuery } from "./redux/services/vansApi";

function App() {
  const vanLoaderHook = vanLoader();
  const hostVanLoaderHook = hostVanLoader();
  const hostVanDetailLoaderHook = hostVanDetailLoader();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route
          path="vans"
          loader={vanLoaderHook}
          element={<Vans />}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
        />
        <Route path="login" element={<Login />} />
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => await authRequired()}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => await authRequired()}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => await authRequired()}
          />
          <Route
            path="vans"
            element={<HostVans />}
            errorElement={<Error />}
            loader={hostVanLoaderHook}
          />
          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={
              
              hostVanDetailLoaderHook
            }
          >
            <Route index element={<HostVanInfo />} />
            <Route path="photos" element={<HostVanPhotos />} />
            <Route path="pricing" element={<HostVanPricing />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>page not found</h1>} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
