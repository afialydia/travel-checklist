import React from "react";

const ChecklistItem = ({item}) => {

	let { id, name, quantity, packed }  = item

	return (
		<div>
			<h5>{`${name}`}</h5>
		</div>
	);
};

export default ChecklistItem;
