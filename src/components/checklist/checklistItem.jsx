import React from "react";
import { useDispatch } from "react-redux";
import { toggleItemPacked } from "../../redux/checklist/checklist.actions";

//This file holds the component that all checklist items are mapped to. The item is passed in from the Checklist via props and destructured so that it can be easily accessed. ex. {item} = props.item 

const ChecklistItem = ({ item }) => {
	//using dispatch hook to gain access to actions in the redux store 
	const dispatch = useDispatch();
	
	//descructured item keys for easier parcing
	let { id, name, quantity, packed } = item;

	const handleToggle = () => {
		//dispatching the toggleItemPacked action, this causes the value of the packed key to change within the checklist reducer
		dispatch(toggleItemPacked(id));
	};

	return (
		//Each checklist item renders to it's own row of the table, when any aspect of the row is clicked handleToggle is triggered. 
		<tr
			key={id}
			className="w-full hover:bg-gray-300
		 		rounded-lg cursor-pointer"
			htmlFor={id}
			onClick={() => handleToggle()}
		>
			<td className="pl-5">
					<input
						className="cursor-pointer"
						type="checkbox"
						onChange={handleToggle}
						onClick={handleToggle}
						name="packedValue"
						title={name}
						checked={packed}
						id={id}
					/>
			</td>
			<td className="pl-5">{`x ${quantity} `}</td>
			<td>{`${name}`}</td>
		</tr>
	);
};

export default ChecklistItem;
