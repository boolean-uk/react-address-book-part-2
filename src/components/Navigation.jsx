import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="bg-gray-800 h-screen w-64 flex">
      <ul className="flex flex-col space-y-4 p-4">
        <li>
          <Link to="/create" className="text-white hover:text-gray-300">
            Create
          </Link>
        </li>
        <li>
          <Link to="/view" className="text-white hover:text-gray-300">
            View Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
