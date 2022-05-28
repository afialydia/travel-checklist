//libraries
import React from "react";
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//styles

import "./index.css";

//files
import App from "./App.js";
import { store, persistor } from "./redux/store.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	
		<Provider store={store}>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
		</Provider>
);
