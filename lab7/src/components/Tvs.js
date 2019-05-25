import React, { Component } from 'react';
import TvDb from '../models/TvDb.js';
import TvList from './TvList.js';

class Tvs extends Component {
    constructor(props){
        super(props);
        this.tvDb = new TvDb();
}

render() {
    return <TvList tvDb={this.tvDb} />;
}

}

export default Tvs;
