import React, {useEffect} from 'react';
import FormInputLabel from '../../labels';

const HeaderInput = ({valueInfo, label, itemSubmitted=false, clearInput=null}) => {

    const {listName, changeFunc,} = valueInfo

    const handleClick = () => {
        if (itemSubmitted === true) {
            // clear the input
            clearInput()
        }
    }

    useEffect(() => {

    },[listName])

    return (
        <div className="w-full">
            <FormInputLabel text={label} />
            <input onMouseDown={handleClick} placeholder={label} type="text" className="w-full shadow-inner shadow-blue-200 text-white px-2 rounded-lg bg-blue-500 bg-opacity-30" value={listName} onChange={changeFunc} />
        </div>
    )
};

export default HeaderInput;