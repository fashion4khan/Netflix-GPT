import React from "react";
import Login from "./login";
import Browse from "./browse";
import { Error } from "./Error";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement : <Error />,
    },
    {
      path: "/browse",
      element: <Browse />,
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
