import { combineReducers } from 'redux';

import ListCreationReducer from './ListCreationReducer';
import myListsReducer from './myListsReducer';

const rootReducer = combineReducers({
    lists: myListsReducer,
    listCreation: ListCreationReducer,
});

export default rootReducer;