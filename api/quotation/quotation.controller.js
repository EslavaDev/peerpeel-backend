const Quotation = require('./quotation.model');

exports.saveQuotation = (req, res) => {
  const {
    title,
    valorCotizado,
    descripcion,
    service,
  } = req.body;

  const { _id } = req.user;

  const quotation = new Quotation({
    title,
    valorCotizado,
    descripcion,
    service,
    worker: _id,
  });

  quotation.save((err, quotationDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (!quotationDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    return res.status(201).json({
      ok: true,
      quotationDB,
    });
  });
};

exports.getAll = (req, res) => {
  const { _id } = req.user;
  const { sky } = req.query || 0;
  const { lim } = req.query || 5;
  Quotation.find({ worker: _id })
    .sort('title')
    .populate('worker', 'nombre email')
    .populate('ServicePost')
    .skip(Number(sky))
    .limit(Number(lim))
    .exec((err, quotationDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      return res.json({
        ok: true,
        quotationDB,
      });
    });
};

exports.getAllQuotationService = (req, res) => {
  const { id } = req.params;
  const { sky } = req.query || 0;
  const { lim } = req.query || 5;
  Quotation.find({ service: id })
    .sort('title')
    .populate('worker', 'nombre email')
    .populate('ServicePost')
    .skip(Number(sky))
    .limit(Number(lim))
    .exec((err, quotationDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      return res.json({
        ok: true,
        quotationDB,
      });
    });
};


exports.getQuotationSearchFotWorker = (req, res) => {
  const { term } = req.params;
  const { _id } = req.user;

  const regex = new RegExp(term, 'i');
  Quotation.find({ title: regex, worker: _id })
    .populate('worker', 'nombre email')
    .populate('ServicePost')
    .exec((err, quotationDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      if (!quotationDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El termino no existe',
          },
        });
      }
      return res.json({
        ok: true,
        quotationDB,
      });
    });
};

exports.updatedQuotation = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  Quotation.findByIdAndUpdate(id, body,
    { new: true }, (err, quotationDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      if (!quotationDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El ID no existe',
          },
        });
      }
      return res.json({
        ok: true,
        quotationDB,
      });
    });
};

exports.getId = (req, res) => {
  const { id } = req.params;
  Quotation.findById(id)
    .populate('worker', 'nombre email')
    .populate('ServicePost')
    .exec((err, quotationDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      if (!quotationDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El ID no existe',
          },
        });
      }
      return res.json({
        ok: true,
        quotationDB,
      });
    });
};

exports.removeQuotation = (req, res) => {
  const { id } = req.params;
  Quotation.findByIdAndUpdate(id, { estado: 'RECHAZADO' },
    { new: true }, (err, quotationDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      if (!quotationDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El ID no existe',
          },
        });
      }
      return res.json({
        ok: true,
        quotationDB,
      });
    });
};
