import React, {useState, useEffect} from 'react'
import { connect, useDispatch } from 'react-redux';

import AddItems from './Forms/AddItems';
import AddListName from './Forms/AddListName';

import setListName from '../../redux/actions/listActions/setListName';

const ListCreationHeader = ({sendListToMyList, setListName, listCreation, setListNameError, itemListAppend, clearStagedList}) => {

    const [newListName, setNewListName] = useState("");
    const [newItemText, setNewItemText] = useState("");

    const {creatingList, stagedList} = listCreation;
    const {itemList, listName} = stagedList;

    const dispatch = useDispatch();
    
    const toggleCreatingList = dispatch({type: "TOGGLE_CREATING_LIST"});

    const handleCreateClick = () => {
        if (newListName !== "") {
            setListName(newListName);
            toggleCreatingList();
            setListNameError("");
        } else {
            setListNameError("Cannot be left blank");
        }
    }

    const handleAddItemClick = () => {
        if (newItemText !== "") {
            const newItem = {item: newItemText, complete: false}
            itemListAppend(newItem);
            setNewItemText("");
        }
        setNewItemText("");
    }

    const handleCompleteClick = (itemIndex) => {
        // update the items array using the item index
        // Update the the complete property to the opposite of what it is
    }

    const clearStagedInfo = () => {
        clearStagedList()
        setNewItemText("");
        toggleCreatingList();
    }

    const handleSaveList = () => {
        let listInfo = {
            listName,
            itemList,
        };
        sendListToMyList(listInfo);
        clearStagedInfo()
    }

    const clearInput = () => {
        setNewItemText("");
        setItemSubmitted(false);
    }

    const stateBasedListCreation = () => {
        if (creatingList) {
            const newItemObject = {
                newItemText, 
                changeFunc: (val) => setNewItemText(val.target.value),
            }
            return <AddItems clearInput={clearInput} itemSubmitted={itemSubmitted} handleSaveList={handleSaveList} handleCompleteClick={handleCompleteClick} addItemClick={handleAddItemClick} listName={listName} list={itemList} newItemInfo={newItemObject} />
        } else {
            const listNameObject = {
                newListName,
                changeFunc: (val) => setNewListName(val.target.value),
                listNameError
            }
            return <AddListName createClick={handleCreateClick} valueInfo={listNameObject} />
        }
    }

    return (
        <div className="">
            {stateBasedListCreation()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listCreation: state.listCreation,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setListName: (listName) => dispatch(setListName(listName)),
        setListNameError: (errorMessage) => dispatch({type: "SET_LIST_NAME_ERROR", errorMessage}),
        itemListAppend: (newItem) => dispatch({type: "APPEND_TO_ITEM_LIST", newItem}),
        clearStagedList: () => dispatch({type: "CLEAR_STAGED_LIST"}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListCreationHeader);