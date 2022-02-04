const initialState = {
  count: 0,
};
export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_VALUE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT_VALUE":
      return {
        ...state,
        count: state.count === 0 ? 0 : state.count - 1,
      };
    default:
      return state;
  }
}
