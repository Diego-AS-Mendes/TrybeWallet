import React from 'react';
import PropTypes from 'prop-types';

class FilterBarButton extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <button
          className="block appearance-none w-full bg-white border
          border-gray-400
          hover:border-gray-500 px-4 py-2 pr-8 rounded shadow
          leading-tight focus:outline-none focus:shadow-outline"
          type="button"
          onClick={ () => handleClick() }
        >
          Adicionar despesas
        </button>
      </div>
    );
  }
}

FilterBarButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default (FilterBarButton);
