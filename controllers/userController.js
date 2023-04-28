const {ObjectId} = require('mongodb').Types;
const {User, Thought} = require('../models');

const usersnumber  = async () => {
    const usersCount = await User.aggregate()
    .count('users');
    return usersCount;
}


