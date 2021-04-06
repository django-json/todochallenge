import React from "react";
import classNames from "classnames";

import "./input.styles.css";

const Input = ({ className, fullWidth, placeholder, value, handleChange }) => (
	<input
		className={classNames("input", className, {
			"input--fullwidth": fullWidth,
		})}
		type="text"
		value={value}
		placeholder={placeholder}
		onChange={handleChange}
		autoFocus
	/>
);

export default Input;

Input.defaultProps = {
	handleChange: () => {},
};
