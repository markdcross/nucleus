const db = require('../models');

module.exports = app => {
  //* ====================================
  //* Create
  //* ====================================
  // Add announcement
  app.post('/announcements/add', ({ body }, res) => {
    db.Announcements.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          {},
          { $push: { announcements: _id } },
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
  // Get all announcements
  app.get('/announcements', (req, res) => {
    // TODO Authentication
    // if (!req.isAuthenticated()) {
    //   res.redirect('/login');
    //   return;
    // }
    db.Announcements.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //TODO Get all announcements for user
    //TODO Get all announcements from user
  //* ====================================
  //* Update
  //* ====================================
  //TODO Update announcement
  //* ====================================
  //* Delete
  //* ====================================
  //TODO Delete announcement
};
