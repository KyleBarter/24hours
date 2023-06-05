const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//?activity schema
const activitySchema = new Schema ({
    activity: {
        type: String,
        required: true
    },
    activityType: {
        type: String,
        enum: ['Cooking', 'Exercise', 'Gardening', 'Hobby', 'Reading', 'Religious practice', 'Hygiene', 'Sleeping', 'Socialising', 'Studying', 'Wellbeing', 'Work', 'Housework'],
        required: true
    },
    //checkboxes to select multiple
    day: [{
        type: String,
        enum: ['Monday', ' Tuesday', ' Wednesday', ' Thursday', ' Friday', ' Saturday', ' Sunday'],
        required: true
    }],
    //time will need to increment from 30mins, 1hour, 1hour 30mins, 2hours etc
    // possibly use enum  and have it increment? Then in EJS just print the hours so it's not 
    // a user picking 600 minutes trying to figure out how many hours
    time: {
        type: Number,
        min: 0,
        max: 1400,
        required: true
    },
    recordedGoal: {
        type: Boolean
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
})

module.exports = mongoose.model('Activity', activitySchema)