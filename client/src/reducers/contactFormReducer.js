const initialState = {
    open: false
  };
  
  const contactFormReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN':
        return {
            ...state,
            open: true,
          };
      case 'CLOSE':
        return initialState;
      default:
        return state;
    }
  };
  
  export default contactFormReducer;