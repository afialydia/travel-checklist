//Due to the size of this application, ActionTypes have been written in this file. ActionTypes are created to ensure that there is limited chance of a typo when creating and working with actions within the global state. 

export const ChecklistActionTypes = {
	ADD_ITEM: "ADD_ITEM",
	TOGGLE_ITEM_PACKED: "TOGGLE_ITEM_PACKED",
};

//An action, is an object that contains the payload of information. They are the only source of information for the Redux store to be updated. Reducers update store based on the value of the action. 

//This action aligns with the ChecklistActionTypes.ADD_ITEM case in the checklistReducer. It's payload is an item and that item is to be added to the checklist items array. 
export const addItem = (item) => ({
	type: ChecklistActionTypes.ADD_ITEM,
	payload: item,
});

//This action aligns with the ChecklistActionTypes.TOGGLE_ITEM_PACKED case in the checklistReducer. It's payload is the id of an item that will have the value of it's 'packed' key switched. 

export const toggleItemPacked = (id) => ({
	type: ChecklistActionTypes.TOGGLE_ITEM_PACKED,
	payload: id,
});
