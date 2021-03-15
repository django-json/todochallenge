import React from "react";
import classNames from "classnames";

import "./button.styles.css";

const Button = ({
	label,
	iconAsLabel,
	startIcon,
	color,
	className,
	handleClick,
}) => (
	<button
		className={classNames("btn", className, {
			"btn--icon-only": iconAsLabel,
			"btn--start-icon": startIcon,
			[`btn--${color}`]: color,
		})}
		onClick={handleClick}
	>
		{iconAsLabel && <i className="material-icons">{iconAsLabel}</i>}
		{startIcon && <i className="material-icons">{startIcon}</i>}
		{label}
	</button>
);

export default Button;

Button.defaultProps = {
	handleClick: () => {},
};
