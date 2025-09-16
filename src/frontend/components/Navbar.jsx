import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Reports", path: "/reports" },
    { name: "First Aid", path: "/first-aid" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/80 border border-gray-300/50 dark:border-gray-700/50 rounded-2xl shadow-lg shadow-red-900/40 transition-colors duration-300">
        <div className="flex justify-between items-center px-6 py-3">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-pulse  
            hover:from-red-600 hover:via-orange-600 hover:to-yellow-500 transition-all duration-300"
          >
            🌐 Rescue Radar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative font-medium group text-gray-800 dark:text-gray-200 transition-colors"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-red-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Logout Button */}
            <button
              className="px-4 py-1.5 rounded-xl font-semibold hover:scale-105 transition transform shadow-md 
              bg-gradient-to-r from-red-500 to-orange-500 text-white
              dark:from-orange-400 dark:to-red-600"
            >
              Logout
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition shadow-md"
            >
              {isDarkMode ? (
                <FiSun className="text-yellow-400" size={20} />
              ) : (
                <FiMoon className="text-blue-500" size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X size={28} className="text-gray-800 dark:text-white" />
              ) : (
                <Menu size={28} className="text-gray-800 dark:text-white" />
              )}
            </button>
            {/* Dark Mode Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              {isDarkMode ? (
                <FiSun className="text-yellow-400" size={20} />
              ) : (
                <FiMoon className="text-blue-500" size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden rounded-b-2xl px-6 py-4 space-y-3 animate-fadeIn bg-white/90 dark:bg-gray-800/95 transition-colors duration-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block font-medium text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="w-full px-4 py-2 rounded-xl font-semibold hover:scale-105 transition transform shadow-md
              bg-gradient-to-r from-red-500 to-orange-500 text-white
              dark:from-orange-400 dark:to-red-600"
              onClick={() => setIsOpen(false)}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
