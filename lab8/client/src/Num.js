import axios from 'axios';
import React, { Component } from 'react';


class Num extends Component {

	state = {
	  number: '',
	  numbers: []
	};
	
	componentDidMount() {
		this.fetchNumbers();
	}
	
	renderNumbers() {
	  return this.state.numbers.map((n) => n).join(', ');
	}
	
	async fetchNumbers() {
	const values = await axios.get("http://localhost:8000/api/numbers/all");
	console.log(values);
	this.setState({numbers: values.data});
	}

	handleSubmit = async (event) => {
		//event.preventDefault();
		await axios.post("http://localhost:8000/api/numbers", {number: this.state.number});
		await this.fetchNumbers();
	};
	
	render() {
	  return (
	    <div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter number:</label>
                    <input
                        value={this.state.number}
                        onChange={event => this.setState({number: event.target.value})}
                    ></input>
										<button>Submit</button>
										</form>
		</div>
		<br></br>
		<div>
		{this.renderNumbers()}
		</div>
        </div>
	)
    }
    
}

export default Num;