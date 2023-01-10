import React from 'react';
import WalletFilterBar from '../components/WalletFilterBar';
import WalletHeader from '../components/WalletHeader';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletFilterBar />
        <WalletTable />
      </div>
    );
  }
}

export default Wallet;
