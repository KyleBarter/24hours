const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//?activity schema
const activitySchema = new Schema ({
    activity: String,
    activityType: {
        type: String,
        enum: ['Cooking', 'Exercise', 'Gardening', 'Hobbies', 'Reading', 'Religious practice', 'Self care', 'Sleep', 'Socialising', 'Studying', 'Wellbeing', 'Work']
    },
    //checkboxes to select multiple
    day: [{
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }],
    //time will need to increment from 30mins, 1hour, 1hour 30mins, 2hours etc
    // possibly use enum  and have it increment? Then in EJS just print the hours so it's not 
    // a user picking 600 minutes trying to figure out how many hours
    time: {
        type: Number,
        min: 0,
        max: 1400
    },
    recordedGoal: {
        type: Boolean
    }
})

module.exports = mongoose.model('Activity', activitySchema)