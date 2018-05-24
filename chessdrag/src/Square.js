import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
    render () {
        const { black } = this.props;
        const fill = black ? 'black' : 'white';

        return (
            <div className={"Square "+fill}>
                {this.props.children}
            </div>
        );
    }
}

Square.propTypes = { 
    black: PropTypes.bool
};

export default Square;