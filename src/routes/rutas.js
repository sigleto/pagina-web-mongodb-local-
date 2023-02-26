
import express from "express";

const router= express.Router();
import  controllers from '../controllers/index.controller.js'



router.get('/',controllers.principal)
router.get('/establecimientos',controllers.establecimiento)
router.get('/contacto',controllers.getContacto)
router.post('/contacto',controllers.postContacto)
 


export default router
