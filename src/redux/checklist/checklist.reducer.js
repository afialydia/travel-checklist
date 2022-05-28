export const initialState = {
	checklistItems: [],
};

export const checklistReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				checklistItems: [...state.checklistItems, action.payload],
			};


		default:
			return state;
	}
};
