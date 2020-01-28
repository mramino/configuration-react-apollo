import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <div style={{ minHeight: "85vh" }}>{children}</div> <Footer />
  </>
);

export default Layout;
