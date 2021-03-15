import React from "react";

import "./list-header.styles.css";

import Button from "../button/button.component";
import Input from "../input/input.component";

const ListHeader = () => (
	<div className="list-header">
		<Input placeholder="add details" fullWidth />
		<Button color="primary" label="Add" />
	</div>
);

export default ListHeader;
