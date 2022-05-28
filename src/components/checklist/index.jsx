import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChecklistItems } from "../../redux/checklist/checklist.selectors";
import ChecklistItem from "./checklistItem";

const Checklist = () => {
	const items = useSelector(selectChecklistItems)

	return (
		<div>
			{items.map((item) => (
				<ChecklistItem item={item} key={item.id} />
			))}
		</div>
	);
};

export default Checklist;
