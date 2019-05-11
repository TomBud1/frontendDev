import React, { Component } from 'react';

class TvDetails extends Component {
    render() {
        return (
            <div>
                {this.props.tv.toString()}
            </div>
        );
    }
}

export default TvDetails;