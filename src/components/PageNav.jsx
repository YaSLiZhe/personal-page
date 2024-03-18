import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function PageNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-lg relative">
        <div className="px-4 flex justify-between items-center">
          <a href="/personal-page" className="flex items-center py-4 px-2">
            <span className="font-semibold text-gray-800 text-lg">MI LUO</span>
          </a>
          <button
            className="md:hidden px-2 py-1 text-gray-800"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            {isNavExpanded ? "✕" : "☰"}
          </button>
          <div
            className={`absolute z-10 left-0 mt-1 w-full rounded-lg shadow-md bg-white ${
              isNavExpanded ? "block" : "hidden"
            } md:block md:static md:shadow-none md:bg-transparent md:mt-0 md:w-auto md:rounded-none`}
          >
            <ul className="block md:flex items-center space-x-0 md:space-x-10 py-2 md:py-0">
              <li className="w-full">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 w-full text-center bg-gray-200 rounded-md border-4 border-gray-600 font-semibold md:border-none md:rounded-none md:hover:bg-gray-200"
                      : "block py-2 px-4 w-full text-center text-gray-600 font-semibold hover:bg-gray-200 md:hover:bg-gray-200 transition duration-300 md:hover:border-none"
                  }
                  onClick={() => setIsNavExpanded(false)}
                >
                  HomePage
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 w-full text-center bg-gray-200 rounded-md border-4 border-gray-600 font-semibold md:border-none md:rounded-none md:hover:bg-gray-200"
                      : "block py-2 px-4 w-full text-center text-gray-600 font-semibold hover:bg-gray-200 md:hover:bg-gray-200 transition duration-300 md:hover:border-none"
                  }
                  onClick={() => setIsNavExpanded(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/coursework"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 w-full text-center bg-gray-200 rounded-md border-4 border-gray-600 font-semibold md:border-none md:rounded-none md:hover:bg-gray-200"
                      : "block py-2 px-4 w-full text-center text-gray-600 font-semibold hover:bg-gray-200 md:hover:bg-gray-200 transition duration-300 md:hover:border-none"
                  }
                  onClick={() => setIsNavExpanded(false)}
                >
                  Coursework
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 w-full text-center bg-gray-200 rounded-md border-4 border-gray-600 font-semibold md:border-none md:rounded-none md:hover:bg-gray-200"
                      : "block py-2 px-4 w-full text-center text-gray-600 font-semibold hover:bg-gray-200 md:hover:bg-gray-200 transition duration-300 md:hover:border-none"
                  }
                  onClick={() => setIsNavExpanded(false)}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default PageNav;
