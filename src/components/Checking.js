import { connect } from 'react-redux';
import '../index.css';

const Checking = ({ balance, transactions }) => {

    const chkTransactions = transactions.map((transaction, index) => {
       const { amount, date, destination } = transaction;

       return (
           <li key={index}>
               <span>{date}</span>
               <span>{destination}</span>
               <span>{amount}</span>
           </li>
       )
    })
    return (
        <div className="view">
            <h2>Checking </h2>
            <h3>Current Balance: ${balance} </h3>
            <h3>Past Transactions</h3>
            <ul className="checking-transactions">{chkTransactions}</ul>
        </div>
    )
}

const mapStateToProps = state => ({
    balance: state.checking.balance,
    transactions: state.checking.transactions
})

export default connect(mapStateToProps)(Checking);