const db = require('../models');

module.exports = app => {
  //* ====================================
  //* Create
  //* ====================================
  // Add chores
  app.post('/chores/add', ({ body }, res) => {
    db.Chores.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { chores: _id } }, { new: true })
      )
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
  //* ====================================
  //* Read
  //* ====================================
  // Get all chores
  app.get('/chores', (req, res) => {
    // TODO Authentication
    // if (!req.isAuthenticated()) {
    //   res.redirect('/login');
    //   return;
    // }

    db.Chores.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });
  //* ====================================
  //* Update
  //* ====================================
  //* ====================================
  //* Delete
  //* ====================================
};
