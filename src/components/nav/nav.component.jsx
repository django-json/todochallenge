import React from "react";

import "./nav.styles.css";

const Nav = () => (
	<nav className="nav">
		<a className="nav__link" href="#">
			All
		</a>
		<a className="nav__link" href="#">
			Active
		</a>
		<a className="nav__link" href="#">
			Completed
		</a>
	</nav>
);

export default Nav;
