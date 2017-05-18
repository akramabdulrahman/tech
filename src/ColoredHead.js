/**
 * Created by akramabdulrahman on 5/18/17.
 */
import React from 'react';
import axios from "axios";

class ColoredHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: '000'}
        this.initData();
        this.handleClick = this.handleClick.bind(this);
    }

    initData() {
        return axios.get('http://www.colr.org/json/color/random')
            .then((response) => {
                this.setState({color: (response).data.colors.pop().hex});
            })
            .catch((error) => {
                console.log(error);
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