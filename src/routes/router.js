import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Auth";
import { LandingPage } from "../pages/Landing";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/login" element={<Register />} />
    </Routes>
  );
};

export default RouteController;
