import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";


var ColrComponent = React.createClass({
    getInitialState: function () {
        return {
            color: "000",
            getColor: function () {
                console.log(this.color)
                return this.color;
            }
        }
    },
    getData:function(context){
       return  $.get('http://www.colr.org/json/color/random')
            .then( function(data) {
                context.setState({color: JSON.parse(data).colors[0].hex});
            });
    },
    componentDidMount: function () {
        this.getData(this);
    },
    componentWillMount:function(){

    },
    clicked :function () {
        if(!'000'.includes(this.state.color)){
            this.setState({color:'000'});
        }else{
            this.getData(this);
        }
    },
    render: function () {
        return <h1 onClick={this.clicked} style={{color: '#'+this.state.getColor()}}> {this.props.name}</h1>;
    }
});

class App extends Component {


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <ColrComponent name="Welcome to React"/>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;