import { combineReducers } from 'redux'
import people from './people'
import work from './work'

const rootReducer = combineReducers({
    people,
    work
})

export default rootReducer