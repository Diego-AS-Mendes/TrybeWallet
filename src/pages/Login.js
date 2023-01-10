import React from 'react';
import PropTypes from 'prop-types';
import LoginBtn from '../components/LoginBtn';
import LoginInput from '../components/Logininput';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }

  handleChange(event) {
    const { value, id } = event.target;
    this.setState({ [id]: value }, () => this.checkInput());
  }

  checkInput() {
    const { email, password } = this.state;
    const validation = /\S+@\S+\.\S+/;
    const minNumber = 6;
    if (validation.test(email) && minNumber <= password.length) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  infoInput() {
    const { password, email } = this.state;
    return (
      <>
        <LoginInput
          type="email"
          placeholder="exemplo@email.com"
          testId="email-input"
          id="email"
          value={ email }
          handleChange={ this.handleChange }
        />

        <LoginInput
          type="password"
          placeholder="********"
          testId="password-input"
          id="password"
          value={ password }
          handleChange={ this.handleChange }
        />
      </>
    );
  }

  displayButton() {
    const { email, buttonDisabled } = this.state;
    const { history } = this.props;
    return (
      <LoginBtn
        email={ email }
        buttonDisabled={ buttonDisabled }
        history={ history }
      />
    );
  }

  render() {
    return (
      <div>
        {this.infoInput()}
        {this.displayButton()}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Login;
