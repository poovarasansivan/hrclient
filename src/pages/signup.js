import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.first_name) formErrors.first_name = "First name is required";
    if (!formData.last_name) formErrors.last_name = "Last name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 6)
      formErrors.password = "Password must be at least 6 characters long";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:8080/signup", formData);
        if (response.status === 200) {
          console.log("Signup successful:", response.data);
          navigate("/login");
        }
      } catch (error) {
        console.error("Error during signup:", error.response || error.message);
        setErrors({ apiError: "Failed to sign up. Please try again." });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
          <FaUser className="mr-2 text-blue-500" /> Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border rounded-md shadow-sm">
            <FaUser className="text-gray-500 mx-3" />
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className={`flex-1 px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 ${
                errors.first_name
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 ring-gray-300"
              } rounded-md`}
              placeholder="First Name"
            />
          </div>
          {errors.first_name && (
            <p className="text-red-500 text-xs italic">{errors.first_name}</p>
          )}

          <div className="mb-4 flex items-center border rounded-md shadow-sm">
            <FaUser className="text-gray-500 mx-3" />
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className={`flex-1 px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 ${
                errors.last_name
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 ring-gray-300"
              } rounded-md`}
              placeholder="Last Name"
            />
          </div>
          {errors.last_name && (
            <p className="text-red-500 text-xs italic">{errors.last_name}</p>
          )}

          <div className="mb-4 flex items-center border rounded-md shadow-sm">
            <FaEnvelope className="text-gray-500 mx-3" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`flex-1 px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 ring-gray-300"
              } rounded-md`}
              placeholder="Email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}

          <div className="mb-6 flex items-center border rounded-md shadow-sm">
            <FaLock className="text-gray-500 mx-3" />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`flex-1 px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 ring-gray-300"
              } rounded-md`}
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
