const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
} = require('../../controllers/thought-controller.js');

router.route('/').get(getAllThoughts).post(addThought);

//router.route('/:userId').post(addThought);

//router.route('/:userId/:thoughtId').get(getThoughtById).put(updateThought).delete(removeThought);

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;

