const db = require('../models');

module.exports = app => {
  //* ====================================
  //* Create
  //* ====================================
  // Add user
  app.post('/users/add', ({ body }, res) => {
    db.Users.create(body)
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
    // Get all for user
  app.get('/home', (req, res) => {
    // TODO Authentication
    // if (!req.isAuthenticated()) {
    //   res.redirect('/login');
    //   return;
    // }

    // TODO Is there a better way to get user info?
    db.User.find({ _id: req.session.passport.user })
      .populate('chores')
      .populate('groceries')
      .populate('reservations')
      .populate('announcements')
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
