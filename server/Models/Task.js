const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Complete'],
        default: 'Pending',
    },
    dueDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Task', taskSchema);

