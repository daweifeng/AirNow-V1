const airDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_AIR_DATA':
      return [
        ...state, action.payload.data,
        
      ];
    default:
      return state;
  }
};

export default airDataReducer;
