import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ]
    };
  }
  
  handleClick() {
    
  }
  
  render() {
    
    const board = [];
    for (let i = 0; i < 6; i++) {
      board.push(<Row />);
    }

    return (
      <div>
        {board} 
      </div>
    );
  }
}

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: [0,0,0,0,0,0,0]
    }
  };

  render() {
    const row = [];
    for (let j = 0; j < 7; j++) {
       row.push(<Square />);
    }
    
    return (
      <div className="row">{row}</div>
    )
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  };

  render() {
    return (
      <div className="square">
      </div>
    )
  }
}

export default App;


//Square Components
  //Square components have a on/off state that display a piece if on
  //If a square is clicked
    //Check same x coordinate, biggest y coordinate and see if state is on
      //If off, turn on and exit function
//Board state is a state in App
//Create squares based on 