const express = require('express');
const userController = require('../controllers/user');

const userRouter = express.Router();

// We define the structure of response for different case of them : success, then error, then the structure for a user
/**
 * @typedef UserResponse
 * @property {string} status.required - The status of the response - eg: success, error
 * @property {string} msg - The message associated with the response
 * @property {object} data - The user data
 */
/**
 * @typedef Error
 * @property {string} status.required - The status of the response - eg: error
 * @property {string} msg.required - The error message
 */
/**
 * @typedef User
 * @property {string} username.required - The user's username
 * @property {string} email.required - The user's email
 * @property {string} password.required - The user's password
 */
/**
 * Create a new user
 * @route POST /user
 * @group user - Operations about users
 * @param {User.model} user.body.required - New user's information.
 * @returns {UserResponse.model} 201 - Successfully created user
 * @returns {Error.model}  400 - Bad Request
 */

userRouter.post('/', (req, resp) => {//Then we have the code where we execute our REST API functions (ere POST)
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
});

//Here we define the documentation for the GET method by username, from the REST API, 
/**
 * Get a user by username
 * @route GET /user/{username}
 * @group user - Operations about users
 * @param {string} username.path.required - The user's username
 * @returns {UserResponse.model} 200 - Successfully retrieved user
 * @returns {Error.model} 404 - User not found
 */
userRouter.get('/:username', (req, resp) => {//Then the REST method GET
  const username = req.params.username;
  userController.get(username, (err, user) => {
    if (err) {
      const respObj = {
        status: 'error',
        msg: err.message,
      };
      return resp.status(404).json(respObj);
    }
    const respObj = {
        status: 'success',
        data: user,
    };
    resp.status(200).json(respObj);
  });
});

module.exports = userRouter;
