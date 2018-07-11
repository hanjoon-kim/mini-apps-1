class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkout: false };
  }
  
  render() {
    if (this.state.checkout) {
      console.log('checkedout');
    }
    
    return ( 
      <button onClick={() => this.setState({checkout: true})} >Checkout</button>

    );

// 'button', {
      // onClick: () => this.setState({ checkout: true }),
    // }, 'Checkout');
  }
}





const domContainer = document.getElementById('app');
ReactDOM.render(<App/>, domContainer);