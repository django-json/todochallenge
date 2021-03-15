import React from "react";
import classNames from "classnames";

import "./todo-item.styles.css";

const TodoItem = ({ item, variant }) => (
	<li className={classNames("todo-item")}>
		{variant === "checkbox" && (
			<span className="todo-item__context">
				<input type="checkbox" value={item} id={`todo--${item}`} />
				<label className="todo-item__label" htmlFor={`todo--${item}`}>
					{item}
				</label>
			</span>
		)}
	</li>
);

export default TodoItem;
