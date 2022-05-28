import React from "react";
import { useDispatch } from "react-redux";
import { toggleItemPacked } from "../../redux/checklist/checklist.actions";

const ChecklistItem = ({ item }) => {
	const dispatch = useDispatch();
	let { id, name, quantity, packed } = item;

	const handleChange = (e) => {
		dispatch(toggleItemPacked(id));
	};

	console.log(packed);
	return (
		<div key={id}>
			<input
				type="checkbox"
				onChange={handleChange}
				name="packedValue"
				checked={packed}
			/>
			<h5>{`${name} ${quantity}`}</h5>
		</div>
	);
};

export default ChecklistItem;
