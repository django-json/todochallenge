import React, { createElement } from "react";
import PropTypes from "prop-types";

import TodoItem from "../todo-item/todo-item.component";

const List = ({ items, itemRenderer, className, ...props }) => (
	<ul className={("list", className)}>
		{items.map((item, index) => {
			// Set the new props to the item renderer
			const newProps = Object.assign(
				{ key: index },
				{ item },
				{ ...props }
			);
			// Assign the new props to the item renderer
			return createElement(itemRenderer, newProps);
		})}
	</ul>
);

export default List;

List.propTypes = {
	items: PropTypes.array,
	itemRenderer: PropTypes.func,
};

List.defaultProps = {
	items: [],
	itemRenderer: TodoItem,
};
