import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ValidationError from '../ValidationError';
import { signUpWithDoctorData } from '../../actions/asyncActions';

const DoctorSignUp = ({ signUpWithDoctorData, validationErrors, history }) => {
  const specialities = [
    'General Doctor',
    'Skin & Hair',
    'Child Care',
    'Women\'s Health',
    'Dentist',
    'ENT',
    'Homeopathy',
    'Ayurveda'
  ];

  const [inputFields, setInputFields] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: '',
    speciality: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithDoctorData(inputFields, history);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        placeholder="Email"
        value={inputFields.email}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="Email"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.email}
      />
      <input
        type="text"
        placeholder="First Name"
        value={inputFields.first_name}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, first_name: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="First Name"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.first_name}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={inputFields.last_name}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, last_name: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="Last Name"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.last_name}
      />
      <input
        type="password"
        autoComplete="password"
        placeholder="Password"
        value={inputFields.password}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="Password"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.password}
      />
      <input
        type="password"
        autoComplete="password"
        placeholder="Password Confirmation"
        value={inputFields.password_confirmation}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password_confirmation: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="Password Confirmation"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.password_confirmation}
      />
      <select
        value={inputFields.speciality}
        onChange={(e) => setInputFields({ ...inputFields, speciality: e.target.value })}
      >
        <option value="default" hidden="hidden">Choose Your Specaility</option>
        {specialities.map((speciality) => (
          <option key={speciality} value={speciality}>
            {speciality}
          </option>
        ))}
      </select>
      <button type="submit">Create Doctor Account</button>
    </form>
  );
};

DoctorSignUp.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  signUpWithDoctorData: PropTypes.func.isRequired,
  validationErrors: PropTypes.shape({
    isValid: PropTypes.bool.isRequired,
    errors: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
  }).isRequired
};

const mapStateToProps = (state) => ({
  notification: state.notification,
  validationErrors: state.validationErrors
});

export default connect(mapStateToProps, { signUpWithDoctorData })(withRouter(DoctorSignUp));
