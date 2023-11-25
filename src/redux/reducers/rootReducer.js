import { combineReducers } from 'redux';

import ListCreationReducer from './ListCreationReducer';

const rootReducer = combineReducers({
    listCreation: ListCreationReducer,
});

export default rootReducer;