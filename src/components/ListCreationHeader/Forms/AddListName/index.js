import React, {useState} from 'react'

const AddListName = ({valueInfo}) => {

    const {listName, changeFunc} = valueInfo;

    return (
        <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-col items-start w-1/2 ">
                <h2 className="text-lg font-bold">List Name</h2>
                <input type="text" className="w-1/2 border-b-2 rounded border-black" value={listName} onChange={changeFunc} />
            </div>
        </div>
    )
}

export default AddListName;