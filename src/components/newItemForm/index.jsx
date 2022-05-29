import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/checklist/checklist.actions";

function Form() {
	const dispatch = useDispatch();
	const initialState = { name: "", quantity: 1 };
	const [newItem, setNewItem] = useState(initialState);
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
		<div className="bg-white w-full h-full rounded-xl mb-3 shadow-lg p-2 text-center p-3 max-w-md">
			<h2 className="text-xl">I need to pack...</h2>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-6 p-1.5  gap-3">
					<div className="col-span-6 md:col-span-2 w-full border-black flex justify-center md:justify-start">
						<button
							className="bg-yellow-600 hover:bg-yellow-500 p-1.5 font-bold rounded"
							type="button"
							onClick={() =>
								parseInt(quantity) === 1
									? 1
									: setNewItem({ ...newItem, quantity: parseInt(quantity) - 1 })
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>{" "}
						</button>
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
						<button
							className="bg-green-600 hover:bg-green-500 p-1.5 font-bold rounded"
							type="button"
							onClick={() =>
								parseInt(quantity) === 30
									? 30
									: setNewItem({ ...newItem, quantity: parseInt(quantity) + 1 })
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>{" "}
						</button>
					</div>
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
}

export default Form;
