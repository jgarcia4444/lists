

const initialState = {
    creatingList: false,
    listNameError: "",
    stagedList: {
        newItemText: "",
        newItemError: "",
        listName: "",
        items: [],
    },
}

const ListCreationReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SAVE_STAGED_LIST":
            return {
                ...initialState,
            };
        case "SET_LIST_NAME":
            return {
                ...state,
                creatingList: true,
                listNameError: "",
                stagedList: {
                    ...state.stagedList,
                    listName: action.listName,
                }
            }
        case "TOGGLE_CREATING_LIST": 
            return {
                ...state,
                creatingList: !state.creatingList,
            }
        case "SET_LIST_NAME_ERROR":
            return {
                ...state,
                creatingList: false,
                listNameError: action.errorMessage,
            }
        case "APPEND_TO_ITEM_LIST":
            return {
                ...state,
                stagedList: {
                    ...state.stagedList,
                    items: state.items.concat(action.newItem),
                }
            }
        case "CLEAR_STAGED_LIST":
            return {
                ...state,
                stagedList: {
                    items: [],
                    listName: "",
                },
            }
        case "LIST_NAME_ERROR": 
            return {
                ...state,
                listNameError: action.errorMessage,
            }
        case "NEW_ITEM_ERROR":
            return {
                ...state,
                stagedList: {
                    ...state.stagedList,
                    newItemError: action.errorMessage,
                }
            }
        case "ADD_ITEM_TO_STAGED":
            console.log("Reducer Triggered", action);
            return {
                ...state,
                stagedList: {
                    ...state.stagedList,
                    items: state.stagedList.items.concat({item: action.newItem, complete: false}),
                    newItemText: "",
                }
            }
        case "UPDATE_NEW_ITEM_TEXT":
            return {
                ...state,
                stagedList: {
                    ...state.stagedList,
                    newItemText: action.val
                }
            }
        case "ITEM_COMPLETE_CLICKED":
            const items = state.stagedList.items;
            const completeUpdatedItems = items.map(listItem => {
                if (listItem.item === action.itemId) {
                    return {
                        item: listItem.item,
                        id: listItem.id,
                        complete: !listItem.complete,
                    }
                } else {
                    return listItem;
                }
            })
            return {
                ...state,
                stagedList: {
                    ...state.stagedList,
                    items: completeUpdatedItems,
                }
            }
        case "REMOVE_ITEM":
            const removedItemItems = state.stagedList.items.filter(listItem => listItem.item !== action.itemName)
            return {
                ...state,
                stagedList: {
                    ...state.stagedList,
                    items: removedItemItems
                }
            }
        default:
            return state
    }
};

export default ListCreationReducer;