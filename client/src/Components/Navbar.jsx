"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
// import { usePathname } from "next/navigation";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = "s";
  var navigation = [
    { name: "Solutions", href: "/", current: false },
    { name: "Features", href: "/", current: false },
    { name: "About", href: "/", current: false },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex">
                    <Link to="/">
                      <img
                        src="../logo.png"
                        alt="logo"
                        className="w-[10rem] h-[2.5rem]"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-gray-900 font-bold text-xl px-3 flex items-center gap-2"
                        >
                          <p>{item.name}</p>
                          <img src="../arr.png" className="h-[0.8rem] w-[0.8rem] pt-1" />
                          {/* <span className="text-blue-400 pt-4">˅</span> */}
                        </Link>
                      ))}
                      <div className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"></div>
                    </div>
                  </div>
                </div>
                <div className="gap-5 hidden sm:ml-6 sm:flex">
                  <button className="p-1 px-3 rounded-lg border border-blue-400 text-blue-600 font-bold">
                    Login
                  </button>
                  <button className="p-1 px-3 rounded-lg bg-blue-500 text-white font-bold">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.href == pathname
                      ? "bg-gray-900 text-white"
                      : " hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="px-4">
              <button className="block p-1 px-3 rounded-lg border border-blue-400 text-blue-600 font-bold">
                Login
              </button>
              <button className="mt-4 p-1 px-3 rounded-lg bg-blue-500 text-white font-bold">
                Register
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
