import { Router }from "express";
import controllers from '../controllers/index.controller.js'
const router=Router();
router.get('/establecimientos/bares',controllers.rutasBares)
router.get(('/establecimientos/restaurantes'),controllers.rutasRestaurantes)

export default router;