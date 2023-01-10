import React from 'react';
import PropTypes from 'prop-types';

class FilterBarSelected extends React.Component {
  render() {
    const { label, valuesArray, dataTestId, handleChange, id, value } = this.props;
    return (
      <label className="inline-block relative w-64 flex" htmlFor={ id }>
        <span
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        >
          {label}
        </span>
        <select
          data-testid={ dataTestId }
          id={ id }
          value={ value }
          onChange={ (event) => handleChange(event) }
          className="block appearance-none w-full bg-white border
          border-gray-400
          hover:border-gray-500 px-4 py-2 pr-8 rounded shadow
          leading-tight focus:outline-none focus:shadow-outline"
        >
          {valuesArray.map((values, index) => (
            <option key={ index }>{values}</option>
          ))}
        </select>
      </label>
    );
  }
}

FilterBarSelected.propTypes = {
  label: PropTypes.string.isRequired,
  valuesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataTestId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterBarSelected;
