import React from 'react'
import FormInputLabel from '../../../../../shared/labels';

const AddItemsForm = ({newItemInfo, addItemClick}) => {

    const {newItemText, changeFunc} = newItemInfo;

    return (
        <div className="w-full flex justify-center">
            <div className="w-1/2 flex flex-col items-start">
                <FormInputLabel text={"New Item"} />
                <input type="text" className="border-black border-b-2 w-full" onChange={changeFunc} value={newItemText} />
                <div className="flex justify-end w-full mt-2">
                    <button onClick={addItemClick} className="text-sm font-bold rounded bg-blue-500 px-2 py-1">Add Item</button>
                </div>
            </div>
        </div>
    )
}

export default AddItemsForm;