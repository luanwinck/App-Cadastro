import { ADD_PERSON, DELETE_PERSON, ADD_WORK, DELETE_WORK, ADD_AVALIACAO, DELETE_AVALIACAO, ADD_USUARIO, LOGIN, LOGOUT} from './constants';

export function addPerson(person) {
  return {
    type: ADD_PERSON,
    person,
  };
}

export function deletePerson(person) {
  return {
    type: DELETE_PERSON,
    person,
  };
}

export function addWork(work) {
  return {
    type: ADD_WORK,
    work,
  };
}

export function deleteWork(work) {
  return {
    type: DELETE_WORK,
    work,
  };
}

export function addAvaliacao(avaliacao) {
  return {
    type: ADD_AVALIACAO,
    avaliacao,
  };
}

export function deleteAvaliacao(avaliacao) {
  return {
    type: DELETE_AVALIACAO,
    avaliacao,
  };
}

export function addUsuario(usuario) {
  return {
    type: ADD_USUARIO,
    usuario,
  };
}

export function login(usuario) {
  return {
    type: LOGIN,
    usuario,
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}