import { ADD_WORK, DELETE_WORK } from '../constants';

const initialState = { work: [{ name: 'Autoria e design II' },{ name: 'Estrutura de dados' },{ name: 'Porgramação I' }] }

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WORK:
      return {
        work: [...state.work, action.work],
      };
    case DELETE_WORK:
      return {
        people: state.people.filter(p => p !== action.work),
      };
    default:
      return state;
  }
}
