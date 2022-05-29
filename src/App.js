import Checklist from "./components/checklist";
import NewItemForm from "./components/newItemForm";

function App() {
	return (
		<div className="App w-screen h-screen bg-gray-200 overflow-hidden select-none text-center">
			<div className="w-5/6 mx-auto pt-5 md:pt-20 h-full">
				<h1 className="text-3xl font-bold underline mb-4">Travel Checklist</h1>
				<div className="flex flex-col md:flex-row justify-evenly">
					<NewItemForm />
					<Checklist />
				</div>
			</div>
		</div>
	);
}

export default App;
