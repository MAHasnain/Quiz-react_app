import React from "react";
import { Home } from "./components";
import { Login, Register, Question, Dashboard, Result } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout, AuthLayout } from "./components/";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
