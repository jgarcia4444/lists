

const initialState = {
    creatingList: false,
    listNameError: "",
    stagedList: {
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
        default:
            return state
    }
};

export default ListCreationReducer;