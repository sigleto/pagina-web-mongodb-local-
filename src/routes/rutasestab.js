import { Router }from "express";

const router=Router();
router.get('/establecimientos/bares',(req,res)=>res.render('partials/establecimientos/bares'))
router.get(('/establecimientos/restaurantes'),(req,res)=>res.render('partials/establecimientos/restaurantes'))

export default router;