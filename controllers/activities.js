const Activity = require('../models/activity');
const User = require('../models/user');

//? get day function
function getDaysActivities(activities, day, user){
    // end function if no user logged in
    if (!user) {
        return 
    }
    // filter activities to specific user
    console.log('activities', activities)
    activities = activities.filter(activity => user._id.equals(activity.user))
    if (!day) {
        const date = new Date()
        const daysOfWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        day = daysOfWeek[date.getDay()]
    } 
    return activities.filter(activity => {
        return activity.day.includes(day)
    })
}

//? show recorded goals on today only
const activityArray = Object.values(Activity)
const trueGoals = activityArray.filter(activity => Activity.recordedGoal === true)

//? index function
async function index (req, res) {
    const activities = await Activity.find({});
    res.render('activities/today', { title: 'Today at a glance', activities: getDaysActivities(activities, null, req.user)})
}

//? show function
async function show(req, res, next) {
    try {
        const { id } = req.params
        const activity = await Activity.findById(id)

        for(const key in activity.toObject()){
            console.log(`${key[0].toUpperCase() + key.substring(1)}: ${activity[key]}`)
        }

        res.render('activities/journal', { title: activity.activity, activity})

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
        const activity = await Activity.create({...req.body, user: req.user._id});
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
        res.render('activities/edit', { title: `Edit ${activity.activity}`, activity})

    } catch (err) {
        console.log('EDIT ERROR MESSAGE ->', err.message)
        next()
    }
}

//? update activity
async function update(req, res, next){
    try {
        const { id } = req.params
        const activityDocument = await Activity.findById(id)

        Object.assign(activityDocument, req.body)

        await activityDocument.save()
        res.render('activities/journal', { title: activityDocument.activity, activity: activityDocument.toObject() })
    } catch (err) {
        console.log('UPDATE ERROR MESSAGE ->', err.message)
    }
}

//? delete activity
async function deleteActivity(req, res, next){
    try {
        const activity = await Activity.findById(req.params.id)
        const { activityInfoId } = req.body 
        activity.activityInfo.pull(activityInfoId)
        await activity.save()
        res.redirect('activities/journal')
    } catch (err) {
        console.log('DELETE ERROR MESSAGE ->', err.message)
    }
}

//? showAll activity
async function showAll(req, res, next){
    console.log(req.query)
    const activities = await Activity.find({});
    res.render('activities/all', { title: 'All activities', activities: getDaysActivities(activities, req.query.day, req.user), day: req.query.day})
}


//? Exports

module.exports = {
    index,
    new: newActivity,
    create,
    update,
    edit,
    delete: deleteActivity,
    getDaysActivities,
    show,
    showAll
}