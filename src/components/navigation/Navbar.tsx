// Navbar.tsx
import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Container from '../Container';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, selectTheme } from '../../features/theme/themeSlice';

// Rest of the code


const Navbar: React.FC = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleDarkModeToggle = (): void => {
    dispatch(toggleTheme());
  };

  return (
    <nav className={`bg-white ${theme === 'dark' ? 'bg-dark' : ''} shadow-sm`}>
      <Container>
        <div className="flex justify-between items-center p-5">
          <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-light' : 'text-gray-900'}`}>
            Where in the world?
          </h1>
          <button onClick={handleDarkModeToggle} className="focus:outline-none">
            {theme === 'dark' ? (
              <FiSun className={`text-gray-500 dark:text-white text-2xl ${theme === 'dark' ? 'text-light' : ''}`} />
            ) : (
              <FiMoon className={`text-gray-500 dark:text-white text-2xl ${theme === 'dark' ? 'text-light' : ''}`} />
            )}
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
