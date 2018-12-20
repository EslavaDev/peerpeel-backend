const Service = require('./service.service');

exports.create = (req, res) => {
  Service.SavedDataBasePromise(req.body)
    .then(response => res.status(201).json(response))
    .catch(error => res.status(400).json(error));
  // id = `${Date.now()}PEER${Math.floor((Math.random()*100)+1)}`;
};
