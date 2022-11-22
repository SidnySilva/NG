import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { SignIn } from "../pages/signin/signin";
import { SignUp } from "../pages/signup/signup";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
