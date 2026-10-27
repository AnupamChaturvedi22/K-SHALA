import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../Pages/images/Main_logo.jpeg";
import "./Header.css";

const SERVICE_ITEMS = [
  { label: "IT Courses", to: "/servicespage" },
  { label: "Mechanical Engineering Courses", to: "/mechanical-courses" },
  { label: "Civil Engineering Courses", to: "/civil-courses" },
  { label: "Medical Coding (Pharmacy)", to: "/medical-courses" },
];

// Desktop with a real mouse -> dropdown opens on hover.
// Phones / tablets / touch -> dropdown opens on tap (accordion in the burger menu).
const canHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 769px) and (hover: hover)").matches;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  const isActive = (to) => pathname === to;
  const servicesActive = SERVICE_ITEMS.some((item) => isActive(item.to));

  // Close everything (used on every link click and route change)
  const closeAll = useCallback(() => {
    clearTimeout(closeTimer.current);
    setMenuOpen(false);
    setServicesOpen(false);
  }, []);

  // Route changed -> close menus
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Click/tap outside the dropdown, or Esc key -> close the dropdown
  useEffect(() => {
    const onPointerDown = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      clearTimeout(closeTimer.current);
    };
  }, []);

  // ----- Services dropdown behaviour -----
  const handleMouseEnter = () => {
    if (!canHover()) return;
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (!canHover()) return;
    // tiny delay so the menu doesn't flicker if the mouse wobbles
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const handleToggleClick = () => {
    if (canHover()) {
      setServicesOpen(true); // desktop: hover already opens it, a click just keeps it open
    } else {
      setServicesOpen((open) => !open); // touch / mobile: tap toggles
    }
  };

  // Keyboard users: close when focus leaves the dropdown
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false);
  };

  const toggleBurger = () => {
    setMenuOpen((open) => !open);
    setServicesOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo header-logo-link" onClick={closeAll}>
        <div className="logo-box">
          <img src={logo} alt="K-Shala logo" className="logo-img" />
        </div>
        <div>
          <h2>K-Shala</h2>
          <p>Learn Today, Lead Tomorrow</p>
        </div>
      </Link>

      {/* Burger Icon (mobile) */}
      <div
        className="menu-icon"
        onClick={toggleBurger}
        role="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links active-menu" : "nav-links"}>
        <li className={isActive("/") ? "active" : undefined}>
          <Link to="/" onClick={closeAll}>
            Home
          </Link>
        </li>

        {/* Services dropdown */}
        <li
          ref={servicesRef}
          className={
            "has-dropdown" +
            (servicesActive ? " active" : "") +
            (servicesOpen ? " open" : "")
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onBlur={handleBlur}
        >
          <button
            type="button"
            className="dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={servicesOpen}
            onClick={handleToggleClick}
          >
            Services <FaChevronDown className="dropdown-caret" />
          </button>

          <ul className="dropdown-menu">
            {SERVICE_ITEMS.map(({ label, to }) => (
              <li key={to} className={isActive(to) ? "active" : undefined}>
                <Link to={to} onClick={closeAll}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className={isActive("/about") ? "active" : undefined}>
          <Link to="/about" onClick={closeAll}>
            About
          </Link>
        </li>

        <li className={isActive("/contact") ? "active" : undefined}>
          <Link to="/contact" onClick={closeAll}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;