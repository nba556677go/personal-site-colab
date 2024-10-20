import React, { useState } from 'react';
import Link from './Link';

const headerNavLinks = [
  { href: '/about', title: 'About' },
  { href: '/publications', title: 'Publications' },
  { href: '/blog/123', title: 'Blog' }
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon for mobile */}
      <button
        onClick={toggleMenu}
        className="block sm:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Navbar Links - visible only on larger screens or when menu is open */}
      <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} sm:block`}>
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="ml-2 mr-2 font-bold text-gray-700 dark:text-gray-300 hvr-underline-from-center"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

