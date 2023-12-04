const express = require('express');
const userController = require('../controllers/user');

const userRouter = express.Router();

userRouter
  .post('/', (req, resp) => {
    userController.create(req.body, (err, res) => {
      let respObj;
      if (err) {
        respObj = {
          status: 'error',
          msg: err.message,
        };
        return resp.status(400).json(respObj);
      }
      respObj = {
        status: 'success',
        msg: res,
      };
      resp.status(201).json(respObj);
    });
  })
  .get('/:username', (req, resp, next) => {// We implement get method for the routes
    const username = req.params.username;
    userController.get(username, (err, user) => {
      if (err) {
        const respObj = {
          status: 'error',
          msg: err.message,
        };
        return resp.status(404).json(respObj);//We parameter the error 
      }
      const respObj = {
        status: 'success',
        data: user,
      };
      resp.status(200).json(respObj);// Else we collected well the data
    });
  });
module.exports = userRouter;
