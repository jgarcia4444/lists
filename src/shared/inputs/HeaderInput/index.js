import React from 'react';
import FormInputLabel from '../../labels';

const HeaderInput = ({valueInfo, label}) => {

    const {listName, changeFunc,} = valueInfo

    return (
        <div className="w-full">
            <FormInputLabel text={label} />
            <input placeholder={label} type="text" className="w-full shadow-inner shadow-blue-200 text-white px-2 rounded-lg bg-blue-500 bg-opacity-30" value={listName} onChange={changeFunc} />
        </div>
    )
};

export default HeaderInput;