import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/Main";
import AuthLayout from "../layouts/Auth";

import Login from "../pages/Auth/Login";
import Reset from "../pages/Auth/Reset";
import Register from "../pages/Auth/Register";
import Home from "../pages/Main/Home";
import Search from "../pages/Main/Search";
import LikedBlogs from "../pages/Main/LikedBlogs";
import CreateBlog from "../pages/Main/CreateBlog";
import SavedBlogs from "../pages/Main/SavedBlogs";
import YourBlogs from "../pages/Main/YourBlogs";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/create-blog"} element={<CreateBlog />} />
          <Route path={"/liked-blogs"} element={<LikedBlogs />} />
          <Route path={"/saved-blogs"} element={<SavedBlogs />} />
          <Route path={"/your-blogs"} element={<YourBlogs />} />
          <Route path={"/search"} element={<Search />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/reset"} element={<Reset />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
