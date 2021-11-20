import React from "react";

export default function Project({ name, desc, livelink, ghublink, tech }) {
  return (
    <div className="shadow-xl bg-blue-900 mb-3 p-4 rounded-lg mx-3 text-center w-4/5">
      <h1 className="text-2xl text-white">{name}</h1>
      <h2 className="text-md text-blue-200">{desc}</h2>
      <div className="flex flex-col mt-2 divide-y divide-gray-500">
        <div className="space-x-2 mb-4">
          {livelink && (
            <a
              href={livelink}
              target="_blank"
              className="transition duration-500 ease-in-out hover:bg-blue-300 transform text-md cursor-pointer bg-blue-400 rounded-md text-center px-2 py-1"
            >
              Live
            </a>
          )}
          <a
            href={ghublink}
            target="_blank"
            className="transition duration-500 ease-in-out hover:bg-blue-300 transform text-md cursor-pointer bg-blue-400 rounded-md text-center px-2 py-1 mt-2"
          >
            Source
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg mt-2 text-white">Tech</h2>
          <div className="flex flex-wrap justify-center">
            {tech.map((item, index) => (
              <p className="text-blue-200" key={index}>
                &nbsp;{item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
