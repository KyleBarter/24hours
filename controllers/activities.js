const Activity = require('../models/activity');
const User = require('../models/user');

//? get day function
function getToday(){
    const date = new Date()
    const daysOfWeek =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let today = daysOfWeek[date.getDay()]
    return today
}

// (req, res) => {
//     //Check for specific day
//     if (day) {
//       Activity.find({ days: day }, (err, activities) => {
//         if (err) {
//           res.status(500).json({ error: 'An error occured while fetching activities'})
//         } else {
//           res.json(activities)
//         }
//       });
//     } else {
//       // No specific day provided
//       Activity.find({}, (err, activities) => {
//         if (err) {
//           res.status(500).json({ error: 'An error occured while fetching activities'})
//         } else {
//           res.json(activities)
//         }
//       })
//     }
//   }


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
        const { id } = req.params
        const activityDocument = await Activity.findById(id)

        Object.assign(activityDocument, body)

        await activityDocument.save()
        res.render('activities/journal', { title: activityDocument.activity, activity: activityDocument.toObject() })
    } catch (err) {
        console.log('UPDATE ERROR MESSAGE ->', err.message)
    }
}

//? delete activity
async function deleteActivity(req, res, next){
    const activity = await Activity.findOne({ 'activity._id': req.params.id})
}

//? showAll activity
async function showAll(req, res, next){
    res.render('activities/all', { title: 'All activities'})
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
    show,
    showAll
}