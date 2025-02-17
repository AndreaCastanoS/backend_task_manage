const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('tasks', schema);
module.exports = Task;
