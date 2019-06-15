import React, { Component } from 'react';
import TvDetails from './TvDetails.js';
import TvRow from './TvRow.js';

class TvList extends Component {

    deletetv = id => {
        this.props.handleDeletetv(id);
    };

    edittv = id => {
        this.props.handleEdittv(id);
    };

    renderTvRows = () => {
        const tvRows = this.props.tvs.map(tv => {
            return (
                <TvRow
                    key={tv.id}
                    tv={tv}
                />
            );
        });
        return tvRows;
    };

    renderTvDetails(id) {
        const tvDetails = this.props.tvs.map(tv => {
            if (tv.id === id) {
                return (
                    <TvDetails
                        key={tv.id}
                        tv={tv}
                    />
                );
            }
        });
        return tvDetails;
    };

    render() {
        return (
            <React.Fragment>
                <h2 style={{ color: "Green" }}>List of TVs</h2>
                {this.renderTvRows()}
                <h2 style={{ color: "Red" }}>Details for TV</h2>
                {this.renderTvDetails(1)}
            </React.Fragment>
        );
    }


}

export default TvList;