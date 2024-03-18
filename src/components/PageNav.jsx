import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div class="px-4 flex justify-between">
          <div>
            <a href="/personal-page" class="flex items-center py-4 px-2">
              <span class="font-semibold text-gray-800 text-lg">MI LUO</span>
            </a>
          </div>
          <ul className="hidden md:flex items-center space-x-10">
            <li className="py-4 px-2 text-blue-600 border-b-4 border-blue-600 font-semibold">
              <NavLink to="/" className="">
                HomePage
              </NavLink>
            </li>
            <li className="py-4 px-2 text-gray-600 font-semibold hover:text-blue-500 transition duration-300">
              <NavLink to="/project" className="">
                Projects
              </NavLink>
            </li>
            <li className="py-4 px-2 text-gray-600 font-semibold hover:text-blue-500 transition duration-300">
              <NavLink to="/coursework" className="hover:text-gray-400">
                Coursework
              </NavLink>
            </li>
            <li className="py-4 px-2 text-gray-600 font-semibold hover:text-blue-500 transition duration-300">
              <NavLink to="/about" className="hover:text-gray-400">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default PageNav;
