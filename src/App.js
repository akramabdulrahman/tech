import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import ColoredHead from "./ColoredHead"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: 'Welcome to React'
        };
        this.changeHeaderText = this.changeHeaderText.bind(this);

    }

    changeHeaderText(evt) {
        this.setState({headerText: evt.target.value})
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <ColoredHead name={this.state.headerText}/>
                </div>
                <p className="App-intro">
                    To get started, edit <input type="text" onChange={this.changeHeaderText} value={this.state.headerText}/> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
