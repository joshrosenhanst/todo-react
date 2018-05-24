import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { canMoveKnight, moveKnight } from './Game';

class Board extends Component{
    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i/8);
        
        return (
            <div key={i} className={"SquareContainer "+(canMoveKnight(x,y) ? 'isMoveable':'')}>
                <BoardSquare x={x} y={y}>
                    {this.renderPiece(x,y)}
                </BoardSquare>
            </div>
        );
    }

    renderPiece(x,y) {
        const [knightX, knightY] = this.props.knightPosition;
        if (x === knightX && y === knightY) {
          return <Knight />;
        }
    }

    handleSquareClick(toX, toY){
        if(canMoveKnight(toX, toY)){
            moveKnight(toX, toY);
        }
    }

    render(){
        const squares = [];
        for(let i=0;i<64;i++){
            squares.push(this.renderSquare(i));
        }

        return (
            <div className="Board">
                {squares}
            </div>
        );
    }
}

Board.propTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
}

export default Board;