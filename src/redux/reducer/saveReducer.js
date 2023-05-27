const initialState = {
  saveREducer: "",
};

const saveREducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "FORM_DATA":
      return {
        saveREducer: action,
      };
    default:
      return state;
  }
};

export default saveREducer;
