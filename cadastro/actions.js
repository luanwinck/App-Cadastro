import { ADD_PERSON, DELETE_PERSON, ADD_WORK, DELETE_WORK } from './constants';

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
