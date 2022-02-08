import * as Express from "express";
//import { Router } from "express"; // Not required
import { addNewNotebook,getNotebook,getSingleNotebook,removeSingleNotebook,removeNotebook,updateSingleNotebook,updateAllNotebook } from "./controller";

// Initializing the router
//const router: Router = Express.Router();
const router = Express.Router();

router.post("/notebook", addNewNotebook);
router.get("/getNotebook",getNotebook)
router.get("/getSingleNotebook",getSingleNotebook)
router.delete("/removeSingleNotebook",removeSingleNotebook)
router.delete("/removeNotebook",removeNotebook)
router.put("/updateSingleNotebook",updateSingleNotebook)
router.put("/updateAllNotebook",updateAllNotebook)

export default router;