const Service = require('./servicePost.model');

exports.saveService = (req, res) => {
  const {
    title,
    valorInicial,
    descripcion,
    ubicacion,
    categoria,
  } = req.body;

  const { _id } = req.user;

  const service = new Service({
    title,
    valorInicial,
    descripcion,
    ubicacion,
    categoria,
    client: _id,
  });

  service.save((err, productDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (!productDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    return res.status(201).json({
      ok: true,
      product: productDB,
    });
  });
};

exports.getAll = (req, res) => {
  const { sky } = req.query || 0;
  const { lim } = req.query || 5;
  Service.find({})
    .sort('title')
    .populate('client', 'nombre email')
    .populate('worker', 'nombre email')
    .populate('categoria', 'description')
    .skip(Number(sky))
    .limit(Number(lim))
    .exec((err, serviceDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      return res.json({
        ok: true,
        serviceDB,
      });
    });
};

exports.getServicePostSearch = (req, res) => {
  const { term } = req.params;
  // const { _id } = req.user;

  const regex = new RegExp(term, 'i');
  Service.find({ nombre: regex })
    .populate('client', 'nombre email')
    .populate('worker', 'nombre email')
    .populate('categoria', 'description')
    .exec((err, serviceDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      if (!serviceDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El termino no existe',
          },
        });
      }
      return res.json({
        ok: true,
        serviceDB,
      });
    });
};

exports.updatedService = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  Service.findByIdAndUpdate(id, body,
    { new: true }, (err, serviceDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      if (!serviceDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El ID no existe',
          },
        });
      }
      return res.json({
        ok: true,
        serviceDB,
      });
    });
};

exports.getId = (req, res) => {
  const { id } = req.params;
  Service.findById(id)
    .populate('client', 'nombre email')
    .populate('worker', 'nombre email')
    .populate('categoria', 'description')
    .exec((err, serviceDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      if (!serviceDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El ID no existe',
          },
        });
      }
      return res.json({
        ok: true,
        serviceDB,
      });
    });
};

exports.removeService = (req, res) => {
  const { id } = req.params;
  Service.findByIdAndUpdate(id, { disponible: false },
    { new: true }, (err, serviceDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      if (!serviceDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El ID no existe',
          },
        });
      }
      return res.json({
        ok: true,
        serviceDB,
      });
    });
};
