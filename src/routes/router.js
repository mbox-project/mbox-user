import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages/Auth";
import { LandingPage } from "../pages/Landing";
import { ForgotPassword } from "../pages/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import { VerifyOTP } from "../pages/Auth";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/verifyotp" element={<VerifyOTP />} />
    </Routes>
  );
};

export default RouteController;
