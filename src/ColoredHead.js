/**
 * Created by akramabdulrahman on 5/18/17.
 */
import React from 'react';
import $ from "jquery";

class ColoredHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: '000'}
        this.initData();
        this.handleClick = this.handleClick.bind(this);
    }

    initData() {
        return $.get('http://www.colr.org/json/color/random')
            .then((data) => {
                this.setState({color: JSON.parse(data).colors[0].hex});
            });
    }

    handleClick() {
        if (!'000'.includes(this.state.color)) {
            this.setState({color: '000'});
        } else {
            this.initData();
        }
    }

    render() {
        return (
            <h1 onClick={this.handleClick}
                style={{color: '#' + this.state.color}}>
                {this.props.name}
            </h1>
        );
    }
}

export default ColoredHead;