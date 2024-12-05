import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-title">QuickBite</h3>
          <p className="footer-description">
            Delicious meals delivered fast to your door.
          </p>
        </div>
        <div className="footer-credits">
          <p className="footer-madeby">Made By Shaikh Yousuf.</p>
        </div>
        <ul className="footer-links">
          <li>
            <a href="/menu" className="footer-link">
              Menu
            </a>
          </li>
          <li>
            <a href="/about" className="footer-link">
              About Us
            </a>
          </li>
          <li>
            <a href="/services" className="footer-link">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
