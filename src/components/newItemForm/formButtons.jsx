//Buttons have been extracted to make form more consise

export const Decrement = ({ quantity, newItem, setNewItem }) => {
	return (
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
	);
};

export const Increment = ({ quantity, newItem, setNewItem }) => {
	return (
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
	);
};
