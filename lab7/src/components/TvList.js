import React, { Component } from 'react';
import TvRow from './TvRow.js';

class TvList extends Component {
    constructor(props) {
        super(props);
        
        this.tvDb = props.tvDb;
    }

    render() {
        return (
            this.tvDb._tvs.map(tv => {
                return <TvRow tv={tv} />
            })
        );
    }
}

export default TvList;