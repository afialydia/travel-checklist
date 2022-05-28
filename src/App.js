import "./App.css";
import Checklist from "./components/checklist";
import NewItemForm from "./components/newItemForm";

function App() {
	return (
		<div className="App">
			<NewItemForm />
			<Checklist />
		</div>
	);
}

export default App;
