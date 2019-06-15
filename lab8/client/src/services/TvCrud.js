import axios from 'axios';

class TvCrud {
    async fetchTvs() {
        const res = await axios.get("http://127.0.0.1:4000/api/tvs");
        return res.data;
    }

    async deleteTv(id){
        await axios.delete(`http://127.0.0.1:4000/api/tvs/${id}`);
    }

    async addTv(newTv) {
        await axios.post("http://127.0.0.1:4000/api/tvs", newTv);
    }

    async getTv(id) {
        const res = await axios.get(`http://127.0.0.1:4000/api/tvs/${id}`);
        return res.data;
    }

    async updateTv(updatedTv, id) {
        await axios.put(`http://127.0.0.1:4000/api/tvs/${id}`, updatedTv);
    }
}

export default TvCrud;