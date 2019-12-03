import React from 'react';
import Chess from './Chess';
//棋盘
class Board extends React.Component{  
    
    renderSquare(i){
        return(
            <Chess value={this.props.chesses[i]} onClick={() =>this.props.onClick(i)}/>  /*将value和事件以props形式传入子组件*/
        )
    }
     

    render() {
       
        return (
            <div>
              
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

export default Board;