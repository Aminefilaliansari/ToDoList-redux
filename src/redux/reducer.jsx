const initialeState = {
  input: "",
  etatUpdate: { updated: false, idtache: 0 },
  todolist: [],
  count: { New: 0, Done: 0, Delete: 0, Results : 0},
};

const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todolist: [...state.todolist, action.payload],
      };

    case "CHANGE_INPUT":
      /* state.input = state.input + action.payload;
      console.log(state.input);
      return state; */
      return { ...state, input: action.payload };

    case "UPDATE_ETAT":
      return {
        ...state,
        etatUpdate: {
          updated: action.payload.updated,
          idtache: parseInt(action.payload.idtache),
        },
      };

    case "DELETE_TODO":
      return {
        ...state,
        todolist: state.todolist.filter(
          (item) => item.id !== parseInt(action.payload)
        ),
      };

    case "UPDATE_TODO":
      // 2, 'aaa'
      return {
        ...state,
        todolist: state.todolist.map((todo) => {
          if (todo.id === parseInt(action.payload.id)) {
            return {
              ...todo,
              title: action.payload.title,
            };
          }

          return todo;
        }),
      };


     case "UPDATE_CHECKED":
      return{
        ...state,
        todolist: state.todolist.map((todo) => {
          if (todo.id === parseInt(action.payload.id)) {
            return {
              ...todo,
              checked: action.payload.checked,
            };
          }

          return todo;
        }),
      } 

    case "UPDATE_COUNT_NEW":
      return {
        ...state,
        count: { ...state.count, New: action.payload === 'inc' ? state.count.New + 1 : state.count.New - 1  },
      };

    case "UPDATE_COUNT_DELETE":
      return {
        ...state,
        count: { ...state.count, Delete: action.payload === 'inc' ? state.count.Delete + 1 : state.count.Delete - 1 },
      };

    case "UPDATE_COUNT_DONE" :
      return {
        ...state,
        count: { ...state.count, Done: action.payload === 'inc' ? state.count.Done + 1 : state.count.Done - 1 },
      };

      case "ADDCOUNT_RESULTS" :
        return {
          ...state,
          count: { ...state.count, Results: action.payload },
        };  

    default:
      return state;
  }
};

export default reducer;
