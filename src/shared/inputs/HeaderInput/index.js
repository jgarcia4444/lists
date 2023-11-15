import React from 'react';
import FormInputLabel from '../../labels';

const HeaderInput = ({valueInfo, label}) => {

    const {listName, changeFunc,} = valueInfo

    return (
        <div className="w-full">
            <FormInputLabel text={label} />
            <input type="text" className="w-full shadow-inner shadow-blue-500 rounded-lg bg-blue-500 bg-opacity-20" value={listName} onChange={changeFunc} />
        </div>
    )
};

export default HeaderInput;