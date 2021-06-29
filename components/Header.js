import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          {/* Desktop nav */}
          <div
            className={
              open
                ? "w-full bg-white sm:shadow sm:rounded-b-3xl h-20 px-6 flex justify-between items-center px-6"
                : "w-full bg-white shadow rounded-b-3xl h-20 px-6 flex justify-between items-center px-6"
            }
          >
            <Link href="/">
              <h1 className="cursor-pointer text-2xl sm:text-3xl">
                Michael Alssid
              </h1>
            </Link>
            <Disclosure.Button>
              {open ? (
                <img src="/close.svg" className="sm:hidden" />
              ) : (
                <img src="/menu.svg" className="sm:hidden" />
              )}
            </Disclosure.Button>
            <div className="hidden sm:flex flex-row text-2xl space-x-5 items-center">
              <Link href="/skills">
                <h1 className="cursor-pointer transition duration-500 hover:text-gray-600">
                  Skills
                </h1>
              </Link>
              <Link href="/projects">
                <h1 className="cursor-pointer transition duration-500 hover:text-gray-600">
                  Projects
                </h1>
              </Link>
              <a href="https://github.com/malssid" target="_blank">
                <i className="text-gray-800 cursor-pointer fab fa-github fa-lg transition duration-500 hover:text-gray-600"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/michael-alssid-92059b1a4/"
                target="_blank"
              >
                <i className="text-gray-800 cursor-pointer fab fa-linkedin-in fa-lg transition duration-500 hover:text-gray-600"></i>
              </a>
              <a href="mailto: mlalssid@gmail.com">
                <i className="text-gray-800 cursor-pointer fas fa-envelope fa-lg transition duration-500 hover:text-gray-600"></i>
              </a>
            </div>
          </div>
          {/* Mobile nav */}
          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel>
              <div className="flex flex-col text-center text-2xl space-y-2 sm:hidden w-screen bg-white shadow-md rounded-b-3xl h-auto px-6 items-center px-2 pb-4">
                <Link href="/skills">
                  <h1 className="cursor-pointer transition duration-500 hover:text-gray-600">
                    Skills
                  </h1>
                </Link>
                <Link href="/projects">
                  <h1 className="cursor-pointer transition duration-500 hover:text-gray-600">
                    Projects
                  </h1>
                </Link>
                <div className="space-x-3">
                  <a href="https://github.com/malssid" target="_blank">
                    <i className="text-gray-800 cursor-pointer fab fa-github fa-lg transition duration-500 hover:text-gray-600"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/michael-alssid-92059b1a4/"
                    target="_blank"
                  >
                    <i className="text-gray-800 cursor-pointer fab fa-linkedin-in fa-lg transition duration-500 hover:text-gray-600"></i>
                  </a>
                  <a href="mailto: mlalssid@gmail.com">
                    <i className="text-gray-800 cursor-pointer fas fa-envelope fa-lg transition duration-500 hover:text-gray-600"></i>
                  </a>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
