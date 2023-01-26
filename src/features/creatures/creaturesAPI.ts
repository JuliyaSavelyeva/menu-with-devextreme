import axios from 'axios';

const CREATURESAPI = 'https://swapi.dev/api/people';

export const getCreatures = () => {
  return axios.get(CREATURESAPI);
};

export const getCreature = (id: string) => {
  return axios.get(`${CREATURESAPI}/${id}`);
};
