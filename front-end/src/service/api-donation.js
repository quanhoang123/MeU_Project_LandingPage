import axios from 'axios';
const API_URL="https://localhost:8000/api/";
export default function callAPI(endpoint, method = "GET", body) {
        return axios({
            method: method,
            url: `${API_URL}/${endpoint}`,
            data: body,
        }).catch((err) => {
            console.log(err);
        });
}
export const callAPI = () =>{
    return axios({
        method: 'GET',
        url: 'https://data-json-server.herokuapp.com/api/products',
        data: null
    }).then(res => {
        res.data
    })
    .catch(err => { })};