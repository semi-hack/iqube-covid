export const setDataSuccess = (data) => {
  return {
    type: "SET-DATA-SUCCESS",
    payload: data,
  };
};

export const setDataFailure = (data) => {
  return {
    type: "SET-DATA-FAILURE",
    payload: data,
  };
};

export const loading = (data) => {
  return {
    type: "LOADING",
  };
};

export const getData = () => {
  return {
    type: "GET-DATA",
  };
};
