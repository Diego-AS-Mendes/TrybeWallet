import React from 'react';
import PropTypes from 'prop-types';

class LoginInput extends React.Component {
  render() {
    const { testId, type, placeholder, id, value, handleChange } = this.props;
    return (
      <div className="w-full max-w-xs">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
          leading-tight focus:outline-none focus:shadow-outline"
          data-testid={ testId }
          id={ id }
          type={ type }
          value={ value }
          placeholder={ placeholder }
          onChange={ (event) => handleChange(event) }
        />
      </div>
    );
  }
}

LoginInput.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginInput;
