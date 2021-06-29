
const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.post("/login", requireAuthenticatedUser, async function (req, res, next) {
  try {
    const user = await User.login(req.body)
    const token = createUserJwt(user)
    return res.status(200).json({ user, token })
  } catch (err) {
    next(err)
  }
})

router.post("/register", async function (req, res, next) {
  try {
    const user = await User.register({...req.body, isAdmin: false})
    const token = createUserJwt(user)
    return res.status(201).json({ user, token })
  } catch (err) {
    next(err)
  }
})

module.exports = router