import { createSelector } from "reselect";

const selectChecklist = (state) => state.checklist;

export const selectChecklistItems = createSelector(
	[selectChecklist],
	(checklist) => checklist.checklistItems
);

export const selectTotalItems = createSelector(
	[selectChecklist],
	(checklist) => checklist.checklistItems.length
);

export const selectItemsToPack = createSelector(
	[selectChecklist],
	(checklist) =>
		checklist.checklistItems.filter((item) => item.packed === false)
);
export const selectItemsToPackTotal = createSelector(
	[selectChecklist],
	(checklist) =>
		checklist.checklistItems.filter((item) => item.packed === false).lenth
);

export const selectItemsPacked = createSelector(
	[selectChecklist],
	(checklist) => checklist.checklistItems.filter((item) => item.packed === true)
);

export const selectItemsPackedTotal = createSelector(
	[selectChecklist],
	(checklist) =>
		checklist.checklistItems.filter((item) => item.packed === true).length
);
