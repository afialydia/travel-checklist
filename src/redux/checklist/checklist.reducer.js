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

		// case "CLEAR_ITEMS":
		// 	return {
		// 		...state,
		// 		checklist: state.checklist.filter(item => {
		// 			return !item.packed;
		// 		})
		// 	};

		default:
			return state;
	}
};
