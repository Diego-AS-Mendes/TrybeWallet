import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';

class LoginBtn extends React.Component {
  render() {
    const { addUser, email, buttonDisabled, history } = this.props;
    return (
      <button
        className={
          buttonDisabled
            ? `flex-shrink-0 bg-red-500 hover:bg-red-700 cursor-not-allowed
       text-white font-bold py-2 px-4 border border-red-700 rounded`
            : `bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 border border-blue-700 rounded`
        }
        type="button"
        disabled={ buttonDisabled }
        onClick={ () => {
          addUser(email);
          history.push('/carteira');
        } }
      >
        Entrar
      </button>
    );
  }
}

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  addUser: (userInfo) => dispatch(ACT.addUser(userInfo)),
});

LoginBtn.propTypes = {
  addUser: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn);
