import React from 'react'
import { connect } from 'react-redux';

import AddItemsForm from './AddItemsForm';
import StagedList from './StagedList';

import saveStagedList from '../../../../redux/actions/myLists/saveStagedList';

const AddItems = ({ newItemInfo, addItemClick, handleCompleteClick,  clearInput, saveStagedList, stagedList}) => {

    const {listName, items} = stagedList;

    const handleSaveList = () => {

    }

    return (
        <div className="flex flex-row mt-12">
            <div className="w-1/2">
                <AddItemsForm clearInput={clearInput} addItemClick={addItemClick} newItemInfo={newItemInfo}/>
            </div>
            <div className="w-1/2 flex flex-col items-center">
                <StagedList handleCompleteClick={handleCompleteClick} />
                <button onClick={handleSaveList} className="w-3/4 mx-auto bg-blue-500 mt-1 rounded-lg py-1 text-white font-bold transition-all duration-300 hover:bg-blue-600 hover:cursor-pointer">Save</button>
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
        saveStagedList: (stagedList) => dispatch(saveStagedList(stagedList)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItems);