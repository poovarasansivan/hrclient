import React, { useState, useEffect } from "react";
import {
  IoPersonOutline,
  IoBriefcaseOutline,
  IoSchoolOutline,
  IoStarOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const userId = localStorage.getItem("userid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:8080/get-details", {
          user_id: parseInt(userId),
        });

        const data = response.data;
        console.log("API Response:", data);

        if (data) {
          setProfileData(data);
        } else {
          console.error("Data fetch was not successful: No data received");
        }
      } catch (error) {
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          console.error("Error response headers:", error.response.headers);
        } else if (error.request) {
          console.error("Error request data:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const user = profileData?.user || {};
  const work = profileData?.work || [];
  const skills = profileData?.skills || [];
  const education = profileData?.education || [];

  const handleUpdateClick = () => {
    navigate("/update-profile");
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-24 mb-10">
      <button
        onClick={handleUpdateClick}
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Update Profile
      </button>

      <h1 className="text-3xl font-bold text-blue-600 mb-6">User Profile</h1>

      {/* Personal Details */}
      <section className="mb-8 p-4 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-500 flex items-center mb-4">
          <IoPersonOutline className="text-3xl mr-2" />
          Personal Details
        </h2>
        <p>
          <strong>First Name:</strong> {user.first_name || "N/A"}
        </p>
        <p>
          <strong>Last Name:</strong> {user.last_name || "N/A"}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phone_number || "N/A"}
        </p>
        <p>
          <strong>Date of Birth:</strong> {user.date_of_birth || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {user.address || "N/A"}
        </p>
        <p>
          <strong>Bio:</strong> {user.bio || "N/A"}
        </p>
      </section>

      {/* Experiences */}
      <section className="mb-8 p-4 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-500 flex items-center mb-4">
          <IoBriefcaseOutline className="text-3xl mr-2" />
          Work Experience
        </h2>
        {work.length > 0 ? (
          work.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-green-600">
                {exp.job_title || "N/A"}
              </h3>
              <p>
                <strong>Company:</strong> {exp.company_name || "N/A"}
              </p>
              <p>
                <strong>Location:</strong> {exp.location || "N/A"}
              </p>
              <p>
                <strong>Start Date:</strong> {exp.start_date || "N/A"}
              </p>
              <p>
                <strong>End Date:</strong> {exp.end_date || "N/A"}
              </p>
              <p>
                <strong>Responsibilities:</strong>{" "}
                {exp.responsibilities || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p>No work experience provided.</p>
        )}
      </section>

      {/* Skills */}
      <section className="mb-8 p-4 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-yellow-500 flex items-center mb-4">
          <IoStarOutline className="text-3xl mr-2" />
          Skills
        </h2>
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <p>
                <strong>Skill:</strong> {skill.skill_name || "N/A"}
              </p>
              <p>
                <strong>Proficiency:</strong> {skill.proficiency_level || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p>No skills provided.</p>
        )}
      </section>

      {/* Education */}
      <section className="mb-8 p-4 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-red-500 flex items-center mb-4">
          <IoSchoolOutline className="text-3xl mr-2" />
          Education
        </h2>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-red-600">
                {edu.institution_name || "N/A"}
              </h3>
              <p>
                <strong>Degree:</strong> {edu.degree || "N/A"}
              </p>
              <p>
                <strong>Field of Study:</strong> {edu.field_of_study || "N/A"}
              </p>
              <p>
                <strong>Start Date:</strong> {edu.start_date || "N/A"}
              </p>
              <p>
                <strong>End Date:</strong> {edu.end_date || "N/A"}
              </p>
              <p>
                <strong>Grade:</strong> {edu.grade || "N/A"}
              </p>
              <p>
                <strong>Description:</strong> {edu.description || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p>No education details provided.</p>
        )}
      </section>
    </div>
  );
};

export default Profile;
