const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
    journalEntry: {
        type: String,
        required: true
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }, {
        timestamps: true
    }
});