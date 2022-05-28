import React, { useState } from "react";

const ChecklistItem = ({ item }) => {
	let { id, name, quantity, packed } = item;

	const [isPacked, setIsPacked] = useState(packed);
	console.log(item);

	const handleChange = (e) => {
		setIsPacked(e.target.value);
	};

	return (
		<div>
			<input
				type="checkbox"
				value={packed}
				onChange={handleChange}
				name="newItem"
				required
			/>
			<h5>{`${name} ${quantity}`}</h5>
			
		</div>
	);
};

export default ChecklistItem;
