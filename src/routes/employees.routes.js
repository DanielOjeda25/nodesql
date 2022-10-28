import { Router } from 'express'
import { getEmployees, creatEmployess, updateEmployee, deleteEmployees, getEmployee , deleteEmployee} from '../controllers/employees.controllers.js'
const router = Router()
// rutas del servidos
router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)

router.post('/employees', creatEmployess)

router.patch('/employees/:id', updateEmployee)

router.delete('/employees', deleteEmployees)
router.delete('/employees/:id', deleteEmployee)

export default router
