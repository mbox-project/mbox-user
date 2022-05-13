import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Auth";
import { LandingPage } from "../pages/Landing";
import { ForgotPassword } from "../pages/ForgotPassword";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/login" element={<Register />} />
    </Routes>
  );
};

export default RouteController;
