import React from "react";
import classNames from "classnames";

import "./todo-item.styles.css";

import Button from "../button/button.component";

const TodoItem = ({ item, id, variant, completed }) => (
	<li className={classNames("todo-item")}>
		{variant === "checkbox" && (
			<span className="todo-item__context">
				<label className="todo-item__label" htmlFor={`todo--${id}`}>
					<input type="checkbox" value={item} id={`todo--${id}`} />
					<span>{item}</span>
				</label>
				{completed && <Button iconAsLabel="delete_outline" />}
			</span>
		)}
	</li>
);

export default TodoItem;

TodoItem.defaultProps = {
	completed: false,
};
