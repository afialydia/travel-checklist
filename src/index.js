import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.js";
import { store, persistor } from "./redux/store.js";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
