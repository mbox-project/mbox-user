import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages/Auth";
import { LandingPage } from "../pages/Landing";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
};

export default RouteController;
