import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/checklist/checklist.actions";
import { Decrement, Increment } from "./formButtons";

//This file holds the form to create a new checklist item. 

const Form = () => {
	const dispatch = useDispatch();

	//Setting form state so that when information is sent to global state it maps properly. Created initial new item state for useState hook, then destructured it so that I could work with the actual keys.
	const initialState = { name: "", quantity: 1 };
	const [newItem, setNewItem] = useState(initialState);
	const { name, quantity } = newItem;

	//In this handleChange I'm spreading in the current component state newItem and mapping any updates picked up via the form.
	const handleChange = (e) => {
		const { value, name } = e.target;
		setNewItem({ ...newItem, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//newChecklistItem is created in the handleSubmit. Here we make sure to add and 'packed' and set it to false and a unique id to the item by using Date.now().
		const newChecklistItem = {
			id: Date.now(),
			name: name,
			quantity: parseInt(quantity),
			packed: false,
		};

		//We then use the react-redux useDispatch hook (via a variable created above) to access the addItem action located in redux. 
		dispatch(addItem(newChecklistItem));

		//We then reset the state of the fields.
		setNewItem(initialState);
	};

	return (
		<div className="bg-white w-full h-full rounded-xl mb-3 shadow-lg p-2 text-center p-3 max-w-md">
			<h2 className="text-xl">I need to pack...</h2>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-6 p-1.5  gap-3">

					{/* input that updates quantity state below */}
					<div className="col-span-6 md:col-span-2 w-full border-black flex justify-center md:justify-start">
						{/* Please note that the state of the input in this div can be written in or updated using an increment & decrement buttons. It has a range	between 1 and 30. */}

						<Decrement
							quantity={quantity}
							newItem={newItem}
							setNewItem={setNewItem}
						/>
						<input
							className="max-w-[35px] font-bold font-mono py-1.5 px-2 mx-1.5
            block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-1
            focus:ring-sky-500
            focus:invalid:border-red-500  focus:invalid:ring-red-500"
							type="number"
							min={1}
							max={30}
							value={parseInt(quantity)}
							onChange={handleChange}
							name="quantity"
							placeholder={1}
							required
						/>
						<Increment
							quantity={quantity}
							newItem={newItem}
							setNewItem={setNewItem}
						/>
					</div>
					{/* input that updates name state below */}
					<div className="col-span-6 md:col-span-4 flex justify-center">
						<input
							className="h-full w-full text-md rounded-lg focus:outline-none focus:ring focus:border-blue-300 indent-2 "
							type="text"
							value={name}
							onChange={handleChange}
							name="name"
							placeholder=" ...toothbrush"
							label="item name"
							aria-label="Item Name"
							required
						/>
					</div>
				</div>

				<div>
					<button
						className="bg-pink-600 hover:bg-pink-500 p-1.5 font-bold rounded-lg w-full "
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
