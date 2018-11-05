import React, { Component } from 'react';
import './App.css';

function Square(props){

  return (
    <div className="square" >
      {props.value}
    </div>
  );

}
class Game extends React.Component{
  constructor(props){
    super(props);

    const squares1 = [];
    const squares2 = [];
    const squares3 = [];
    for(let top = 0;top < 3 ; top++){
    for(let count = 0 ; count < 3; count++){
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push({
          id: `r${i}-c${j}`,
          value: `r${i}-c${j}`
        });
      }
      squares1.push(row);
      // squares2.push(row);
      // squares3.push(row);
    }
  } 
}

    this.state = {
      squares1: squares1,
      squares2: squares2,
      squares3: squares3
    };
  }
  renderSquare(i) {
    //onClick = {() => {this.handleCLick(i)} }
    return <Square  />;
  }
  render(){
    // debugger;
    const {squares1} = this.state;
    const {squares2} = this.state;
    const {squares3} = this.state;
    return (
       
      <div className="main-div"> 
      {
        squares1.map((row, i) => {
          return (
          
            <div key={i} className="row" >
              {
                row.map((cell) => {
                  return this.renderSquare(cell.id);
                })
              }
            </div>
          );
        })
      }
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
       <Game/>
      </div>
    );
  }
}

export default App;
