const express = require('express');
const routes = express.Router();

const api = require('./services/api');

routes.get('/characters',async (req,res) => {

  const response = await api.get('/character');

  const filteredCharacter = response.data.results.map(({id,name,status,species,gender,location,image}) => {
    return {
      id,
      name,
      status,
      species,
      gender,
      location,
      image,
    };
  });

  res.send(filteredCharacter);

}); 

module.exports = routes;