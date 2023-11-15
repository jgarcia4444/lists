import React from 'react'

import List from '../../shared/lists/List';

const MyLists = ({myLists}) => {

    const renderMyLists = () => {
        return myLists.map((myListInfo, i) => <List listInfo={myListInfo} key={`${i}-${myListInfo.listName}`} index={i}/>)
    }

    return (
        <div className="">
            {renderMyLists()}
        </div>
    )
};

export default MyLists