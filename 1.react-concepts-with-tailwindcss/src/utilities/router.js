import { createBrowserRouter } from "react-router-dom";
import * as All from "./imp";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <All.MasterLayout />,
    children: [
      {
        path: "gallery",
        element: <All.Gallery />,
      },
      {
        path: "mapMethod",
        element: <All.MapMethod />,
      },
      {
        path: "javascript-concept",
        element: <All.JavascriptLayout />,
        children: [
          {
            path: "function",
            element: <All.Function />,
          },
          {
            path: "object",
            element: <All.ObjectCon />,
          },

          {
            path: "array",
            element: <All.Array />,
          },
          {
            path: "string",
            element: <All.String />,
          },
        ],
      },

      {
        path: "useRef",
        element: <All.UseRef />,
      },
      {
        path: "formManupulation",
        element: <All.FormManupulation />,
      },
      {
        path: "effect",
        element: <All.Effect />,
      },
      {
        path: "chat",
        element: <All.AppChat />,
      },
      {
        path: "map",
        element: <All.Map />,
      },
      {
        path: "chaiAurJavascript",
        element: <All.Layout />,
        children: [
          {
            index: true,
            element: <All.ArrayMain />,
          },
          {
            path: "dashboard",
            element: <All.FormLayout />,
            children: [
              {
                index: true,
                element: <All.DashBoard />,
              },
              {
                path: "form_manupulation_with_formData",
                element: <All.WithState />,
              },
            ],
          },
          {
            path: "object",
            element: <All.ObjectComp />,
          },

          {
            path: "string",
            element: <All.String />,
          },
        ],
      },
    ],
  },
]);
