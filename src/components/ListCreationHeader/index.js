import React, {useState} from 'react'

import AddItems from './Forms/AddItems';
import AddListName from './Forms/AddListName';

const ListCreationHeader = () => {

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
        console.log("New Item Text", newItemText)
        if (newItemText !== "") {
            const newItem = {item: newItemText, complete: false}
            setItemList(itemList.concat(newItem));
            setNewItemText("");
        }
    }

    const stateBasedListCreation = () => {
        if (creatingList) {
            const newItemObject = {
                newItemText, 
                changeFunc: (val) => setNewItemText(val.target.value),
            }
            return <AddItems addItemClick={handleAddItemClick} listName={listName} list={itemList} newItemInfo={newItemObject} />
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