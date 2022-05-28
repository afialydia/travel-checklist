export const ChecklistActionTypes = {
	ADD_ITEM: "ADD_ITEM",
	TOGGLE_ITEM_PACKED: "TOGGLE_ITEM_PACKED",
};

export const addItem = (item) => ({
	type: ChecklistActionTypes.ADD_ITEM,
	payload: item,
});

export const toggleItemPacked = (id) => ({
	type: ChecklistActionTypes.TOGGLE_ITEM_PACKED,
	payload: id,
});
