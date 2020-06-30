import { INCREMENT, DECREMENT, RESET } from './actions';

const initialstate = {
  count: 0,
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};
