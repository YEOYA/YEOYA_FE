import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Onboard, Login, Register, Profile } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Onboard />} path="" />
          <Route element={<Login />} path="login" />
          <Route element={<Register />} path="register/:section" />
          <Route element={<Profile />} path="profile" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
