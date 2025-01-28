import React from "react";
import { FaEnvelope, FaLinkedin, FaBlogger, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Let's Connect</h1>
        <p className="text-gray-600 mt-2">I'd love to hear from you!</p>
      </div>

      <div className="flex space-x-4">
        <a
          href="mailto:sankeerthanajadi6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 p-4 rounded-full text-white shadow-md hover:bg-gray-800"
        >
          <FaEnvelope style={{ color: 'Red', width: '40px', height: '40px' }} />
        </a>
        <a
          href="https://www.linkedin.com/in/sankeerthana-jadi-848740258/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 p-4 rounded-full text-white shadow-md hover:bg-blue-800"
        >
          <FaLinkedin style={{ color: 'blue', width: '40px', height: '40px' }} />
        </a>
        <a
          href="https://spacedust33.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-4 rounded-full text-white shadow-md hover:bg-orange-600"
        >
          <FaBlogger style={{ color: 'orange', width: '40px', height: '40px' }} />
        </a>
        <a
          href="https://github.com/sankeerthanajadi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-4 rounded-full text-white shadow-md hover:bg-gray-700"
        >
          <FaGithub style={{ color: 'black', width: '40px', height: '40px' }} />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
