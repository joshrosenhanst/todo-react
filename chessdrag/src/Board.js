import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';

class Board extends Component{
    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i/8);
        const black = (x + y) % 2 === 1;
        
        const [knightX, knightY] = this.props.knightPosition;
        const piece = (x === knightX && y === knightY) ? <Knight /> : null;

        
        return (
            <Square black={black} key={i}>
                {piece}
            </Square>
        );
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