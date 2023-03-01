import './App.css';
import Squares from "./Squares";
import Square from "./Square";

import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickedColor: null,
            clicked: false
        }
    }

    changeColor = (e) => {
        this.setState({
            clickedColor: e.target.className,
            clicked: !this.state.clicked
        })
    }

    render() {

        if (this.state.clicked) {
            return (
                <Square changeColor={this.changeColor} state={this.state}/>
            )
        } else {
            return (
                <div>
                    <Squares changeColor={this.changeColor}/>
                </div>
            )
        }
    }
}

export default App;


