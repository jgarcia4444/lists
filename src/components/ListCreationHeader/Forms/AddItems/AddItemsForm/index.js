import React from 'react'
import FormInputLabel from '../../../../../shared/labels';

const AddItemsForm = ({newItemInfo}) => {

    const {newItemText, changeFunc} = newItemInfo;

    return (
        <div className="">
            <FormInputLabel text={"New Item"} />
        </div>
    )
}

export default AddItemsForm;