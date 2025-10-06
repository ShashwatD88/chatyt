import express from 'express'
import path from 'path'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const __dirname = path.resolve()
const PORT=process.env.PORT || 3000
app.use(express.json())
import authroutes from './routes/auth.route.js'
import messageroutes from './routes/message.route.js'
import { connectDB } from './lib/db.js' 
app.use("/api/auth", authroutes)
app.use("/api/messages", messageroutes)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/ff/dist')))
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/ff/dist/index.html'));
    })
}
app.listen(PORT , () => {
    console.log(`Example app listening on port: ${PORT}`);
    connectDB()
})

