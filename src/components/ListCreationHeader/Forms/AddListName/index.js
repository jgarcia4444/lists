import React, {useState} from 'react'
import { connect } from 'react-redux';

import HeaderInput from '../../../../shared/inputs/HeaderInput';

import setListName from '../../../../redux/actions/listActions/setListName';

const AddListName = ({createClick, listNameError, setListNameError, setListName}) => {

    const [newListName, setNewListName] = useState("");

    const valueInfo = {
        listName: newListName,
        changeFunc: (val) => setNewListName(val.target.value)
    }

    const handleCreateClick = () => {
        if (newListName !== "") {
            setListName(newListName);
        } else {
            setListNameError("Cannot be left blank")
        }
    }

    return (
        <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-col items-start w-1/2 ">
                <HeaderInput valueInfo={valueInfo} label={"List Name"} />
                <small className=" text-red-500 text-sm font-bold ">{listNameError}</small>
                <div className="w-full flex justify-end mt-2">
                    <button onClick={handleCreateClick} className="text-sm font-bold text-white rounded bg-blue-500 px-4 py-1 transition-all duration-300 hover:bg-blue-600">Create</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listNameError: state.listCreation.listNameError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setListNameError: (errorMessage) => dispatch({type: "LIST_NAME_ERROR", errorMessage}),
        setListName: (listName) => dispatch(setListName(listName)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddListName);