import React, { Component } from "react";
import TvCrud from "../services/TvCrud";

class AddTv extends Component {
    state = {
        company: '',
        model: '',
        size: '',
        smartTv: '',
        HDMI: '',
        USB: ''
    }

    handleSubmit = async event => {
        // const { company, model, size, smartTv, HDMI, USB } = this.state;
        // if (company === "" || model === "" || size === "" || smartTv === "" || HDMI === "" || USB === "") {
        //   return;
        // }
        event.preventDefault();
        const newTv = {
            company: this.state.company,
            model: this.state.model,
            size: this.state.size,
            smartTv: this.state.smartTv,
            HDMI: this.state.HDMI,
            USB: this.state.USB
        }
        console.log("debug");
        console.log(newTv);
        await new TvCrud().addTv(newTv);
        window.location.reload();
    }

    render() {
        return (
            <div>
                <h2 style={{ color: "Blue" }}>Add a tv</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="company">Company </label>
                            <input
                                type="text"
                                name="company"
                                value={this.state.company}
                                placeholder="Enter Company..."
                                onChange={event => this.setState({ company: event.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="model">Model </label>
                            <input
                                type="text"
                                name="model"
                                value={this.state.model}
                                placeholder="Enter Model..."
                                onChange={event => this.setState({ model: event.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="Size">Size </label>
                            <input
                                type="number"
                                name="size"
                                value={this.state.size}
                                placeholder="Enter Size..."
                                onChange={event => this.setState({ size: event.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="HDMI">HDMI </label>
                            <input
                                type="number"
                                name="hdmi"
                                value={this.state.HDMI}
                                placeholder="Enter HDMI number..."
                                onChange={event => this.setState({ HDMI: event.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="USB">USB </label>
                            <input
                                type="number"
                                name="usb"
                                value={this.state.USB}
                                placeholder="Enter USB number..."
                                onChange={event => this.setState({ USB: event.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="smartTV">SmartTV </label>
                            <input
                                type="checkbox"
                                name="smartTv"
                                value={this.state.smartTv}
                                placeholder="SmartTV..."
                                onChange={event => this.setState({ smartTv: event.target.value })}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Add TV"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTv;