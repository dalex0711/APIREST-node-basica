import express from 'express';
import employeessRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'



const app = express();

app.use(express.json())

app.use(employeessRoutes)
app.use(indexRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        message : 'enpoint not found'
    })
})

export default app;