import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Page1() {
  const [find, setFind] = useState(""); // State for the GitHub username
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!find.trim()) return; // Prevent empty input submission

    navigate(`/sData/${find}`); // Navigate to the new page with the username
  };

  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <form
          className="relative z-10 flex flex-col items-center justify-center gap-3"
          onSubmit={handleOnSubmit}
        >
          <label className="text-4xl text-white">Find your GitHub account.</label>

          <input
            className="bg-transparent border-2 border-white text-gray-300 text-2xl px-3 py-2 w-80 h-12 rounded-2xl text-center"
            type="text"
            value={find}
            onChange={(e) => setFind(e.target.value)} // Update state when typing
            placeholder="Enter GitHub username"
          />

          <button
            className="bg-gray-500 text-white text-2xl px-6 py-2 rounded-xl hover:bg-gray-700 transition-all"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Page1;
