import { createSelector } from "reselect";

const selectChecklist = (state) => state.checklist;

export const selectChecklistItems = createSelector(
	[selectChecklist],
	(checklist) => checklist.checklistItems
);
