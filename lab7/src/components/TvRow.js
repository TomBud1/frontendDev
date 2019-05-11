import React, { Component } from 'react';

class TvRow extends Component {

    render() {
        return (
            <div>
                {this.props.tv.title}
            </div>
        );
    }

}

export default TvRow;