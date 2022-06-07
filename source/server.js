import express from 'express'
import './config.js'
import UserRouter from './routers/index.js'

import database from './db/index.js'
// import mockData from './mock.js'

const PORT = process.env.PORT || 6000

!async function () {
    const app = express()

    
    const db = await database()
    // await mockData({ sequelize: db })
    
    app.use(express.json())
    app.use((req, res, next) => {
        req.models = db.models
        next()
    })
    
    app.use(UserRouter)
    
    app.listen(PORT, () => console.log('server ready at *' + PORT))
}()