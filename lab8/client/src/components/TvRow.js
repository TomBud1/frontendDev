import React, { Component } from 'react';
import TvDetails from './TvList';

class TvRow extends Component {

    // onClick() {
    //     const id = this.props.tv.id;
    //     const tvDetails = this.props.tvs.map(tv => {
    //         if (tv.id === id) {
    //             return (
    //                 <TvDetails
    //                     key={tv.id}
    //                     tv={tv}
    //                 />
    //             );
    //         }
    //     });
    //     return tvDetails;
    // }

    render() {
        const { id, company, model } = this.props.tv;
        return (
            <div>
                <i style={{ cursor: "pointer" }} onClick={this.onClick} value={id}> {id} {company} {model}</i>
            </div>
        );
    }

}

export default TvRow;