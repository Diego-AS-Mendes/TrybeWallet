import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTable extends React.Component {
  render() {
    const {
      wallet: { expenses },
    } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2">Descrição</th>
            <th className="px-4 py-2">Tag</th>
            <th className="px-4 py-2">Método de pagamento</th>
            <th className="px-4 py-2">Valor</th>
            <th className="px-4 py-2">Moeda</th>
            <th className="px-4 py-2">Câmbio utilizado</th>
            <th className="px-4 py-2">Valor convertido</th>
            <th className="px-4 py-2">Moeda de conversão</th>
            <th className="px-4 py-2">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(
            (
              { value, description, currency, method, tag, exchangeRates },
              index,
            ) => (
              <tr key={ index }>
                <td className="border px-4 py-2">{description}</td>
                <td className="border px-4 py-2">{tag}</td>
                <td className="border px-4 py-2">{method}</td>
                <td className="border px-4 py-2">{value}</td>
                <td className="border px-4 py-2">
                  {exchangeRates[currency].name}
                </td>
                <td className="border px-4 py-2">
                  {Number(exchangeRates[currency].ask).toFixed(2)}
                </td>
                <td className="border px-4 py-2">
                  {value * exchangeRates[currency].ask}
                </td>
                <td className="border px-4 py-2">Real</td>
                <td className="border px-4 py-2">
                  <button type="button" data-testid="delete-btn">
                    Excluir
                  </button>
                  <button type="button" data-testid="edit-btn">
                    Editar
                  </button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>

    );
  }
}

const mapStateToProps = (state) => state;

WalletTable.propTypes = {
  wallet: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletTable);
