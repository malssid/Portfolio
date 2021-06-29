import React from "react";

export default function Project({ name, desc, livelink, ghublink, tech }) {
  return (
    <div className="shadow-xl bg-white mb-3 p-4 rounded-lg mx-3 text-center">
      <h1 className="text-2xl">{name}</h1>
      <h2 className="text-md text-gray-700">{desc}</h2>
      <div className="flex flex-col mt-2 divide-y divide-gray-400">
        <div className="space-x-2 mb-4">
          <a
            href={livelink}
            target="_blank"
            className="transition duration-500 ease-in-out hover:bg-blue-200 transform hover:scale-95 text-md cursor-pointer bg-blue-300 rounded-md text-center px-2 py-1"
          >
            Live
          </a>
          <a
            href={ghublink}
            target="_blank"
            className="transition duration-500 ease-in-out hover:bg-blue-200 transform hover:scale-95 text-md cursor-pointer bg-blue-300 rounded-md text-center px-2 py-1 mt-2"
          >
            Source
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg mt-2">Tech</h2>
          <div className="flex flex-wrap justify-center">
            {tech.map((item, index) => (
              <p className="text-gray-700" key={index}>
                &nbsp;{item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
