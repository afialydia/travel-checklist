import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/checklist/checklist.actions";

function Form() {
	const dispatch = useDispatch();
	const initialState = { name: "", quantity: 0 };
	const [newItem, setNewItem] = useState(initialState
	);
	const { name, quantity } = newItem;

	const handleChange = (e) => {
		const { value, name } = e.target;
		setNewItem({ ...newItem, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newChecklistItem = {
			id: Date.now(),
			name: name,
			quantity: parseInt(quantity),
			packed: false,
		};
		dispatch(addItem(newChecklistItem));
		setNewItem(initialState);
	};


	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={name}
				onChange={handleChange}
				name="name"
				required
			/>{" "}
			<input
				type="number"
				min={0}
				max={30}
				value={parseInt(quantity)}
				onChange={handleChange}
				name="quantity"
				required
			/>{" "}
			<button
				type="button"
				onClick={() =>
					parseInt(quantity) === 30
						? 30
						: setNewItem({ ...newItem, quantity: quantity + 1 })
				}
			>
				+
			</button>
			<button
				type="button"
				onClick={() =>
					parseInt(quantity) === 0
						? 0
						: setNewItem({ ...newItem, quantity: quantity - 1 })
				}
			>
				-
			</button>
			<div>
				<button type="submit">Submit </button>
			</div>
		</form>
	);
}

export default Form;
