import React from 'react'

import FormInputLabel from '../../../../shared/labels';

const AddListName = ({valueInfo, createClick}) => {

    const {listName, changeFunc, listNameError} = valueInfo;

    return (
        <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-col items-start w-1/2 ">
                <small className=" text-red-500 text-sm font-bold ">{listNameError}</small>
                <FormInputLabel text={"List Name"} />
                <input type="text" className="w-1/2 border-b-2  border-black" value={listName} onChange={changeFunc} />
                <div className="w-1/2 flex justify-end mt-2">
                    <button onClick={createClick} className="text-sm font-bold rounded bg-blue-500 px-2 py-1">Create</button>
                </div>
            </div>
        </div>
    )
}

export default AddListName;