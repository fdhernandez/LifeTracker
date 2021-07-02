const express = require('express')
const router = express.Router()
const { requireAuthenticatedUser } = require('../middleware/security')

const Activity =  require('../models/activity')


router.get('/exercises/total', requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const totalTime = await Activity.listTotalExerciseTime({ user })
    return res.status(201).json( totalTime )
  } catch (err) {
    next(err)
  }
})

router.get('/exercises', requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const listExercises = await Activity.listExercises({ user })
    return res.status(201).json({ listExercises })
  } catch (err) {
    next(err)
  }
})

router.post('/exercise', requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const exercise = req.body.exercise
    const newExercise = await Activity.createExercise({ exercise, user })
    return res.status(201).json({ newExercise })
  } catch (err) {
    next(err)
  }
})




module.exports = router