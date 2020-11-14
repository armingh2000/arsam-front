import { createStore } from 'redux'
import rootReducer from './rootReducer'
import taskReducer from './event/reducers/taskReducer'

const store = createStore(taskReducer);

export {store as default};