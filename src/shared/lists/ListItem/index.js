import React from 'react';

const ListItem = ({itemInfo}) => {
    const {item, complete} = itemInfo; 
    return (
        <div className="flex flex-row">
            <div className="w-1/4">
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                    {complete === true ? "X" : ""}
                </div>
            </div>
            <div className="w-3/4">{item}</div>
        </div>
    )
}

export default ListItem;