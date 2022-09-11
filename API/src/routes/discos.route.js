import { Router } from "express";

import {
    getDiscos,
    createNewDisco,
    getDiscoById,
    getDiscoByDVD,
    deleteDiscoById,
    getTotalCanciones,
    updateDiscoById,
} from "../controllers/discos.controller";

const router = Router();

router.get("/discos", getDiscos);
router.get("/discos/count", getTotalCanciones);
router.get("/discos/:id", getDiscoById);
router.get("/discos/dvd/:dvd", getDiscoByDVD);
router.post("/discos", createNewDisco);
router.delete("/discos/:id", deleteDiscoById);
router.put("/discos/:id", updateDiscoById);

export default router;