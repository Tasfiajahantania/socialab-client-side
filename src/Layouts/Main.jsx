import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <div class="container">
          <div class="row g-4">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
