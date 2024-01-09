
const initialState = {
    myLists: [],
}

const myListsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "MY_LIST_COMPLETE_CLICKED":
            let {listInfo} = action;
            let {listName, item} = listInfo;
            const targetedList = state.myLists.filter(list => list.listName === listName)[0];
            const targetedListItems = targetedList.items;
            var itemIndex;
            targetedListItems.forEach((listItem, i)=> {
                if (listItem.item === item) {
                    itemIndex = i;
                }
            });
            let itemToAlter = targetedListItems[itemIndex];
            let alteredItems = targetedListItems.slice(0, itemIndex);
            alteredItems.push({item: item, completed: !itemToAlter.completed})
            alteredItems += targetedListItems.slice(itemIndex + 1);

            targetedList.items = alteredItems;

            let newMyLists = state.myLists.slice(0, targetedList.listId) + targetedList + state.myLists.slice(targetedList.listId + 1);

            return {
                ...state,
                myLists: newMyLists,
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