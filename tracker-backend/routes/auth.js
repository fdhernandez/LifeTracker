
const express = require("express")
const User = require("../models/user")
const router = express.Router()
const { requireAuthenticatedUser } = require("../middleware/security")
const { createUserJwt } = require("../utils/tokens")

router.post("/login", requireAuthenticatedUser, async  (req, res, next) => {
  try {
    const user = await User.login(req.body)
    const token = createUserJwt(user)
    return res.status(200).json({ user, token })
  } catch (err) {
    next(err)
  }
})

router.post("/register", async  (req, res, next) => {
  try {
    const user = await User.register({...req.body, isAdmin: false})
    const token = createUserJwt(user)
    return res.status(201).json({ user, token })
  } catch (err) {
    next(err)
  }
})

router.get("/me", requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { username } = res.locals.user
    const user = await User.fetchUserByUsername(username)
    return res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

module.exports = router