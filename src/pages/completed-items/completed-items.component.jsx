import React, { Fragment } from "react";
import List from "../../components/list/list.component";
import Button from "../../components/button/button.component";

const CompletedItems = ({
	items,
	handleCheckboxChange,
	deleteAllItems,
	removeItem,
}) => (
	<Fragment>
		<List
			items={items}
			handleCheckboxChange={handleCheckboxChange}
			removeItem={removeItem}
			completed
			variant="checkbox"
		/>
		<div className="App__button-wrapper">
			{items.length > 0 && (
				<Button
					color="danger"
					startIcon="delete_outline"
					label="delete all"
					handleClick={deleteAllItems}
				/>
			)}
		</div>
	</Fragment>
);

export default CompletedItems;
