import React from "react";

import "./list-header.styles.css";

import Button from "../button/button.component";
import Input from "../input/input.component";

const ListHeader = ({ details, addItem, handleChange, handleSubmit }) => (
	<div className="list-header">
		<form className="list-header__form" onSubmit={handleSubmit}>
			<Input
				value={details}
				placeholder="add details"
				fullWidth
				handleChange={handleChange}
			/>
			<Button type="submit" color="primary" label="Add" />
		</form>
	</div>
);

export default ListHeader;
