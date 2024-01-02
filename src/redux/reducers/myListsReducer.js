
const initialState = {
    myLists: [],
}

const myListsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "MY_LIST_COMPLETE_CLICKED":
            let {listName, item} = action.listInfo;
            let listToAlter = state.myLists.filter(list => list.listName === listName)[0];
            let items = listToAlter.items;
            let updatedItems = items.map(listItem => {
                if (listItem.item === item) {
                    return {
                        item: listItem.item,
                        id: listItem.id,
                        complete: !listItem.complete,
                    }
                } else {
                    return listItem;
                }
            });
            listToAlter.items = updatedItems;
            return {
                ...state,
            }
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