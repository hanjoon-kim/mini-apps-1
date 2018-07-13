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

  
  render() {
    {console.log(this.state.board)};
    var board = this.state.board.map((row, x) => {
      row.map((tile, y) => {
        <Square status={tile} x={x} y={y} ß/>
      });
    });

    return (
      <div>{board} {console.log(board)}

      <Row />
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
    var row = this.state.row.map(tile => {
      <Square />
    });
    return (
      <div>{row}</div>
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