import axios from 'axios';

const PLANETSAPI = 'https://swapi.dev/api/planets';

export const getPlanets = () => {
  return axios.get(PLANETSAPI);
};

export const getPlanet = (id: string) => {
  return axios.get(`${PLANETSAPI}/${id}`);
};
