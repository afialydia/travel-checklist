export const initialState = {
	checklistItems: [],
};

export const checklistReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				checklistItems: [action.payload, ...state.checklistItems],
			};

		case "TOGGLE_ITEM_PACKED":
			return {
				...state,
				checklistItems: [...state.checklistItems].map((item) => {
					return item.id === action.payload
						? {
								...item,
								packed: !item.packed,
						  }
						: item;
				}),
			};

		default:
			return state;
	}
};
