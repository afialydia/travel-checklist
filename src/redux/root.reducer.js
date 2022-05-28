import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { checklistReducer } from "./checklist/checklist.reducer";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	checklist: checklistReducer,
});

export default persistReducer(persistConfig, rootReducer);
