import React from "react";
import PropTypes from "prop-types";
import "./AppNavigation.css";
import { useLocation, Link } from "react-router-dom";

function AppNavigation(props) {
  let location = useLocation();
  return (
    <nav className="app-navigation">
      <Link
        to="/"
        className={location.pathname === "/contacts/" ? "Link active" : "Link"}
      >
        Contacts
      </Link>
      <Link
        to="/contacts/new/"
        className={
          location.pathname === "/contacts/new/" ? "Link active" : "Link"
        }
      >
        New Contact
      </Link>
    </nav>
  );
}

AppNavigation.propTypes = {};

export default AppNavigation;
