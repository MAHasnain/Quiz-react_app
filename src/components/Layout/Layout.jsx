import React from "react";
import { Footer, Header } from "../index.js";
import { Container } from "@mui/material";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xxl" sx={{height: "65vh", display: "flex", justifyContent: "center" }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
