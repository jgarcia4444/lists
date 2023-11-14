import React from 'react'
import AddItemsForm from './AddItemsForm';
import StagedList from './StagedList';

const AddItems = ({listName, list, newItemInfo}) => {

    return (
        <div className="flex flex-row">
            <div className="w-1/2">
                <AddItemsForm newItemInfo={newItemInfo}/>
            </div>
            <div className="w-1/2">
                <StagedList listName={listName} list={list}/>
            </div>
        </div>
    )
}

export default AddItems;