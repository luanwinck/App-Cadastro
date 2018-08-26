import { ADD_USUARIO, LOGIN, LOGOUT } from '../constants';

const initialState = { 
    usuario: [{ nome: 'Luan', email: 'a', senha: 'a' }],
    usuarioLogado: { nome: '', email: '', senha: '' }
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USUARIO:
      return {
        usuario: [...state.usuario, action.usuario],
        usuarioLogado: { nome: '', email: '', senha: '' }
      };
    case LOGIN:
      const usuarioLogado = state.usuario.find(u => u.email === action.usuario.email && u.senha === action.usuario.senha)
      if (!!usuarioLogado) {
        return {
            usuario: [...state.usuario],
            usuarioLogado
        };
      }
      return state;
    case LOGOUT:
      return {
        usuario: [...state.usuario],
        usuarioLogado: { nome: '', email: '', senha: '' }
      }
    default:
      return state;
  }
}
