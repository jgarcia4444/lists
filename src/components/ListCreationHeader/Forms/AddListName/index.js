import React from 'react'

import FormInputLabel from '../../../../shared/labels';
import HeaderInput from '../../../../shared/inputs/HeaderInput';

const AddListName = ({valueInfo, createClick}) => {

    const {listName, changeFunc, listNameError} = valueInfo;

    return (
        <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-col items-start w-1/2 ">
                <small className=" text-red-500 text-sm font-bold ">{listNameError}</small>
                <HeaderInput valueInfo={valueInfo} label={"List Name"} />
                <div className="w-1/2 flex justify-end mt-2">
                    <button onClick={createClick} className="text-sm font-bold text-white rounded bg-blue-500 px-4 py-1 transition-all duration-300 hover:scale-105 hover:bg-blue-600">Create</button>
                </div>
            </div>
        </div>
    )
}

export default AddListName;