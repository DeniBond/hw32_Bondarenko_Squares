import React, {Component} from 'react';
import './Squares.css'

class Squares extends Component {

    render() {
        return (
            <div className={'container'} onClick={this.props.changeColor}>
                <div className={'red'}></div>
                <div className={'blue'}></div>
                <div className={'green'}></div>
                <div className={'yellow'}></div>
            </div>
        );
    }
}

export default Squares;