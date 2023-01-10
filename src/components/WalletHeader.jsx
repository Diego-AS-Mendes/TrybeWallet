import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  constructor(props) {
    super(props);

    this.calc = () => {
      const { wallet: { expenses } } = this.props;
      return expenses.reduce((acc, curr) => {
        acc += curr.value * curr.exchangeRates[curr.currency].ask;
        return acc;
      }, 0);
    };
  }

  render() {
    const { user } = this.props;
    return (
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Trybe
        </span>
        <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <span data-testid="email-field">{`email ${user.email}`}</span>
          <span data-testid="total-field">{`Despesa ${this.calc()}`}</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

WalletHeader.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
