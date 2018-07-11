class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      checkout: false,
      form: 1
    };
  }
  
  render() {
    if (this.state.checkout) {
      console.log('checkedout');
    }
    
    if (this.state.form === 1) {
      return ( 
        <button onClick={() => this.setState({form: 2})}>Checkout</button>
      );
    }

    if (this.state.form === 2) {
      return (
        <AccountFields />
      )
    }
  }
}

var fieldValues = {
  name: null,
  email: null,
  password: null,
  addressOne: null,
  addressTwo: null,
  city: null,
  state: null,
  zipCode: null,
  phoneNumber: null,
  creditCard: null,
  expireDate: null,
  cvv: null,
  billingZip: null
}

class AccountFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 2
    };
  }
  render() {

    if (this.state.form === 3) {
      return (
        <AddressFields />
      )
    }
    return(
      <div>
        <form>
          <label>Name:</label> 
            <input type="text" name="name"/><br/>
          <label>Email:</label> 
            <input type="text" name="email"/><br/>
          <label>Password:</label> 
            <input type="text" name="password"/><br/>
        </form>
        <button onClick={() => this.setState({form: 3})}>Next</button>
      </div>
    )
  }
}

class AddressFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 3
    };
  }
  render() {

    if (this.state.form === 4) {
      return (
        <PaymentFields />
      )
    }

    return(
      <div>
        <form>
          <label>Address Line 1: </label> 
            <input type="text" name="addressOne"/><br/>
          <label>Address Line 2: </label> 
            <input type="text" name="addressTwo"/><br/>
          <label>City: </label> 
            <input type="text" name="city"/><br/>
          <label>State: </label> 
            <input type="text" name="state"/><br/>
          <label>Zip Code: </label> 
            <input type="text" name="zipCode"/><br/>
        </form>
        <button onClick={() => this.setState({form: 4})}>Next</button>
      </div>
    )
  }
}

class PaymentFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 4
    };
  }
  render() {

    if (this.state.form === 1) {
      return (
        <App />
      )
    }

    return(
      <div>
        <form>
          <label>Credit Card Number: </label> 
            <input type="text" name="creditCard"/><br/>
          <label>Expiry Date: </label> 
            <input type="text" name="expireDate"/><br/>
          <label>CVV: </label> 
            <input type="text" name="cvv"/><br/>
          <label>Billing Zip Code: </label> 
            <input type="text" name="billingZip"/><br/>
        </form>
        <button onClick={() => this.setState({form: 1})}>Purchase!</button>
      </div>
    )
  }
}


const domContainer = document.getElementById('app');
ReactDOM.render(<App/>, domContainer);