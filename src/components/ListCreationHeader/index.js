import React, {useState, useEffect} from 'react'

import AddItems from './Forms/AddItems';
import AddListName from './Forms/AddListName';

const ListCreationHeader = ({sendListToMyList}) => {

    const [newListName, setNewListName] = useState("");
    const [newItemText, setNewItemText] = useState("");

    const handleCreateClick = () => {
        if (newListName !== "") {
            setListName(newListName);
            setCreatingList(true);
            setListNameError("");
        } else {
            setListNameError("Cannot be left blank");
        }
    }

    const handleAddItemClick = () => {
        if (newItemText !== "") {
            const newItem = {item: newItemText, complete: false}
            setItemList(itemList.concat(newItem));
            setNewItemText("");
        }
        setNewItemText("");
    }

    const handleCompleteClick = (itemIndex) => {
        // update the items array using the item index
        // Update the the complete property to the opposite of what it is
    }

    const clearStagedInfo = () => {
        setItemList([]);
        setListName("");
        setNewItemText("");
        setCreatingList(false);
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
        console.log("TESTTTTT");
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

export default ListCreationHeader;