import "./App.css";
import Checklist from "./components/checklist";
import NewItemForm from "./components/newItemForm";

function App() {
	return (
		<div className="App">
			<h1>Travel Checklist</h1>
			<NewItemForm />
			<Checklist />
		</div>
	);
}

export default App;
