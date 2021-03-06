
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { PORT } = require("./config")
const { NotFoundError } = require("./utils/errors")
const authRouter = require("./routes/auth")
const security = require("./middleware/security")
const activityRouter = require('./routes/activity')


const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use(security.extractUserFromJwt)
app.use('/auth', authRouter)
app.use('/activity', activityRouter)

// if endpoint doesn't exist then will send to NotFoundError
app.use((req,res,next) => {
    return next(new NotFoundError())
})

// if anything has reached this point, an error is involved
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message 

    return res.status(status).json({
        error: { message, status }
    })
})


app.listen(PORT, () => {
    console.log("🚀 Server running on port", PORT)
})
