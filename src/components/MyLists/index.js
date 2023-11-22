import React from 'react'

import List from '../../shared/lists/List';

const MyLists = ({myLists}) => {

    const renderMyLists = () => {
        return myLists.map((myListInfo, i) => <List listInfo={myListInfo} key={`${i}-${myListInfo.listName}`} index={i}/>)
    }

    return (
        <div className="w-full mt-24">
            <div className="w-full">
                <h2 className="text-xl font-bold text-blue-500">My List{myLists.length > 1 ? "s" : ""}</h2>
            </div>
        <div className="flex flex-row items-center overflow-x-auto w-full">
            {renderMyLists()}
        </div>
        </div>
    )
};

export default MyLists