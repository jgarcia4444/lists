import React from 'react'

const List = ({listInfo, index}) => {

    const {listName, itemList} = listInfo;

    return (
        <div className="">{listName}{itemList.length}</div>
    )
};

export default List;