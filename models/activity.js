const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const activitySchema = new Schema ({
    activity: String,
    activityType: {
        type: String,
        enum: ['Cooking', 'Exercise', 'Gardening', 'Hobbies', 'Reading', 'Religious practice', 'Self care', 'Sleep', 'Socialising', 'Studying', 'Wellbeing', 'Work']
    },
    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    time: {
        type: Number
    }
})