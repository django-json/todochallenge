import React from "react";
import classNames from "classnames";

import "./todo-item.styles.css";

import Button from "../button/button.component";

const TodoItem = ({
	item,
	variant,
	completed,
	removeItem,
	handleCheckboxChange,
}) => (
	<li className={classNames("todo-item")}>
		{variant === "checkbox" && (
			<span className="todo-item__context">
				<label
					className="todo-item__label"
					htmlFor={`todo--${item.key}`}
				>
					<input
						type="checkbox"
						checked={item.isComplete}
						id={`todo--${item.key}`}
						onChange={(event) =>
							handleCheckboxChange(event, item.key)
						}
					/>
					<span>{item.name}</span>
				</label>
				{completed && item.isComplete && (
					<Button
						iconAsLabel="delete_outline"
						handleClick={() => removeItem(item.key)}
					/>
				)}
			</span>
		)}
	</li>
);

export default TodoItem;

TodoItem.defaultProps = {
	completed: false,
};
