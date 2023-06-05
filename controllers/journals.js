const activity = require('../models/activity');
const Activity = require('../models/activity');
const User = require('../models/user');

async function create(req, res) {
    const activity = await Activity.findById(req.params.id)
    req.body.user = req.user._id;
    activity.journals.push(req.body);
    try {
        await activity.save()
    } catch (err) {
        console.log('JOURNAL CREATE ERROR -> ', err)
    }
    res.redirect(`/activities/${activity._id}/journal`)
}

module.exports= {
    create
}