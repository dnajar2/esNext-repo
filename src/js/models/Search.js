import axios from "axios";

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults() {
        const key = '5c8f7f48703a262175a69ac1d884e274';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        }catch (e) {
            alert(e);
        }

    }
}