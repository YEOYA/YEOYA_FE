import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Onboard, Login } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Onboard />} path="" />
          <Route element={<Login />} path="login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
