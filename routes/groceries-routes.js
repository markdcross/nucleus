const db = require('../models');

module.exports = app => {
  //* ====================================
  //* Create
  //* ====================================
  // Add groceries
  app.post('/groceries/add', ({ body }, res) => {
    db.Groceries.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          {},
          { $push: { groceries: _id } },
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
  // Get all groceries
  app.get('/groceries', (req, res) => {
    // TODO Authentication
    // if (!req.isAuthenticated()) {
    //   res.redirect('/login');
    //   return;
    // }

    // TODO Is there a better way to get user info?
    db.Groceries.find({})
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
