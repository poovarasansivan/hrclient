import React from 'react';
import { FaBriefcase, FaLocationArrow, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 flex items-center">
              <FaLocationArrow className="mr-2 text-lg" /> Contact Us
            </h4>
            <p className="mb-2">📍 456 Job Street, Career City, CA 90002</p>
            <p className="mb-2">📞 +1 (987) 654-3210</p>
            <p>✉️ <a href="mailto:support@yourhr.com" className="hover:underline">support@yourhr.com</a></p>
          </div>
          {/* Popular Job Categories */}
          <div>
            <h4 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 flex items-center">
              <FaBriefcase className="mr-2 text-lg" /> Job Categories
            </h4>
            <ul className="space-y-2">
              {['Full Stack Developer', 'Mobile App Developer', 'Web Designer', 'Data Scientist', 'Game Developer'].map((category) => (
                <li key={category}>
                  <Link to="#" className="hover:underline">{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Important Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 flex items-center">
              <FaEnvelope className="mr-2 text-lg" /> Important Links
            </h4>
            <ul className="space-y-2">
              {['Job Listings', 'About Us', 'Contact Us', 'FAQ', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <Link to="#" className="hover:underline">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 flex items-center">
              <FaEnvelope className="mr-2 text-lg" /> Newsletter
            </h4>
            <p className="mb-4">
              Subscribe to our newsletter to stay updated with the latest job opportunities and career tips.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black rounded-md placeholder-gray-600"
                aria-label="Email Address"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-600 pt-4">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} YourHR. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebookF />, href: "#", color: "text-blue-600", hoverColor: "text-blue-400" },
              { icon: <FaTwitter />, href: "#", color: "text-blue-600", hoverColor: "text-blue-400" },
              { icon: <FaInstagram />, href: "#", color: "text-pink-600", hoverColor: "text-pink-400" },
              { icon: <FaLinkedinIn />, href: "#", color: "text-blue-700", hoverColor: "text-blue-700" },
            ].map(({ icon, href, color, hoverColor }, index) => (
              <Link key={index} to={href} className={`hover:${hoverColor} ${color}`}>
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
