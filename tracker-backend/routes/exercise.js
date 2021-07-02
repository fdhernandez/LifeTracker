/*const express = require("express")
const Exercise = require("../models/exercise")
const security = require("../middleware/security")
const router = express.Router()

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const exercises = await Exercise.listExerciseForUser(user)
    return res.status(200).json({ exercises })
  } catch (err) {
    next(err)
  }
})

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const exercise = await Exercise.createExercise({ exercise: req.body, user })
    return res.status(201).json({ exercise })
  } catch (err) {
    next(err)
  }
})

module.exports = router
*/