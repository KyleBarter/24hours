const Activity = require('../models/activity');
const User = require('../models/user');

//? get day function
function getToday(){
    const date = new Date()
    const daysOfWeek =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let today = daysOfWeek[date.getDay()]
    return today
}

//? index function
async function index (req, res) {
    const activities = await Activity.find({});
    res.render('activities/today', { title: 'Today at a glance', activities})

}

//? show function
async function show(req, res, next) {
    try {
        const { id } = req.params
        const activity = await Activity.findById(id)

        for(const key in activity.toObject()){
            console.log(`${key[0].toUpperCase() + key.substring(1)}: ${activity[key]}`)
        }

        res.render('activities/journal', {
            activity: activity.toObject(),
            name: activity.activity
        })
    } catch (err) {
        console.log('SHOW ERROR MESSAGE ->', err.message)
        next()
    }
}

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
        res.redirect('activities/new')
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
        res.render('activities/edit', { title: 'My activities', activity})

    } catch (err) {
        console.log('EDIT ERROR MESSAGE ->', err.message)
        next()
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
async function deleteActivity(req, res, next){
    const activity = await Activity.findOne({ 'activity._id': req.params.id})
}

//? Exports

module.exports = {
    index,
    new: newActivity,
    create,
    update,
    edit,
    delete: deleteActivity,
    getToday,
    show
}