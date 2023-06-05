const express = require('express');
const router = express.Router();
const passport = require('passport');
const journalsCtrl = require('../controllers/journals')


//? Journal routers


router.post('/activities/:id/journal', journalsCtrl.create)

module.exports = router;