import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-400 via-red-500 to-pink-500">
      <div className="py-5">
        <Link
          className="bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-teal-500 hover:to-green-400 transition-all duration-300 ease-in-out transform hover:scale-110"
          to="/addbooksdata"
        >
          Add Books
        </Link>
      </div>
    </div>
  );
};

export default Home;
