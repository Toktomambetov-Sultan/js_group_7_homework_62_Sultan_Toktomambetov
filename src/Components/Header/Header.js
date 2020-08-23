import React from "react";
import "./Header.css";
export default function Header({ history }) {
  const goToPath = path => {
    history.push({ pathname: path });
  };
  return (
    <div className="header">
      <ul className="header__link-list">
        <li className="header__link-item">
          <button
            onClick={() => goToPath("/home")}
            className={[
              "header__link",
              history.location.pathname === "/home" ? "active" : "",
            ].join(" ")}
          >
            Home
          </button>
        </li>
        <li className="header__link-item">
          <button
            onClick={() => goToPath("/contacts")}
            className={[
              "header__link",
              history.location.pathname === "/contacts" ? "active" : "",
            ].join(" ")}
          >
            Contacts
          </button>
        </li>
        <li className="header__link-item">
          <button
            onClick={() => goToPath("/about")}
            className={[
              "header__link",
              history.location.pathname === "/about" ? "active" : "",
            ].join(" ")}
          >
            About
          </button>
        </li>
      </ul>
    </div>
  );
}
