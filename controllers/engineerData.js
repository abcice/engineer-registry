const Engineer = require('../models/engineer.js');

const dataController = {};

// INDEX: Get all engineers
dataController.index = async (req, res, next) => {
  try {
    const engineers = await Engineer.find({});
    res.locals.data.engineers = engineers;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// DESTROY: Delete an engineer by ID
dataController.destroy = async (req, res, next) => {
  try {
    await Engineer.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// UPDATE: Update engineer info
dataController.update = async (req, res, next) => {
  req.body.available = req.body.available === 'on';

  try {
    res.locals.data.engineer = await Engineer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// CREATE: Create a new engineer
dataController.create = async (req, res, next) => {
  req.body.available = req.body.available === 'on';

  try {
    const newEngineer = await Engineer.create(req.body);
    res.locals.data.engineer = newEngineer;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// SHOW: Get one engineer by ID
dataController.show = async (req, res, next) => {
  try {
    const engineer = await Engineer.findById(req.params.id);
    if (!engineer) {
      throw new Error(`Could not locate an engineer with the ID ${req.params.id}`);
    }
    res.locals.data.engineer = engineer;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = dataController;
