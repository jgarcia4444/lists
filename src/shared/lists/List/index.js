import React from 'react'
import ListItem from '../ListItem';

const List = ({listInfo, index}) => {

    const {listName, items} = listInfo;

    const bgColorArray = ["bg-opacity-90", "bg-opacity-60", "bg-opacity-30"];
//
    const renderListItems = () => {
        return items.map((itemInfo, i) => {
            itemInfo["id"] = i
            return <ListItem itemInfo={itemInfo} key={`${itemInfo.listName}-${i}`} />
        } )
    };

    const dynamicBackground = () => {
        return bgColorArray[index];
    }

    return (
        <div className={`text-white w-1/4 mr-4 bg-blue-500 ${dynamicBackground()} rounded p-2`}>
            <div className="w-full text-center">
                <h4 className="">{listName.toUpperCase()}</h4>
            </div>
            <div className="">
                {renderListItems()}
            </div>
        </div>
    )
};

export default List;