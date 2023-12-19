import React, {useState} from 'react';
import { connect } from 'react-redux';
import {FiMoreHorizontal} from 'react-icons/fi'

import ItemMenu from '../../../menus/ItemMenu';

import removeItem from '../../../../redux/actions/listActions/removeItem';

const ListItemActionButton = ({removeItem, item}) => {

    const [showItemMenu, setShowItemMenu] = useState(false);

    return (
        <div className="w-1/4 flex justify-end pr-2 ">
                {showItemMenu === true ?
                    <ItemMenu destroy={() => removeItem(item)} dismiss={() => setShowItemMenu(!showItemMenu)} />
                :
                    <FiMoreHorizontal onClick={() => setShowItemMenu(true)} className={` text-blue-400 rounded hover:cursor-pointer text-opacity-70 hover:text-blue-200 transition-all duration-300`}  size={24} />
                }
            </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItem(item)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ListItemActionButton);