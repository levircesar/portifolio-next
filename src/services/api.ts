import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/users/levircesar',
  //'http://localhost:3333/'
  //'https://vercel-api-phi.vercel.app/api/'
  //'https://testeserverproffy.herokuapp.com/'
});

export const SecondApi = axios.create({
  baseURL: 'https://testeserverproffy.herokuapp.com',
  //'http://localhost:3333/',
  //'https://vercel-api-phi.vercel.app/api/',
  //'https://testeserverproffy.herokuapp.com/',
  //'https://api.github.com/users/levircesar',
});

