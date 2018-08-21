import { ADD_USUARIO, LOGIN, LOGOUT } from '../constants';

const initialState = { 
    usuario: [{ nome: 'Luan', email: 'luan@gmail.com', senha: '123123' }],
    usuarioLogado: false
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USUARIO:
      return {
        usuario: [...state.usuario, action.usuario],
      };
    case LOGIN:
      if (!!state.usuario.find(u => u.email === action.usuario.email && u.senha === action.usuario.senha)) {
        return {
            usuario: [...state.usuario],
            usuarioLogado: true
        };
      }
      return state;
    default:
      return state;
  }
}
