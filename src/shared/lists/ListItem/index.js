import React from 'react';

const ListItem = ({itemInfo, handleCompleteClick, id}) => {
    const {item, complete} = itemInfo; 
    return (
        <div className={`flex flex-row py-2 bg-black transition-all duration-300 mb-1 rounded-lg ${id % 2 === 0 ? "bg-opacity-10 hover:bg-opacity-20" : "bg-opacity-50 hover:bg-opacity-60"}`}>
            <div className="w-1/4 flex justify-center">
                <div onClick={handleCompleteClick} className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white hover:cursor-pointer hover:bg-white hover:bg-opacity-30 transition-all duration-300 hover:scale-105">
                    {complete === true ? "X" : ""}
                </div>
            </div>
            <div className="w-3/4">
                <p className="text-left">
                    {item}
                </p>
            </div>
        </div>
    )
}

export default ListItem;