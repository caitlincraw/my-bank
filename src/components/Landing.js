import {connect} from 'react-redux';
import {useState} from 'react';
import {transferFromChecking, transferFromSavings, billPayFromChecking} from '../redux/actions';

import '../index.css';

const Landing = (props) => {

  const [amount, setAmount] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [vendor, setVendor] = useState("");
  
  const handleChange = e => {
      setAmount(parseInt(e.target.value));
  }

  const handleSubmit = () => {
      if (!amount) {
        setAmount(0);
      } else {
        props.transferFromChecking(amount);
        setAmount(0); 
      }
  }

  const handleBillChange = e => {
    setBillAmount(parseInt(e.target.value));
  }

  const handleVendorChange = e => {
      setVendor(e.target.value);
  }

  const handleBillSubmit = () => {
    if (!billAmount) {
      setBillAmount(0);
    } else {
      props.billPayFromChecking(billAmount, vendor);
      setBillAmount(0);
      setVendor(""); 
    }
}


  return (
    <div className="view">
        <h1>Welcome to ACME Bank</h1>

        <div className="view__section">
            <h2>Account Balances</h2>
            <div className="accounts">
                <div className="accounts__account">
                    <h3>Checking</h3>
                    <p>${props.checking.balance}</p>
                </div>
                <div className="accounts__account">
                    <h3>Savings</h3>
                    <p>${props.savings.balance}</p>
                </div>
            </div>
        </div>
        <div className="view__section">
            <h2>Transfer Between Accounts</h2>
            <div className="form">
                <div className="form__column">
                    <h3>Transfer From</h3>
                    <select className="account-dropdown"> 
                        <option name="Checking">Checking</option>
                        <option name="Savings"> Savings</option>
                    </select>
                </div>
                <div className="form__column">
                    <h3>Transfer To</h3>
                    <select className="account-dropdown"> 
                        <option name="Savings"> Savings</option>
                        <option name="Checking">Checking</option>
                    </select>
                </div>
                <div className="form__column">
                    <h3>Amount</h3>
                    <input className="amount-input" type="number" value={amount} onChange={handleChange}/>
                </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="view__section">
            <h2>Pay A Bill</h2>
            <div className="form">
                <div className="form__column">
                    <h3>Vendor Name</h3>
                    <input className="vendor-input" type="text" placeholder="Petco" value={vendor} onChange={handleVendorChange}/>
                </div>
                <div className="form__column">
                    <h3>Account</h3>
                    <select className="account-dropdown"> 
                        <option name="Checking"> Checking</option>
                        <option name="Savings">Savings</option>
                    </select>
                </div>
                <div className="form__column">
                    <h3>Amount</h3>
                    <input className="amount-input" type="number" value={billAmount} onChange={handleBillChange} />
                </div>
            </div>
            <button onClick={handleBillSubmit}>Submit</button>
        </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    transferFromChecking: (amount) => dispatch(transferFromChecking(amount)),
    billPayFromChecking: (billAmount, vendor) => dispatch(billPayFromChecking(billAmount, vendor)) 
})

const mapStateToProps = state => ({
    checking: state.checking,
    savings: state.savings
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);