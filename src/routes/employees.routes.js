import {Router} from 'express'; //Modulo de express -> Agrupar las rutas
import { getEmployees, crearEmployees, actualizarEmployees, 
         deleteEmployees,getEmployee } from '../controllers/employees.controller.js'; 

const router = Router();

// Obtener todos los empleados.
router.get('/employees', getEmployees);

//Obtener un empleado en especifico.
router.get('/employees/:id', getEmployee);

//Crear un empleado
router.post('/employees', crearEmployees);

//Eliminar un empleado
router.delete('/employees/:id', deleteEmployees);

//Actualizar 
router.patch('/employees/:id', actualizarEmployees );




router.get('/x',  async (req,res) => {
    const [result]  = await pool.query('SELECT 1+1 AS result')
    res.json(result[0])})



export default router