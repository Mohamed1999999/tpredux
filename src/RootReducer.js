const initialState = {
  showDone: false,
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Gérez les actions liées aux filtres ici
    default:
      return state;
  }
};

export default RootReducer;
