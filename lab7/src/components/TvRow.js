import React, { Component } from 'react';

class TvRow extends Component {

    render() {
        console.log(this.props.tv.company);
        return (
            <div>
                {this.props.tv.company} {this.props.tv.model}
            </div>
        );
    }

}

export default TvRow;