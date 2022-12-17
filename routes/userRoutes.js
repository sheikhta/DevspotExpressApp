var express = require('express');
var router = express.Router();

const { usersController } = require('../controllers');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const query = req.query;
  console.log(query);
  try {
    const result = await usersController.getAllUsers(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Post add users. */
router.post('/', async function(req, res, next) {
  const body = req.body;
  try {
    const result = await usersController.addUser(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Put update users. */
router.put('/', async function(req, res, next) {
  const body = req.body;
  if(!body._id) {
    return res.status(400).send({message: '_id is required'});
  }
  try {
    const result = await usersController.updateUsers(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Delete delete users. */
router.delete('/:id', async function(req, res, next) {
  const _id = req.params._id;
  try {
    const filter = { _id: _id };
    const result = await usersController.deleteUser(filter);
    res.status(200).send('Delete Successfully', result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;