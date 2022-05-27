import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ChecklistItem from "./checklistItem";

const Checklist = () => {
	let items = [
		{ id: 1, name: "robe", quantity: 3, packed: false },
		{ id: 2, name: "robe", quantity: 3, packed: false },
		{ id: 3, name: "robe", quantity: 3, packed: false },
		{ id: 4, name: "item", quantity: 3, packed: false },
	];

	return (
		<div>
			{items.map((item) => (
				<ChecklistItem item={item} key={item.id} />
			))}
		</div>
	);
};

export default Checklist;
