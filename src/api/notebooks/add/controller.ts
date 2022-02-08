import { Request, Response } from "express";
import { notesModel } from "../../notes/add/model";
import { noteBookModel } from "./model";
/**
 * Add / Create a new Notebbok
 */

/**
 *
 * @param _req
 * @param res
 *
 * Step 1 - Obtain payload from the request / Obtaning a data from the request
 * Step 2 - Prepare request for creating a notebook / What we need to insert in the database
 * Step 3 - Create a new Notebook
 * Step 3.1 - Handle if it's getting failed
 * Step 4 - Return success response
 */

// Defining a routes
const addNewNotebook = async(req: Request, res: Response) => {
    const { title, description, userId } = req.body;

    // To store in the db
    const requestPayload = {
        title,
        description,
        userId,
    };

    // Calling the noteBookModel
    const response = await noteBookModel.create(requestPayload);
    if (!response) {
        res.send({ message: "Notebook is not created" });
    }
    res.send({ message: "Notebook created successfully" });
};

//find all
const getNotebook=async(req:Request,res:Response)=>{
    const response=await noteBookModel.find({},{userId:0,_id:0,createdAt:0,updatedAt:0,__v:0})
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send(response)
}

// find single 
const getSingleNotebook=async(req:Request,res:Response)=>{
    const{title}=req.query
    const search={title}
    const response=await noteBookModel.findOne(search)
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send([response])
}

//remove single

const removeSingleNotebook=async(req:Request,res:Response)=>{
    const{title}=req.query
    const search={title}
    const response=await noteBookModel.findOneAndRemove(search)
    if(!response){
        res.send({message:"not able to delete record"})
    }
    res.send({message:"records deleted successfully"})
}

//remove all
const removeNotebook=async(req:Request,res:Response)=>{
    const response=await noteBookModel.remove()
    if(!response){
        res.send({message:"not able to delete records"})
    }
    res.send({message:"records deleted successfully"})
}

// update single

const updateSingleNotebook=async(req:Request,res:Response)=>{
    const myQuery={title:"fixtion"}
    const response=await noteBookModel.updateOne(myQuery,{title:"thriller"})
    if(!response){
        res.send({message:"not able to update"})
    }
    res.send(response)
}

// update all 

const updateAllNotebook=async(req:Request,res:Response)=>{
    const response=await noteBookModel.updateMany({},{title:"fixtion"})
    if(!response){
        res.send({message:"not able to update"})
    }
    res.send(response)
}

export{addNewNotebook,getNotebook,getSingleNotebook,removeSingleNotebook,removeNotebook,updateSingleNotebook,updateAllNotebook}