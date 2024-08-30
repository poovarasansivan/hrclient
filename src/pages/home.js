import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 md:py-20 text-center border-b border-gray-300 mt-11">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Find Your Dream Job with Ease
          </h1>
          <p className="text-base md:text-lg mb-8">
            Welcome to YourHR, where you can seamlessly search for job
            opportunities, upload your resume, and manage your career profile.
            Whether you're looking for your first job or making a career change,
            we're here to help you every step of the way.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Start Job Search
            </Link>
            <Link
              to="/profile"
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Upload Your Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Comprehensive Job Listings
              </h2>
              <p>
                Explore a wide range of job opportunities tailored to your
                skills and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Easy Resume Upload
              </h2>
              <p>Upload your resume effortlessly and let employers find you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Profile Management
              </h2>
              <p>Manage your profile and keep your information up-to-date.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
