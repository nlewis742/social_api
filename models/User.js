const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // look into mongoose's matching validation
           // match: [/.+@.+\..+/, 'Must match an email address!'] ??
        },
        thoughts: [thoughtSchema],
    });

    const User = model('user', userSchema);

    module.exports = user;