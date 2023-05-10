const initialeState = [
  { id: 1, title: "T1", checked: false },
  { id: 2, title: "T2", checked: false },
];

const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case "Add_Todo":
      return [...state, action.payload ];

    default:
      return state;
  }
};

export default reducer;
