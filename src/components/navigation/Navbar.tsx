// Navbar.tsx
import React, { useState } from "react";
import { FiMoon, FiSun } from 'react-icons/fi';
import "tailwindcss/tailwind.css";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkModeToggle = (): void => {
    setDarkMode(!darkMode);
    // You can also implement further logic to apply dark theme across your application here.
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-white dark:bg-gray-800 shadow-sm">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Where in the world?</h1>
      </div>
      <div>
        <button onClick={handleDarkModeToggle} className="focus:outline-none">
          {darkMode ? <FiSun className="text-gray-500 dark:text-white text-2xl"/> : <FiMoon className="text-gray-500 dark:text-white text-2xl"/>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
