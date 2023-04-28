const { Thought, User } = require('../models');

const thoughtController = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get one thought by id
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.id })
            .then(data => {
                console.log("DB Data: ", data);
                res.json(data);
            })
            .catch(err => {
                throw err;
            });
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then(data => {
                console.log("DB Data: ", data);
                return User.findOneAndUpdate( 
                    { _id: req.body.userId },
                    { $push: { thoughts: data._id } },
                    { new: true }
                );
            })
            .then(data => {
                console.log("DB Data: ", data);
                res.json(data);
            })
            .catch(err => {
                throw err;
            });

    },

    // UPDATE LOGIC

    // DELETE LOGIC

}


module.exports = thoughtController;

