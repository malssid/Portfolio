import React from "react";

export default function Skill({ name, logo, link }) {
  return (
    <a href={link} target="_blank">
      <div className="transition duration-500 ease-in-out hover:bg-blue-700 transform hover:scale-95 cursor-pointer bg-blue-900 text-white mb-3 px-4 py-2 rounded-xl mx-3 text-center">
        <div className="text-3xl">
          <i className={logo}></i>
        </div>
        <h1>{name}</h1>
      </div>
    </a>
  );
}
