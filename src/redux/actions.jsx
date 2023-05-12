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

export const addCountNewAction = (value) => {
  return {type : "ADDCOUNT_NEW" , payload: value}
};

export const addCountDoneAction = (value) => {
  return {type : "ADDCOUNT_DONE" , payload: value}
};

export const addCountDeleteAction = (value) => {
  return {type : "ADDCOUNT_DELETE" , payload: value}
};

export const updateCheckedAction = (value) => {
  return {type : "UPDATE_CHECKED" , payload: value}
};

