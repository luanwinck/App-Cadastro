import { combineReducers } from 'redux'
import people from './people'
import work from './work'
import avaliacao from './avaliacao'

const rootReducer = combineReducers({
    people,
    work,
    avaliacao
})

export default rootReducer