export const setData = (state = { loading: true }, action) => {
    switch (action.type) {
      default:
        return state;
      case "SET-DATA-SUCCESS":
        return { ...state, loading: false, data: action.payload, error: null };
      case "SET-DATA-FAILURE":
        return { ...state, loading: false, data: null, error: action.payload };
      case "LOADING":
        return { ...state, loading: true };
    }
};