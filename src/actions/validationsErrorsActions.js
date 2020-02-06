/* eslint-disable import/prefer-default-export */

export const setValidationErrors = (errors) => ({
  type: 'SET_VALIDATION_ERRORS',
  errors
});

export const resetValidationErrors = () => ({
  type: 'RESET_VALIDATION_ERRORS'
});
