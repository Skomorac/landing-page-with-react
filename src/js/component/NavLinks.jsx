import React from "react";

const NavLinks = ({ links }) => {
  return (
    <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
      {links.map((title, index) => (
        <NavLinkItem key={index} title={title} isFirst={index === 0} />
      ))}
    </ul>
  );
};

const NavLinkItem = ({ title, isFirst }) => {
  return (
    <li className={`nav-item ${isFirst ? "active" : ""}`}>
      <a className={`nav-link ${isFirst ? "active" : ""}`} href="#">
        {title}
      </a>
    </li>
  );
};

export default NavLinks;
