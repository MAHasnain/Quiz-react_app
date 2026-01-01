import React from "react";
import { Home } from "./components";
import { Login, Register, Dashboard, Result } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout, AuthLayout } from "./components/";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import { Quiz } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz/:quiz_id" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
