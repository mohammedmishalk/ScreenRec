import axios from "axios";

const instance =axios.create({
    baseURL:"https://screenrec.onrender.com"
});

export default instance;