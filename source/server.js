import express from 'express'
import './config.js'
import routers from './routers/index.js'

import database from './db/index.js'
// import mockData from './db/mock.js'

const PORT = process.env.PORT || 5000

!async function () {
    const app = express()

    
    const db = await database()
    // await mockData({ sequelize: db })
    
    app.use(express.json())
    app.use((req, res, next) => {
        req.models = db.models

        next()
    })
    
    app.use(routers.userRouter)
    app.use(routers.productRouter)
    
    app.listen(PORT, () => console.log('server ready at *' + PORT))
}()