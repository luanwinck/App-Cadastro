import { combineReducers } from 'redux'
import people from './people'
import work from './work'
import avaliacao from './avaliacao'
import usuario from './usuario'
import usuarioLogado from './usuario'

const rootReducer = combineReducers({
    people,
    work,
    avaliacao,
    usuario,
    usuarioLogado
})

export default rootReducer