import React from 'react'
import ListItem from '../ListItem';
import { FiTrash2 } from "react-icons/fi";

const List = ({listInfo, index}) => {

    const {listName, items} = listInfo;

    const bgColorArray = ["bg-opacity-90", "bg-opacity-60", "bg-opacity-30"];

    const renderListItems = () => {
        return items.map((itemInfo, i) => {
            return <ListItem itemInfo={itemInfo} id={i} key={`${itemInfo.listName}-${i}`} />
        } )
    };

    const dynamicBackground = () => {
        return bgColorArray[index];
    }

    return (
        <div className={`text-white w-1/4 mr-4 bg-blue-500 ${dynamicBackground()} rounded p-2 mt-4 relative`}>
            <div className={`absolute -right-4 -top-4 w-8 h-8 rounded-full bg-white opacity-60 hover:opacity-100 hover:cursor-pointer flex items-center justify-center  shadow-none hover:shadow-md transition-all duration-300 hover:scale-110`}>
                <FiTrash2 color={"#f00"} size={20} />
            </div>
            <div className="w-full text-center flex-row justify-between">
                <h4 className="">{listName.toUpperCase()}</h4>
            </div>
            <div className="">
                {renderListItems()}
            </div>
        </div>
    )
};

export default List;