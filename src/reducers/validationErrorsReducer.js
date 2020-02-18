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
    case 'RESET_VALIDATION_ERRORS':
      return { isValid: true, errors: {} };
    default:
      return state;
  }
};

export default validationErrors;
