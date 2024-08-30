import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/header";
import Footer from "./components/footer";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Updateprofile from "./pages/update";
import { AuthProvider, useAuth } from "./context/authcontext";
import Home from "./pages/home";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update-profile" element={<Updateprofile />} />
      </Routes>
      {isAuthenticated && <Footer />}
    </>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
