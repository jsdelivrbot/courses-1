import { TODO_ADD, TODO_LOAD } from './todo';
const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = msg => ({
  type: MESSAGE_SHOW,
  payload: msg,
});

export default function(state = '', action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case TODO_ADD:
    case TODO_LOAD:
      return '';
    default:
      return state;
  }
}
