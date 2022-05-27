import React, { useState } from "react";

function Form() {
	const [newItem, setNewItem] = useState("");

	const handleChange = (e) => {
		setNewItem(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const checklistItem = {
			item: newItem,
			packed: false,
			id: Date.now(),
		};
		console.log(checklistItem)
	};

	

	return (
		<form onSubmit={handleSubmit} >
			<input
				type="text"
				value={newItem}
				onChange={handleChange}
				name="newItem"
				required
			/>

			<div>
				<button  type="submit">
					Submit{" "}
				</button>
			</div>
		</form>
	);
}

export default Form;
