const Activity = require('../models/activity');
const User = require('../models/user');



//? index function
async function index (req, res) {
    const activities = await Activity.find({});
    res.render('activities/today', { title: 'Today at a glance', activities})
    console.log(today)
}

//? show function


//? new activity
function newActivity(req, res){
    res.render('activities/new', { title: 'Add activity', errorMsg: ''})
}

//? create activity
async function create(req, res, next){
    try {
        // convert recordedGoal checkbox of nothing or 'on' to be boolean
        req.body.recordedGoal = !! req.body.recordedGoal;
        const activity = await Activity.create(req.body);
        res.redirect('/activities/new')
    } catch (err) {
        console.log('CREATE ERROR MESSAGE ->', err.message)
        res.render('activities/new')
    }
}

//? edit activity
async function edit(req, res, next){
    try {
        const { id } = req.params
        const activity = await Activity.findById(id)
        res.render('activities/edit', { title: 'Edit'})

    } catch (err) {
        console.log('EDIT ERROR MESSAGE ->', err.message)
    }
}

//? update activity
async function update(req, res, next){
    try {
        
    } catch (err) {
        console.log('UPDATE ERROR MESSAGE ->', err.message)
    }
}

//? delete activity

//? Exports

module.exports = {
    index,
    new: newActivity,
    create,
    update,
    edit
}