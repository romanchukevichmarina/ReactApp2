import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp";
import List from "./pages/List";
import Home from "./pages/Home";
import {AuthProvider} from "./AuthProvider";
import { RequireAuth } from "./RequireAuth";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        {<Header />}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/login"} element={<Auth />} />
          <Route
            path={"/index"}
            element={
              <RequireAuth>
                <List />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
