import React from 'react'
import AddItemsForm from './AddItemsForm';
import StagedList from './StagedList';

const AddItems = ({listName, list, newItemInfo, addItemClick, handleCompleteClick, handleSaveList}) => {

    return (
        <div className="flex flex-row mt-12">
            <div className="w-1/2">
                <AddItemsForm addItemClick={addItemClick} newItemInfo={newItemInfo}/>
            </div>
            <div className="w-1/2 flex flex-col items-center">
                <StagedList handleCompleteClick={handleCompleteClick} listName={listName} list={list}/>
                <button onClick={handleSaveList} className="w-3/4 mx-auto bg-blue-500 mt-1 rounded-lg py-1 text-white font-bold transition-all duration-300 hover:bg-blue-600 hover:cursor-pointer">Save</button>
            </div>
        </div>
    )
}

export default AddItems;