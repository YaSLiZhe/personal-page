import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function PageNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Function to generate the common classes for NavLink, with additional classes based on isActive
  const linkClass = (isActive) =>
    `${
      isActive
        ? 'border-gray-600 bg-gray-200'
        : 'hover:border-b-2 hover:border-gray-400'
    } block py-2 px-4 w-full text-center font-semibold transition duration-300`;

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
            {isNavExpanded ? '✕' : '☰'}
          </button>
          <div
            className={`absolute z-10 left-0 mt-1 w-full rounded-lg shadow-md bg-white ${
              isNavExpanded ? 'block' : 'hidden'
            } md:block md:static md:shadow-none md:bg-transparent md:mt-0 md:w-auto md:rounded-none`}
          >
            <ul className="block md:flex items-center space-x-0 md:space-x-10 py-2 md:py-0">
              {['/', '/projects', '/coursework', '/about'].map(
                (path, index) => (
                  <li className="w-full" key={index}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `${linkClass(isActive)} ${
                          isActive ? 'border-b-2' : 'text-gray-600'
                        }`
                      }
                      onClick={() => setIsNavExpanded(false)}
                    >
                      {path === '/' ? 'HomePage' : path.substring(1)}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default PageNav;
