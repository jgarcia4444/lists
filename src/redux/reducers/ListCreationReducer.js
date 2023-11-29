

const initialState = {
    creatingList: false,
    listNameError: "",
    stagedList: {
        newItemError: "",
        listName: "",
        items: [],
    },
}

const ListCreationReducer = (state=initialState, action) => {
    switch(action.type) {
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
            return {
                ...state,
                stagedList: {
                    ...state.stagedList,
                    items: state.stagedList.items.concat({item: action.newItem, complete: false})
                }
            }
        default:
            return state
    }
};

export default ListCreationReducer;