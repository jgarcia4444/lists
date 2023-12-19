import React from 'react';
import { connect } from 'react-redux';

import completeClicked from '../../../redux/actions/listActions/completeClicked';
import removeItem from '../../../redux/actions/listActions/removeItem';

import ListItemActionButton from './ListItemActionButton';


const ListItem = ({itemInfo, id, completeClicked}) => {
    const {item, complete} = itemInfo; 

    return (
        <div className={`flex flex-row py-2 bg-black transition-all duration-300 mb-1 rounded-lg ${id % 2 === 0 ? "bg-opacity-10 hover:bg-opacity-20" : "bg-opacity-50 hover:bg-opacity-60"}`}>
            <div className="w-1/4 flex justify-center">
                <div onClick={() => completeClicked(item)} className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white hover:cursor-pointer hover:bg-white hover:bg-opacity-30 transition-all duration-300 hover:scale-105 text-bold">
                    {complete === true ? "X" : ""}
                </div>
            </div>
            <div className="w-1/2">
                <p className="text-left">
                    {item}
                </p>
            </div>
            <ListItemActionButton item={item} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        completeClicked: (item) => dispatch(completeClicked(item)),
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(ListItem);