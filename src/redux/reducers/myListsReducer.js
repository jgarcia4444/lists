
const initialState = {
    myLists: [],
}

const myListsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "REMOVE_MY_LIST":
            return {
                ...state,
                myLists: state.myLists.filter(list => list.listId !== action.listId),
            }
        case "SAVE_STAGED_LIST":
            action.stagedList['listId'] = state.myLists.length;
            return {
                ...state,
                myLists: state.myLists.concat(action.stagedList),
            }
        default:
            return state;
    }
}

export default myListsReducer;