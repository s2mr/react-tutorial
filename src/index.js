import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//コントロールドコンポーネント(自身は状態を保持しておらず、Boardに管理されている)
//ファンクショナルコンポーネント（renderメソッドしか持っていないコンポーネント）
// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()  }>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
}

class Board extends React.Component {
  //子（Square)でなく親が状態を管理
  //そのほうがシンプルに書ける
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    }
  }
  
  handleClick(i) {
    console.log("CLICKED::", i)
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({squares: squares})
    
    //なんかこれだと実行できなかった。
    // １行で書けたら便利なのに
    // this.state.squares[i] = "X"
  }
  
  renderSquare(i) {
    return (
      <Square
      // 二つのprops
       value={this.state.squares[i]}
       onClick={ () => this.handleClick(i) } />
     );
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
