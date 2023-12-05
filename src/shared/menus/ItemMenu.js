import React from 'react'
import {FiTrash2, FiX} from 'react-icons/fi'

const ItemMenu = ({dismiss, destroy}) => {

    return (
        <div className="flex flex-row">
            <FiX className='hover:cursor-pointer text-slate-600 hover:text-slate-300 transition-all duration-300' onClick={dismiss}  size={24} />
            <FiTrash2 className='hover:cursor-pointer text-red-500 text-opacity-50 hover:text-opacity-100 transition-all duration-300' onClick={destroy} size={24} />
        </div>
    )
}

export default ItemMenu;