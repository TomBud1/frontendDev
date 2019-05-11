import React, { Component } from 'react';
import TvDb from '../models/TvDb.js';
import TvList from './TvList.js';
import TvDetails from './TvDetails.js';

class Tvs extends Component {
    constructor(props){
        super(props);
        this.tvDb = new TvDb();

        this.state = {
            tv: this.tvDb._tvs[this.findNextIndex()]
        };
}

findNextIndex() {
    return Math.floor(Math.random() * this.tvDb._tvs.length);
}

changeTv() {
    this.setState({
        tv: this.tvDb._tvs[this.findNextIndex()]
    })
}

componentDidMount() {
    this.timerId = setInterval(() => {
        this.changeTv()
    }, 1000);
}

componentWillUnmount() {
    clearInterval(this.timerId);
}

render() {
    return (
        <div>
            <TvList tvDb={this.tvDb} />
            <hr/>
            <TvDetails tv={this.state.tv} />
        </div>
    );
}

}


export default Tvs;
