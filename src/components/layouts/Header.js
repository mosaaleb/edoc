import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeToken } from '../../actions/tokenActions';
import { removeCurrentUser } from '../../actions/authActions';
import { setNotificationMessage } from '../../actions/notificationActions';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Header = ({
  removeToken,
  isAuthenticated,
  removeCurrentUser,
  setNotificationMessage
}) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const svgPath = () => {
    if (isOpen) {
      return (
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      );
    }
    return <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />;
  };

  const handleSignOut = () => {
    removeToken();
    removeCurrentUser();
    history.push('/');
    setNotificationMessage('You are signed out now!');
    setIsOpen(false);
  };

  return (
    <div className="bg-teal-100 shadow-md font-montserrat">
      <header className="sm:flex sm:justify-between relative sm:static sm:w-4/5 sm:mx-auto">
        <div className="flex justify-between items-center p-3 sm:px-0">
          <div>
            <a className="font-bold text-teal-500 text-2xl" href="/">
              EDoc
            </a>
          </div>
          <div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="block focus:outline-none text-teal-500 sm:hidden"
            >
              <svg className="h-6 w-6 fill-current">{svgPath()}</svg>
            </button>
          </div>
        </div>
        <div
          className={`px-2 absolute w-full bg-teal-100 shadow-lg rounded-b-lg ${
            isOpen ? 'block' : 'hidden'
          }
            sm:block sm:static sm:shadow-none sm:w-auto sm:flex sm:items-center sm:px-0`}
        >
          {isAuthenticated ? (
            <SignedInLinks handleSignOut={handleSignOut} />
          ) : (
            <SignedOutLinks />
          )}
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  removeToken: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  removeCurrentUser: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  removeToken: () => {
    dispatch(removeToken());
  },
  removeCurrentUser: () => {
    dispatch(removeCurrentUser());
  },
  setNotificationMessage: (msg) => {
    dispatch(setNotificationMessage(msg));
  }
});

const mapStateToProps = (state) => ({
  notification: state.notification,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
