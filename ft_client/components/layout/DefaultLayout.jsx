import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
export const DefaultLayout = () => {
  return (
    <div>
      {/* navbar  */}
      <Header />
      {/* actual page content  */}
      <div>
        {" "}
        <Outlet />
      </div>
      {/* footer  */}
      <Footer />
    </div>
  );
};
