import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


//Compose is used when you want to pass multiple store enhancers to the store. Store enhancers are higher order functions that add some extra functionality to the store. The only store enhancer which is supplied with Redux by default is applyMiddleware however many other are available.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];

//I've added a logger that is only accessible locally.

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);

	middlewares.push(logger);
}

//I've chosen to have the application's state persist in localStorage. I've done this so that end users have the ability to navigate away from the checklist without fear of losing their place. The persist config below allows me to do so. I also have the ability to whitelist or blacklist what kinds of information is saved locally. As this app only has one item in state I've chosen not to use such features. 

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
