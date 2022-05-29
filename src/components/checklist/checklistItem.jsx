import React from "react";
import { useDispatch } from "react-redux";
import { toggleItemPacked } from "../../redux/checklist/checklist.actions";

const ChecklistItem = ({ item }) => {
	const dispatch = useDispatch();
	let { id, name, quantity, packed } = item;

	const handleChange = () => {
		dispatch(toggleItemPacked(id));
	};

	return (
		<tr
			key={id}
			className="w-full hover:bg-gray-300
		 		rounded-lg cursor-pointer"
			htmlFor={id}
			onClick={() => handleChange()}
		>
			<td className="pl-5">
				<label htmlFor={id}>
					<input
						type="checkbox"
						onChange={handleChange}
						name="packedValue"
						title={name}
						checked={packed}
						id={id}
					/>
				</label>
			</td>

			<td className="pl-5">{`x ${quantity} `}</td>
			<td>{`${name}`}</td>
		</tr>
	);
};

export default ChecklistItem;
