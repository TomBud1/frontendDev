import React, { Component } from "react";
import TvCrud from "../services/TvCrud";

class EditTv extends Component {
    state = {
        company: '',
        model: '',
        size: '',
        smartTv: '',
        HDMI: '',
        USB: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const tv = await new TvCrud().getTv(id);
        const { company, model, size, smartTv, HDMI, USB } = tv;
        this.setState({
          company,
          model,
          size,
          smartTv,
          HDMI,
          USB
        });
    }

    handleSubmit = async event => {
        // const { company, model, size, smartTv, HDMI, USB } = this.state;
        // if (company === "" || model === "" || size === "" || smartTv === "" || HDMI === "" || USB === "") {
        //   return;
        // }
        event.preventDefault();
        const updatedTv = {
            company: this.state.company,
            model: this.state.model,
            size: this.state.size,
            smartTv: this.state.smartTv,
            HDMI: this.state.HDMI,
            USB: this.state.USB
        }
        console.log("debug");
        console.log(updatedTv);
        const { id } = this.props.match.params;
        await new TvCrud().updateTv(updatedTv, id );
        window.location.reload();
    }

    render() {
        return (
            <div>
                <h2 style={{ color: "Blue" }}>Update a tv</h2>
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
                                defaultValue={this.state.company}
                            />
                        </div>
                        <div>
                            <label htmlFor="model">Model </label>
                            <input
                                type="text"
                                name="model"
                                value={this.state.model}
                                placeholder="Enter Model..."
                                defaultValue={this.state.model}
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
                                defaultValue={this.state.size}
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
                                defaultValue={this.state.HDMI}
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
                                defaultValue={this.state.USB}
                                onChange={event => this.setState({ USB: event.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="SmartTV">SmartTV </label>
                            <input
                                type="checkbox"
                                name="smartTv"
                                value={this.state.smartTv}
                                placeholder="SmartTV..."
                                defaultValue={this.state.smartTv}
                                onChange={event => this.setState({ smartTv: event.target.value })}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Update TV"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default EditTv;