import React from 'react'
import {connect} from 'react-redux';

import FormInputLabel from '../../../../../shared/labels';
import ListItem from '../../../../../shared/lists/ListItem';

const StagedList = ({stagedList, handleCompleteClick}) => {

    const {listName, items} = stagedList;

    const renderItems = () => {
        if (items.length > 0) {
            return items.map((itemInfo, i) => {
                return <ListItem id={i} handleCompleteClick={handleCompleteClick} itemInfo={itemInfo} key={`${i}-${itemInfo.item}`} />
            } )
        } else {
            return ""
        }
    }

    return (
        <div className=" mx-auto w-3/4 bg-blue-500 pb-1 rounded-lg text-white">
            <div className="bg-black bg-opacity-40 text-center rounded-t-lg py-1">
                <FormInputLabel text={listName} />
            </div>
            <div className="bg-black bg-opacity-10 h-60 m-2 mb-1 rounded-b-lg overflow-y-auto p-2 rounded-lg">
                {renderItems()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stagedList: state.listCreation.stagedList,
    }
}

export default connect(
    mapStateToProps,
    null
)(StagedList);