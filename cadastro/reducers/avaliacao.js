import { ADD_AVALIACAO, DELETE_AVALIACAO } from '../constants';

const initialState = { avaliacao: [{ aluno: 'Chris', trabalho: 'Autoria e design II', nota: '8' }] }

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AVALIACAO:
      return {
        avaliacao: [...state.avaliacao, action.avaliacao],
      };
    case DELETE_AVALIACAO:
      return {
        avaliacao: state.avaliacao.filter(p => p !== action.avaliacao),
      };
    default:
      return state;
  }
}
