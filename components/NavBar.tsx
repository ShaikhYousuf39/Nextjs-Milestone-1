import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">QuickBite</div>
      <ul className="navbar-links">
        <li>
          <a href="/about" className="navbar-link">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="navbar-link">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-actions">
        <a href="/menu" className="navbar-btn navbar-btn-outline">
          Menu
        </a>
        <a href="/order" className="navbar-btn navbar-btn-primary">
          Order
        </a>
      </div>
    </nav>
  );
}
