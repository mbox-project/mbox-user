import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages/Auth";
import { LandingPage } from "../pages/Landing";
import { ForgotPassword } from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default RouteController;
