import { createSelector } from "reselect";

//The Reselect library provides a way to create memoized selector functions. Reselect's createSelector function accepts one or more "input selector" functions, and an "output selector" function, and returns a new selector function for you to use. Below are the selectors I've created for this application. Not all of them are in use, but they are available in case we were to expand the app's scope. 

//this accesses the slice of state that holds all of our checklist information
const selectChecklist = (state) => state.checklist;

//this allows us to access the checklist array
export const selectChecklistItems = createSelector(
	[selectChecklist],
	(checklist) => checklist.checklistItems
);

//this gets the amount of items on the checklist array
export const selectTotalItems = createSelector(
	[selectChecklist],
	(checklist) => checklist.checklistItems.length
);

//this creates a new array with all items that have not been packed
export const selectItemsToPack = createSelector(
	[selectChecklist],
	(checklist) =>
		checklist.checklistItems.filter((item) => item.packed === false)
);

//this creates a new array with all items that have not been packed and gets the amount of items present
export const selectItemsToPackTotal = createSelector(
	[selectChecklist],
	(checklist) =>
		checklist.checklistItems.filter((item) => item.packed === false).lenth
);

//this creates a new array with all items that have been packed
export const selectItemsPacked = createSelector(
	[selectChecklist],
	(checklist) => checklist.checklistItems.filter((item) => item.packed === true)
);

//this creates a new array with all items that have been packed and gets the amount of items present
export const selectItemsPackedTotal = createSelector(
	[selectChecklist],
	(checklist) =>
		checklist.checklistItems.filter((item) => item.packed === true).length
);


