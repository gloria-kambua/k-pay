import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:8000",
});
console.log('I have exported the instance')
export default instance;