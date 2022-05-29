import { combineReducers } from "redux";
import { checklistReducer } from "./checklist/checklist.reducer";



//Below I've created the rootReducer using combineReducers. This turns an object whose values are different reducer functions, into a single reducer function. It will call every child reducer, and gather their results into a single state object, whose keys correspond to the keys of the passed reducer functions. Given that this application only has one reducer to mind, the creation of a root reducer is not needed, however setting the project up to accomodate growth of the application and potention expansion of the application's state. 

const rootReducer = combineReducers({
	checklist: checklistReducer,
});

export default rootReducer
