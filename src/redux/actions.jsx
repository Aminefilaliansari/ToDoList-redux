export const addTodoAction = (listTD) => {
  return { type: "ADD_TODO", payload: listTD };
};

export const changeinputAction = (value) => {
  return { type: "CHANGE_INPUT", payload: value };
};

export const deleteTodoAction = (idvalue) => {
  return { type: "DELETE_TODO", payload: idvalue };
};

export const updateTodoAction = (idvalue) => {
  return { type: "UPDATE_TODO", payload: idvalue };
};

export const updateEtatAction = (etat) => {
  return { type: "UPDATE_ETAT", payload: etat };
};

export const updateCountNewAction = (payload) => {
  return {type : "UPDATE_COUNT_NEW" , payload }
};

export const updateCountDoneAction = (payload) => {
  return {type : "UPDATE_COUNT_DONE" , payload }
};

export const updateCountDeleteAction = (value) => {
  return {type : "UPDATE_COUNT_DELETE" , payload: value}
};

export const updateCheckedAction = (value) => {
  return {type : "UPDATE_CHECKED" , payload: value}
};

export const addCountResultsAction = (value) => {
  return {type : "ADDCOUNT_RESULTS" , payload: value}
};