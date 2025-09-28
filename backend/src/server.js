import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const PORT=process.env.PORT || 3000
import authroutes from './routes/auth.route.js'
import messageroutes from './routes/message.route.js'
app.use("/api/auth", authroutes)
app.use("/api/messages", messageroutes)


app.listen(PORT , () => {
    console.log(`Example app listening on port: ${PORT}`);
})

