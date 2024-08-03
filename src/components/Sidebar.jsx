import React, { useState, useEffect } from "react";
import sagaraLogo from "../assets/sagara.svg";
import { LayoutGrid, GraduationCap, X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".sidebar")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleNavbar}
        className="fixed top-4 left-4 bg-black text-white p-2 rounded-lg md:hidden"
      >
        <Menu size={20} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleNavbar}></div>
      )}

      <nav
        className={`sidebar fixed top-0 left-0 h-full w-64 bg-[#1C1C1C] z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-72 md:z-10`}
      >
        <div className="px-4 py-5">
          <div className="flex justify-between items-center mb-5">
            <img src={sagaraLogo} alt="Sagara Logo" className="w-24" />
            <button onClick={toggleNavbar} className="bg-black text-white p-2 rounded-lg md:hidden">
              <X size={20} />
            </button>
          </div>
          <ul className="text-[#9E9E9E] space-y-2">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  location.pathname === "/dashboard" ? "bg-red-600 text-white" : "hover:bg-gray-700"
                }`}
              >
                <LayoutGrid size={20} color={location.pathname === "/dashboard" ? "white" : "#9E9E9E"} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/students"
                className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  location.pathname === "/students" ? "bg-red-600 text-white" : "hover:bg-gray-700"
                }`}
              >
                <GraduationCap size={20} color={location.pathname === "/students" ? "white" : "#9E9E9E"} />
                <span>Students</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
