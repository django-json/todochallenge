import React from "react";
import classNames from "classnames";

import "./input.styles.css";

const Input = ({ className, fullWidth, placeholder, value, handleChange }) => (
	<input
		className={classNames("input", className, {
			"input--fullwidth": fullWidth,
		})}
		type="text"
		placeholder={placeholder}
		onChange={handleChange}
	/>
);

export default Input;

Input.defaultProps = {
	value: "",
	handleChange: () => {},
};
