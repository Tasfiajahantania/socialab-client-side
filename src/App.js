import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./Assets/css/style.css";
import "./Assets/vendor/dropzone/dist/dropzone.css";
import "./App.css";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
