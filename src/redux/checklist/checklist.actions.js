export const ChecklistActionTypes = {
	ADD_ITEM: "ADD_ITEM",
};

export const addItem = (item) => ({
	type: ChecklistActionTypes.ADD_ITEM,
	payload: item,
});
