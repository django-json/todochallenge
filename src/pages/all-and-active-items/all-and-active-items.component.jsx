import React, { Fragment } from "react";
import ListHeader from "../../components/list-header/list-header.component";
import List from "../../components/list/list.component";

const AllAndActiveItems = ({
	details,
	addItem,
	handleChange,
	handleCheckboxChange,
	handleSubmit,
	items,
}) => (
	<Fragment>
		<ListHeader
			details={details.name}
			addItem={addItem}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
		/>
		<List
			items={items}
			handleCheckboxChange={handleCheckboxChange}
			variant="checkbox"
		/>
	</Fragment>
);

export default AllAndActiveItems;
