import React, { Component } from 'react';
import TvCrud from '../services/TvCrud.js';
import TvList from './TvList.js';
import AddTv from './AddTv.js';

class Tvs extends Component {

    state = {
        tvs: []
    };

    async componentDidMount() {
        this.fetchTv();
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.tvs.length !== this.state.tvs.length) {
            this.fetchTv();
        }
    }

    async fetchTv() {
        const tvs = await new TvCrud().fetchTvs();
        this.setState({
            tvs
        });
    }

    deleteTv = async id => {
        try {
            await new TvCrud().deleteTv(id);
        } catch (e) { }
        this.setState(state => {
            const newTvs = state.tvs.filter(tv => tv.id !== id);
            return {
                tvs: newTvs
            };
        });
    };

    editTv = id => {
        this.props.history.push('tv/edit/${id)');
    };

    render() {
        return (
            <div>
                <TvList
                    tvs={this.state.tvs}
                />
                <AddTv
                />
            </div>
        );
    }

}

export default Tvs;
