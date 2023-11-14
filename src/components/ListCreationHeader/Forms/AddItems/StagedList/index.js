import React from 'react'

import FormInputLabel from '../../../../../shared/labels';
import ListItem from '../../../../../shared/lists/ListItem';

const StagedList = ({listName, list, handleCompleteClick}) => {
    const renderItems = () => {
        return list.map((itemInfo, i) => <ListItem handleCompleteClick={handleCompleteClick} itemInfo={itemInfo} key={`${i}-${itemInfo.item}`} />)
    }

    return (
        <div className=" bg-blue-500 pb-2 rounded text-white">
            <div className="bg-black bg-opacity-40 rounded-t py-1">
                <FormInputLabel text={listName} />
            </div>
            <div className="">
                {renderItems()}
            </div>
        </div>
    )
}

export default StagedList;