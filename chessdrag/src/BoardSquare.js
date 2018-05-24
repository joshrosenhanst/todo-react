import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { canMoveKnight, moveKnight } from './Game';
import { ItemTypes } from './ItemTypes';
import { DropTarget } from 'react-dnd';

const squareTarget = {
    drop(props) {
        moveKnight(props.x, props.y);
    }
}

function collect(connect, monitor){
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

class BoardSquare extends Component{
    render() {
        const { x, y, connectDropTarget, isOver } = this.props;
        const black = (x+y) % 2 === 1;

        return connectDropTarget(
            <div className={"innerSquareContainer "+(isOver?"isOver":"")}>
                <Square black={black}>
                    {this.props.children}
                </Square>
            </div>
        );
    }
}

BoardSquare.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);