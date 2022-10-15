import transaction from '../../transactions';
export const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};
<Transaction
  type={transaction.type}
  amount={transaction.amount}
  currency={transaction.currency}
/>;
