import React, {useState} from 'react'

import AddItems from './Forms/AddItems';
import AddListName from './Forms/AddListName';

const ListCreationHeader = () => {

    const [creatingList, setCreatingList] = useState(false);
    const [listName, setListName] = useState("");

    const stateBasedListCreation = () => {
        const listNameObject = {
            listName,
            changeFunc: (val) => setListName(val.target.value)
        }
        return creatingList ? <AddItems /> : <AddListName valueInfo={listNameObject} />
    }

    return (
        <div className="">
            {stateBasedListCreation()}
        </div>
    )
}

export default ListCreationHeader;