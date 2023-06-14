// Navbar.tsx
import React, { useState } from "react";
import { FiMoon, FiSun } from 'react-icons/fi';
import Container from '../Container';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkModeToggle = (): void => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <Container>
        <div className="flex justify-between items-center p-5">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Where in the world?</h1>
          <button onClick={handleDarkModeToggle} className="focus:outline-none">
            {darkMode ? <FiSun className="text-gray-500 dark:text-white text-2xl"/> : <FiMoon className="text-gray-500 dark:text-white text-2xl"/>}
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
