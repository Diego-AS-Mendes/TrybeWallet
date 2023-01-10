import React from 'react';
import PropTypes from 'prop-types';

class FilterBarInput extends React.Component {
  render() {
    const { label, type, dataTestId, handleChange, id, value } = this.props;
    return (
      <label className="flex" htmlFor={ id }>
        <span
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        />
        {label}
        <input
          className="block appearance-none w-full bg-white border
          border-gray-400
          hover:border-gray-500 px-4 py-2 pr-8 rounded shadow
          leading-tight focus:outline-none focus:shadow-outline"
          type={ type }
          id={ id }
          data-testid={ dataTestId }
          value={ value }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    );
  }
}

FilterBarInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dataTestId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterBarInput;
