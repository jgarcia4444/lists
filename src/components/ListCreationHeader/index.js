import React, {useState, useEffect} from 'react'

import AddItems from './Forms/AddItems';
import AddListName from './Forms/AddListName';

const ListCreationHeader = ({sendListToMyList}) => {

    const [creatingList, setCreatingList] = useState(false);
    const [newListName, setNewListName] = useState("");
    const [listNameError, setListNameError] = useState("");
    const [listName, setListName] = useState("");
    const [itemList, setItemList] = useState([]);
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
        console.log("Add Item clicked!");
        console.log("new item text", newItemText);
        if (newItemText !== "") {
            const newItem = {item: newItemText, complete: false}
            setNewItemText("");
            setItemList(itemList.concat(newItem));
            console.log("new item text", newItemText);
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

    const stateBasedListCreation = () => {
        if (creatingList) {
            const newItemObject = {
                newItemText, 
                changeFunc: (val) => setNewItemText(val.target.value),
            }
            return <AddItems handleSaveList={handleSaveList} handleCompleteClick={handleCompleteClick} addItemClick={handleAddItemClick} listName={listName} list={itemList} newItemInfo={newItemObject} />
        } else {
            const listNameObject = {
                newListName,
                changeFunc: (val) => setNewListName(val.target.value),
                listNameError
            }
            return <AddListName createClick={handleCreateClick} valueInfo={listNameObject} />
        }
    }

    useEffect(() => {
        setNewItemText("");
    },[itemList])

    return (
        <div className="">
            {stateBasedListCreation()}
        </div>
    )
}

export default ListCreationHeader;