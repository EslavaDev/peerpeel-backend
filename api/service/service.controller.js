const Service = require('./service.service');

exports.create = (req, res) => {
  const {
    date,
    hour,
    client,
    phone,
    anotation,
    type,
    address,
    sector,
  } = req.body;
  const data = {
    client,
    date,
    hour,
    phone,
    anotation,
    address,
    sector,
    type,
  };
  Service.SavedDataBasePromise(data)
    .then(response => res.status(201).json(response))
    .catch(error => res.status(400).json(error));
  // id = `${Date.now()}PEER${Math.floor((Math.random()*100)+1)}`;
};
