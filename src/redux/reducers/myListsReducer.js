
const initialState = {
    myLists: [],
}

const myListsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SAVE_STAGED_LIST":
            return {
                ...state,
                myLists: state.myLists.concat(action.stagedList),
            }
        default:
            return state;
    }
}

export default myListsReducer;