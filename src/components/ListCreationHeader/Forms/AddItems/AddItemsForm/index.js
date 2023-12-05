import React, {useState} from 'react'
import {connect} from 'react-redux';

import HeaderInput from '../../../../../shared/inputs/HeaderInput';

const AddItemsForm = ({itemSubmitted, clearInput, setNewItemError, stagedList, addItem, updateNewItemText}) => {

    const {newItemError, newItemText} = stagedList;

    const valueInfo = {
        listName: newItemText,
        changeFunc: (val) => updateNewItemText(val.target.value),
    }

    const handleAddItem = () => {
        if (newItemText !== "") {
            addItem(newItemText);
        } else {
            setNewItemError("Cannot be left blank")
        }
    }

    return (
        <div className="w-full flex justify-center">
            <div className="w-1/2 flex flex-col items-start">
                <HeaderInput clearInput={clearInput} itemSubmitted={itemSubmitted} valueInfo={valueInfo} label={"New Item"} />
                <small className=" text-red-500 text-sm font-bold ">{newItemError}</small>
                <div className="flex justify-end w-full mt-2">
                    <button onClick={handleAddItem} className="text-sm font-bold text-white rounded bg-blue-500 px-4 py-1 transition-all duration-300 hover:bg-blue-600">Add Item</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stagedList: state.listCreation.stagedList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNewItemError: (errorMessage) => dispatch({type: "NEW_ITEM_ERROR", errorMessage}),
        addItem: (newItem) => dispatch({type: "ADD_ITEM_TO_STAGED", newItem}),
        updateNewItemText: (textValue) => dispatch({type: "UPDATE_NEW_ITEM_TEXT", val: textValue}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemsForm);