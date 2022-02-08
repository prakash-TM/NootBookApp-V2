import * as Express from "express"
// import {Router} from "express"
// import { Request,Response } from "express"
import { addNewUser,getUser,getSingleUser,removeSingleUser,removeUser,updateSingleUser,updateAllUser } from "./controller"


const router=Express.Router()
router.post("/user",addNewUser)
router.get("/getUser",getUser)
router.get("/getSingleUser",getSingleUser)
router.delete("/removeSingleUser",removeSingleUser)
router.delete("/removeUser",removeUser)
router.put("/updateSingleUser",updateSingleUser)
router.put("/updateAllUser",updateAllUser)


export default router