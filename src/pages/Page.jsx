import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-8xl font-extrabold text-blue-500">404</h1>
      <h2 className="text-3xl mt-4 font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-400">
        Sorry, the page you are looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
