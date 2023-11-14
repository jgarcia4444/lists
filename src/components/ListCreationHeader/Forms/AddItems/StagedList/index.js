import React from 'react'

import FormInputLabel from '../../../../../shared/labels';
import ListItem from '../../../../../shared/lists/ListItem';

const StagedList = ({listName, list}) => {
    console.log("List", list)
    const renderItems = () => {
        return list.map((itemInfo, i) => <ListItem itemInfo={itemInfo} key={`${i}-${itemInfo.item}`} />)
    }

    return (
        <div className="">
            <FormInputLabel text={listName} />
            <div className="">
                {renderItems()}
            </div>
        </div>
    )
}

export default StagedList;