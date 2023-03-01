import React, {Component} from 'react';

class Square extends Component {
    render() {
        return (
            <div className={`${this.props.state.clickedColor} display-fullscreen`} onClick={this.props.changeColor} ></div>
        );
    }
}

export default Square;