import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/wallet-header.css';

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
      <div className="container-header">
        <span className="logo-trybe">
          Trybe
        </span>
        <div className="inputs-header">
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
