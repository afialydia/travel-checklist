import React from "react";
import { useSelector } from "react-redux";
import ChecklistItem from "./checklistItem";
import {
	selectChecklistItems,
	selectItemsPackedTotal,
	selectTotalItems,
} from "../../redux/checklist/checklist.selectors";

//This file holds the Checklist component. This component acts as a container for the actual checklist items which are pulled in from redux state using the react-redux useSelector hook.

const Checklist = () => {
	const items = useSelector(selectChecklistItems);

	//These slices are used to tell user how many of the items on the checklist have actually been packed
	const totalItems = useSelector(selectTotalItems);
	const totalPacked = useSelector(selectItemsPackedTotal);

	const PackingStatus = () => {
		//this nested if statement ensures that if a user has packed all items they recieve confirmation.
		if (totalItems > 1) {
			if (totalPacked === totalItems) {
				return <h2 className="text-xl">All Packed - Enjoy your Trip!</h2>;
			} else {
				return (
					<h2 className="text-xl">{`${totalPacked} of ${totalItems} Items Packed`}</h2>
				);
			}
		} else {
			return <h2 className="text-xl">Let's Pack!</h2>;
		}
	};

	return (
		<div className="bg-white w-full rounded-xl shadow-xl p-6 md:ml-5 max-h-[300px] md:max-h-[400px]">
			<div className="flex justify-between w-full ">
				{" "}
				<h2 className="text-xl">Packing List</h2>
				{PackingStatus()}
			</div>
			<div className="overflow-hidden mt-1">
				<div className="overflow-auto max-h-[225px] md:max-h-[325px] ">

					
					<table className="table-auto border-collapse w-full text-left h-full">
						<thead>
							<tr>
								<th>Packed? </th>
								<th>Amount</th>
								<th>Item</th>
							</tr>
						</thead>
						<tbody>
							{/* items are mapped over and distributed to individual
							ChecklistItems. */}
							{items.map((item) => (
								<ChecklistItem item={item} key={item.id} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Checklist;
