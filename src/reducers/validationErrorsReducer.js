const initState = {
  isValid: true,
  errors: {}
};

const validationErrors = (state = initState, action) => {
  switch (action.type) {
    case 'SET_VALIDATION_ERRORS':
      return {
        isValid: false,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default validationErrors;
