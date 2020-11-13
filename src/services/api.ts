import axios from 'axios';

const api = axios.create({
  baseURL:'https://acompanhamentohospitalarapi.azurewebsites.net/'
});

export default api;