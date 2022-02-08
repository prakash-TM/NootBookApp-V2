import * as Express from "express"
// import { Router } from "express"
import { addNewNotes,getNotes,getSingleNotes,removeSingleNotes,removeNotes ,updateSingleNotes,updateAllNotes} from "./controller"


const router=Express.Router()
router.post("/notes",addNewNotes)
router.get("/getNotes",getNotes)
router.get("/getSingleNotes",getSingleNotes)
router.delete("/removeSingleNotes",removeSingleNotes)
router.delete("/removeNotes",removeNotes)
router.put("/updateSingleNotes",updateSingleNotes)
router.put("/updateAllNotes",updateAllNotes)

export default router