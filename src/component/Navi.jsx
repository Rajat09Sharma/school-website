// Navbar.js
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        About
      </NavLink>
      <div 
        className="dropdown" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
          Services
        </NavLink>
        {dropdownOpen && (
          <div className="dropdown-content">
            <NavLink to="/services/web-development" className={({ isActive }) => (isActive ? 'active' : '')}>
              Web Development
            </NavLink>
            <NavLink to="/services/app-development" className={({ isActive }) => (isActive ? 'active' : '')}>
              App Development
            </NavLink>
            <NavLink to="/services/seo" className={({ isActive }) => (isActive ? 'active' : '')}>
              SEO
            </NavLink>
          </div>
        )}
      </div>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
