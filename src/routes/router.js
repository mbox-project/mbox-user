import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/Landing";
import { ForgotPassword } from "../pages/ForgotPassword";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} exact />
    </Routes>
  );
};

export default RouteController;
