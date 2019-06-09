import React, {Component} from 'react';
import Dollar from './Dollar.js';
import PLN from './PLN.js';

export default class Parent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dollar: "",
            pln: ""
        }
    }

    handleDollarChange = (value) => {
        this.setState({dollar: value , pln: value*2 })
    };

    handlePLNChange = (value) => {
        this.setState({dollar: value/2 , pln: value })
    };

    render () {
        return (
            <div>
            <Dollar dollars={this.state.dollar}
                onDollarChange={this.handleDollarChange}
            />
            <PLN plns={this.state.pln}
                onPLNChange={this.handlePLNChange}
            />
            </div>
        )
    }
}
