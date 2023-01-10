import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getApi from '../services/api';
import FilterBarButton from './FilterBarButton';
import FilterBarInput from './FilterBarInput';
import FilterBarSelected from './FilterBarSelect';
import * as ACT from '../actions';

class WalletFilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.food = 'Alimentação';
    this.state = {
      moedas: [],
      expenseInput: {
        value: '0',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: this.food,
      },
    };
    this.tratamentoApi = this.tratamentoApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.tratamentoApi();
  }

  tratamentoApi() {
    getApi().then((data) => {
      delete data.USDT;
      this.setState({ moedas: Object.keys(data) });
    });
  }

  handleChange({ target: { value, id } }) {
    this.setState((prev) => ({
      expenseInput: { ...prev.expenseInput, [id]: value },
    }));
  }

  handleClick() {
    const { addExpenses } = this.props;
    const {
      expenseInput: { currency, tag, method, description, value },
    } = this.state;
    getApi()
      .then((data) => {
        addExpenses({
          currency,
          tag,
          method,
          description,
          value,
          exchangeRates: data,
        });
      })
      .then(() => {
        this.setState(() => ({
          expenseInput: {
            value: '0',
            description: '',
            currency: 'USD',
            method: 'Dinheiro',
            tag: this.food,
          },
        }));
      });
  }

  render() {
    const {
      moedas,
      expenseInput: { currency, tag, method, description, value },
    } = this.state;
    return (
      <div
        className="flex flex-row w-full items-center justify-evenly
      border-b border-white bg-white py-2 px-4"
      >
        <FilterBarInput
          label="Valor"
          type="number"
          dataTestId="value-input"
          id="value"
          value={ value }
          handleChange={ this.handleChange }
        />
        <FilterBarSelected
          label="Moeda"
          valuesArray={ moedas }
          dataTestId="currency-input"
          id="currency"
          value={ currency }
          handleChange={ this.handleChange }
        />
        <FilterBarSelected
          label="Método de pagamento"
          valuesArray={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          dataTestId="method-input"
          id="method"
          value={ method }
          handleChange={ this.handleChange }
        />
        <FilterBarSelected
          label="Tag"
          valuesArray={ [
            'Alimentação',
            'Lazer',
            'Trabalho',
            'Transporte',
            'Saúde',
          ] }
          dataTestId="tag-input"
          id="tag"
          value={ tag }
          handleChange={ this.handleChange }
        />
        <FilterBarInput
          label="Descrição"
          type="text"
          dataTestId="description-input"
          id="description"
          value={ description }
          handleChange={ this.handleChange }
        />
        <FilterBarButton
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPrice: () => dispatch(ACT.getPrice()),
  addExpenses: (payload) => dispatch(ACT.addExpenses(payload)),
});

WalletFilterBar.propTypes = {
  addExpenses: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WalletFilterBar);
