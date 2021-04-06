import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.styles.css";

const Nav = () => {
	return (
		<nav className="nav">
			<NavLink
				exact
				to="/"
				className="nav__link"
				activeClassName="nav__link--active"
			>
				All
			</NavLink>
			<NavLink
				to="/active-items"
				className="nav__link"
				activeClassName="nav__link--active"
			>
				Active
			</NavLink>
			<NavLink
				to="/completed-items"
				className="nav__link"
				activeClassName="nav__link--active"
			>
				Completed
			</NavLink>
		</nav>
	);
};

export default Nav;
