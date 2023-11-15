import React from 'react'

import FormInputLabel from '../../../../../shared/labels';
import ListItem from '../../../../../shared/lists/ListItem';

const StagedList = ({listName, list, handleCompleteClick}) => {
    const renderItems = () => {
        return list.map((itemInfo, i) => {
            let adjustedItemInfo = itemInfo;
            adjustedItemInfo["id"] = i;
            return <ListItem handleCompleteClick={handleCompleteClick} itemInfo={adjustedItemInfo} key={`${i}-${itemInfo.item}`} />
        } )
    }

    return (
        <div className=" mx-auto w-3/4 bg-blue-500 pb-1 rounded-lg text-white">
            <div className="bg-black bg-opacity-40 rounded-t-lg py-1">
                <FormInputLabel text={listName} />
            </div>
            <div className="bg-black bg-opacity-10 h-60 m-2 mb-1 rounded-b-lg overflow-y-auto p-2 rounded-lg">
                {renderItems()}
            </div>
        </div>
    )
}

export default StagedList;