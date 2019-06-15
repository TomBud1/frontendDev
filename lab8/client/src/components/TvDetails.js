import React, { Component } from 'react';

class TvDetails extends Component {

    render() {
        const { company, model, size, USB, HDMI } = this.props.tv;
        return (
            <div>
                Company: {company}<br></br> Model: {model}<br></br> Size: {size}<br></br> USB: {USB}<br></br> HDMI: {HDMI}
            </div>
        );
    }
}

export default TvDetails;