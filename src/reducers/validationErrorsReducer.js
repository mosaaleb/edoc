const initState = {
  isValid: true,
  errors: {}
};

const validationErrors = (state = initState, action) => {
  switch (action.type) {
    case 'SET_VALIDATION_ERRORS':
      return {
        isValid: false,
        errors: {
          email: action.errors['account.email'],
          first_name: action.errors['account.first_name'],
          last_name: action.errors['account.last_name'],
          password: action.errors['account.password'],
          password_confirmation: action.errors['account.password_confirmation']
        }
      };
    default:
      return state;
  }
};

export default validationErrors;
