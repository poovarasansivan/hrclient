import React, { useState } from "react";
import { FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  IoPersonOutline,
  IoBriefcaseOutline,
  IoSchoolOutline,
  IoStarOutline,
} from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const user_Id = parseInt(localStorage.getItem("userid"), 10);

  const [profileDetails, setProfileDetails] = useState({
    user_id: user_Id,
    phone_number: "",
    date_of_birth: "",
    address: "",
    bio: "",
  });

  const [education, setEducation] = useState({
    user_id: user_Id,
    institution_name: "",
    degree: "",
    field_of_study: "",
    start_date: "",
    end_date: "",
    grade: "",
    description: "",
  });

  const [skills, setSkills] = useState({
    user_id: user_Id,
    skill_name: "",
    proficiency_level: "",
  });

  const [experience, setExperience] = useState({
    user_id: user_Id,
    job_title: "",
    company_name: "",
    location: "",
    start_date: "",
    end_date: "",
    responsibilities: "",
  });

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "profileDetails") {
      setProfileDetails({ ...profileDetails, [name]: value });
    } else if (section === "education") {
      setEducation({ ...education, [name]: value });
    } else if (section === "skills") {
      setSkills({ ...skills, [name]: value });
    } else if (section === "experience") {
      setExperience({ ...experience, [name]: value });
    }
  };

  const Personalupdate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/update",
        profileDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const Addeducation = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/add-education",
        education,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const AddSkills = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/add-skills",
        skills,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const Addexp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/add-experience",
        experience,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleSubmit = async () => {
    await Addexp();
    await AddSkills();
    await Addeducation();
    await Personalupdate();
    navigate("/profile");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
              <IoPersonOutline className="text-3xl mr-2" />
              Personal Details
            </h2>
            <label className="block">
              <span className="text-sm font-medium">Phone Number</span>
              <input
                type="text"
                name="phone_number"
                value={profileDetails.phone_number}
                onChange={(e) => handleChange(e, "profileDetails")}
                className="border rounded-lg p-2 w-full border-blue-500 focus:border-blue-700"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Date of Birth</span>
              <input
                type="date"
                name="date_of_birth"
                value={profileDetails.date_of_birth}
                onChange={(e) => handleChange(e, "profileDetails")}
                className="border rounded-lg p-2 w-full border-blue-500 focus:border-blue-700"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Address</span>
              <textarea
                name="address"
                value={profileDetails.address}
                onChange={(e) => handleChange(e, "profileDetails")}
                className="border rounded-lg p-2 w-full border-blue-500 focus:border-blue-700"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Bio</span>
              <textarea
                name="bio"
                value={profileDetails.bio}
                onChange={(e) => handleChange(e, "profileDetails")}
                className="border rounded-lg p-2 w-full border-blue-500 focus:border-blue-700 mb-4"
              />
            </label>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-red-700 flex items-center">
              <IoSchoolOutline className="text-3xl mr-2" />
              Education
            </h2>
            <div className="border p-4 rounded-lg mb-4 border-red-300">
              <label className="block">
                <span className="text-sm font-medium">Institution Name</span>
                <input
                  type="text"
                  name="institution_name"
                  value={education.institution_name}
                  onChange={(e) => handleChange(e, "education")}
                  className="border rounded-lg p-2 w-full border-red-500 focus:border-red-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Degree</span>
                <input
                  type="text"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleChange(e, "education")}
                  className="border rounded-lg p-2 w-full border-red-500 focus:border-red-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Field of Study</span>
                <input
                  type="text"
                  name="field_of_study"
                  value={education.field_of_study}
                  onChange={(e) => handleChange(e, "education")}
                  className="border rounded-lg p-2 w-full border-red-500 focus:border-red-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Start Date</span>
                <input
                  type="date"
                  name="start_date"
                  value={education.start_date}
                  onChange={(e) => handleChange(e, "education")}
                  className="border rounded-lg p-2 w-full border-red-500 focus:border-red-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">End Date</span>
                <input
                  type="date"
                  name="end_date"
                  value={education.end_date}
                  onChange={(e) => handleChange(e, "education")}
                  className="border rounded-lg p-2 w-full border-red-500 focus:border-red-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Grade</span>
                <input
                  type="text"
                  name="grade"
                  value={education.grade}
                  onChange={(e) => handleChange(e, "education")}
                  className="border rounded-lg p-2 w-full border-red-500 focus:border-red-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Description</span>
                <textarea
                  name="description"
                  value={education.description}
                  onChange={(e) => handleChange(e, "education")}
                  className="border rounded-lg p-2 w-full border-red-500 focus:border-red-700"
                />
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
              <IoStarOutline className="text-3xl mr-2" />
              Skills
            </h2>
            <div className="border p-4 rounded-lg mb-4 border-green-300">
              <label className="block">
                <span className="text-sm font-medium">Skill Name</span>
                <input
                  type="text"
                  name="skill_name"
                  value={skills.skill_name}
                  onChange={(e) => handleChange(e, "skills")}
                  className="border rounded-lg p-2 w-full border-green-500 focus:border-green-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Proficiency Level</span>
                <input
                  type="text"
                  name="proficiency_level"
                  value={skills.proficiency_level}
                  onChange={(e) => handleChange(e, "skills")}
                  className="border rounded-lg p-2 w-full border-green-500 focus:border-green-700"
                />
              </label>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700 flex items-center">
              <IoBriefcaseOutline className="text-3xl mr-2" />
              Experience
            </h2>
            <div className="border p-4 rounded-lg mb-4 border-purple-300">
              <label className="block">
                <span className="text-sm font-medium">Job Title</span>
                <input
                  type="text"
                  name="job_title"
                  value={experience.job_title}
                  onChange={(e) => handleChange(e, "experience")}
                  className="border rounded-lg p-2 w-full border-purple-500 focus:border-purple-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Company Name</span>
                <input
                  type="text"
                  name="company_name"
                  value={experience.company_name}
                  onChange={(e) => handleChange(e, "experience")}
                  className="border rounded-lg p-2 w-full border-purple-500 focus:border-purple-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Location</span>
                <input
                  type="text"
                  name="location"
                  value={experience.location}
                  onChange={(e) => handleChange(e, "experience")}
                  className="border rounded-lg p-2 w-full border-purple-500 focus:border-purple-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Start Date</span>
                <input
                  type="date"
                  name="start_date"
                  value={experience.start_date}
                  onChange={(e) => handleChange(e, "experience")}
                  className="border rounded-lg p-2 w-full border-purple-500 focus:border-purple-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">End Date</span>
                <input
                  type="date"
                  name="end_date"
                  value={experience.end_date}
                  onChange={(e) => handleChange(e, "experience")}
                  className="border rounded-lg p-2 w-full border-purple-500 focus:border-purple-700"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Responsibilities</span>
                <textarea
                  name="responsibilities"
                  value={experience.responsibilities}
                  onChange={(e) => handleChange(e, "experience")}
                  className="border rounded-lg p-2 w-full border-purple-500 focus:border-purple-700"
                />
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 mt-24 mb-4">
      {renderStep()}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setStep(step > 1 ? step - 1 : step)}
          className="bg-gray-500 text-white p-2 rounded-lg flex items-center"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <button
          onClick={() => (step < 4 ? setStep(step + 1) : handleSubmit())}
          className="bg-blue-500 text-white p-2 rounded-lg flex items-center"
        >
          {step < 4 ? (
            <>
              Next
              <FaArrowRight className="ml-2" />
            </>
          ) : (
            <>Submit</>
          )}
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
