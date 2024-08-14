import { createBrowserRouter } from "react-router-dom";
import FormManupulation from "../components/mainContent/FormManupulation";
import Gallery from "../components/mainContent/Gallery";
import MapMethod from "../components/mainContent/MapMethod";
import UseRef from "../components/mainContent/UseRef";
import Effect from "../components/mainContent/Effect";
import AppChat from "../components/mainContent/chat/App";
import Map from "../components/mainContent/Map";
import Layout from "../components/mainContent/chai_aur_javascript/layout/Layout";
// import String from "../components/mainContent/chai_aur_javascript/content/String";
import DashBoard from "../components/mainContent/chai_aur_javascript/content/formHandling/content/DashBoard";
// import Array from "../components/mainContent/chai_aur_javascript/content/Array";
import ObjectComp from "../components/mainContent/chai_aur_javascript/content/ObjectComp";
import MasterLayout from "../components/master-layout/MasterLayout";
import FormLayout from "../components/mainContent/chai_aur_javascript/content/formHandling/layout/FormLayout";
import WithState from "../components/mainContent/chai_aur_javascript/content/formHandling/content/WithState";
import JavascriptLayout from "../components/mainContent/javascript-concept/javascript-layout/JavascriptLayout";
import Function from "../components/mainContent/javascript-concept/javascript-content/Function";
import Object from "../components/mainContent/javascript-concept/javascript-content/Object";
import Array from "../components/mainContent/javascript-concept/javascript-content/Array";
import String from "../components/mainContent/javascript-concept/javascript-content/String";
import JavascriptNavBar from "../components/mainContent/javascript-concept/javascript-layout/JavascriptNavBar";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "mapMethod",
        element: <MapMethod />,
      },
      {
        path: "javascript-concept",
        element: <JavascriptLayout />,
        children: [
          {
            path: "function",
            element: <Function />,
          },
          {
            path: "object",
            element: <Object />,
          },

          {
            path: "array",
            element: <Array />,
          },
          {
            path: "string",
            element: <String />,
          },
        ],
      },

      {
        path: "useRef",
        element: <UseRef />,
      },
      {
        path: "formManupulation",
        element: <FormManupulation />,
      },
      {
        path: "effect",
        element: <Effect />,
      },
      {
        path: "chat",
        element: <AppChat />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "chaiAurJavascript",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <FormLayout />,
            children: [
              {
                index: true,
                element: <DashBoard />,
              },
              {
                path: "form_manupulation_with_formData",
                element: <WithState />,
              },
            ],
          },
          {
            path: "string",
            element: <String />,
          },
          // {
          //   path: "array",
          //   element: <Array />,
          // },
          // {
          //   path: "object",
          //   element: <ObjectComp />,
          // },
        ],
      },
    ],
  },
]);
