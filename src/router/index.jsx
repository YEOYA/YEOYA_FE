import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import {
  Onboard,
  Login,
  Register,
  Profile,
  ProfileEdit,
  UserProfile,
  Post,
  Main,
  Search,
} from "../pages";
import { Splash } from "../pages/Splash";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Onboard />} path="" />
          <Route element={<Login />} path="login" />
          <Route element={<Register />} path="register/:section" />
          <Route element={<Profile />} path="profile" />
          <Route element={<UserProfile />} path="user" />
          <Route element={<Post />} path="post" />
          <Route element={<Main />} path="main" />
          <Route element={<ProfileEdit />} path="profile/edit" />
          <Route element={<Splash />} path="splash" />
          <Route element={<Search />} path="search" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
