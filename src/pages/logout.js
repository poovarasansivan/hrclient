// utils/logout.js
import { useAuth } from "../context/authcontext"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    localStorage.removeItem("isAuthenticated"); 
    localStorage.removeItem("userid"); 
    localStorage.removeItem("email"); 

    navigate("/login"); 
  };

  return handleLogout;
};
