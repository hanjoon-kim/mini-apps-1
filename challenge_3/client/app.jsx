class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      form: 1
    };
  }
  
  render() {
    
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
  zipcode: null,
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
      form: 2,
      name: '',
      email: '',
      password:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })
  }
  
  handleSubmit(e) {
    console.log('submitted woo' + this.state.name + this.state.email + this.state.password);
    e.preventDefault();
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
            <input type="text" name="name" onChange={this.handleChange}/><br/>
          <label>Email:</label> 
            <input type="text" name="email" onChange={this.handleChange}/><br/>
          <label>Password:</label> 
            <input type="password" name="password" onChange={this.handleChange}/><br/>
            <button type="button" onClick={(e) => {this.handleSubmit(e); this.setState({form: 3});}}>Next</button>
        </form>
      </div>
    )
  }
}

class AddressFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 3,
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zipcode: ''
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })
  }
  
  handleSubmit(e) {
    console.log('submitted woo ' + this.state.zipCode + this.state.addressTwo + this.state.state);
    e.preventDefault();
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
            <input type="text" name="addressOne" onChange={this.handleChange}/><br/>
          <label>Address Line 2: </label> 
            <input type="text" name="addressTwo" onChange={this.handleChange}/><br/>
          <label>City: </label> 
            <input type="text" name="city" onChange={this.handleChange}/><br/>
          <label>State: </label> 
            <input type="text" name="state" onChange={this.handleChange}/><br/>
          <label>Zip Code: </label> 
            <input type="text" name="zipcode" onChange={this.handleChange}/><br/>
        </form>
        <button onClick={(e) => {this.handleSubmit(e); this.setState({form: 4});}}>Next</button>
      </div>
    )
  }
}

class PaymentFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 4,
      creditCard: '',
      expireDate: '',
      cvv: '',
      billingZip: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })
  }
  
  handleSubmit(e) {
    console.log('submitted woo' + this.state.creditCard + this.state.expireDate + this.state.cvv);
    e.preventDefault();
  }
  
  render() {

    if (this.state.form === 5) {
      return (
        <Confirmation />
      )
    }

    return(
      <div>
        <form>
          <label>Credit Card Number: </label> 
            <input type="text" name="creditCard" onChange={this.handleChange}/><br/>
          <label>Expiry Date: </label> 
            <input type="text" name="expireDate" onChange={this.handleChange}/><br/>
          <label>CVV: </label> 
            <input type="text" name="cvv" onChange={this.handleChange}/><br/>
          <label>Billing Zip Code: </label> 
            <input type="text" name="billingZip" onChange={this.handleChange}/><br/>
        </form>
        <button onClick={(e) => {this.handleSubmit(e); this.setState({form: 5});}}>Next</button>
      </div>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      form: 5
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    console.log('submitted woo' + this.state.name + this.state.email + this.state.password);
    e.preventDefault();
  }
  
  render() {
    
    if (this.state.form === 1) {
      return (<App />);
    }

    return(
      <div>
        <button onClick={() => this.setState({form: 1})}>Purchase!</button>
      </div>
    )
  }
}


const domContainer = document.getElementById('app');
ReactDOM.render(<App/>, domContainer);