import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Onboard } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Onboard />} path="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
