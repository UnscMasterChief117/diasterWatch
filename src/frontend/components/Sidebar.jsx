import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, AlertTriangle, CloudRainWind, User, Radio, Map, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const Sidebar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md bg-white text-red-700 dark:text-yellow-400 dark:bg-gray-700 fixed top-4 left-4 z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black z-40"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 dark:text-yellow-400 text-orange-300 p-6 shadow-lg z-50"
      >
        <h2 className="text-xl font-bold mb-4">RescueRadar Menu</h2>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-black dark:text-yellow-400 text-xl mb-4">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Sidebar Links */}
        <ul className="space-y-3">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <Home size={22} className="inline-block mr-2" />
              Home
            </Link>
          </li>

          {/* Forecasts */}
          <li>
            <Link
              to="/forecasts"
              className="block px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <CloudRainWind size={22} className="inline-block mr-2" />
              Forecasts
            </Link>
          </li>

          {/* Active Alerts */}
          <li>
            <Link
              to="/alerts"
              className="block px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <AlertTriangle size={22} className="inline-block mr-2" />
              Active Alerts
            </Link>
          </li>

          {/* Emergency Radio / Community Reports */}
          <li>
            <Link
              to="/reports"
              className="block px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <Radio size={22} className="inline-block mr-2" />
              Reports
            </Link>
          </li>

          {/* Evacuation Maps */}
          <li>
            <Link
              to="/maps"
              className="block px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <Map size={22} className="inline-block mr-2" />
              Evacuation Maps
            </Link>
          </li>

          {/* Profile */}
          <li>
            <Link
              to="/profile"
              className="block px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <User size={22} className="inline-block mr-2" />
              Profile
            </Link>
          </li>

          {/* Settings */}
          <li>
            <Link
              to="/settings"
              className="block px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <Settings size={22} className="inline-block mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
