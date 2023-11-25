

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
        case "LIST_NAME_SUBMITTED":
            return {
                ...state,
                creatingList: true,
                listNameError: "",
            }
        default:
            return state
    }
};

export default ListCreationReducer;