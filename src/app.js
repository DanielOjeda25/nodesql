import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import express from 'express'
import { PORT } from "./config.js";
const app = express()
// esto es para que al backend llegue todo en formato json
app.use(express.json())
// Aqui tengo todas las rutas HTTP
app.use('/api', employeesRoutes)

//middleware
app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not found'
  })
})
// Aqui estaran las rutas de la db
app.use(indexRoutes)


export default app