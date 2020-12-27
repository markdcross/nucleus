const db = require('../models');

module.exports = app => {
  //* ====================================
  //* Create
  //* ====================================
  // Add reservations
  app.post('/reservations/add', ({ body }, res) => {
    db.Chores.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          {},
          { $push: { reservations: _id } },
          { new: true }
        )
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
  //* ====================================
  //* Update
  //* ====================================
  //* ====================================
  //* Delete
  //* ====================================
};
