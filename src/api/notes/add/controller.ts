import {  notesModel } from "./model";
import { Request,Response } from "express";
const addNewNotes=async(req:Request,res:Response)=>{
    const{ 
        title ,
        authorId ,
        authorName ,
        email ,        
        tags:[{name}],
        place,       
        location:{type,coordinates,required},
        content,
        category,      
        thumbnails:[{path,createdAt,updatedAt,deviceType}],       
        video:{titleV,creditedByV},
        soundClips:{titleS,creditedByS},
        status,
        isActive,
        accessType,
        isPrivate,
        contributors:[{userId,userAccess}],
        noteBookId
    }=req.body


const requestPayload={
    title ,
    authorId ,
    authorName ,
    email ,
    tags:[{name}],
    place,
    location:{type,coordinates,required},
    content,
    category,
    thumbnails:[{path,createdAt,updatedAt,deviceType}],
    video:{titleV,creditedByV},
    soundClips:{titleS,creditedByS},
    status,
    isActive,
    accessType,
    isPrivate,
    contributors:[{userId,userAccess}],
    noteBookId
}
const response=await notesModel.create(requestPayload)
if(!response){
    res.send({message : "Notes is not created"})
}
res.send({message :"Notes created successfully"})
}


const getNotes=async(req:Request,res:Response)=>{
    const response=await notesModel.find({},{__v:0,createdAt:0,updatedAt:0,})
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send(response)
}

const getSingleNotes=async(req:Request,res:Response)=>{
    const response=await notesModel.findOne({title:"iron man"})
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send({response})
}

const removeSingleNotes=async(req:Request,res:Response)=>{
    const response=await notesModel.findOneAndRemove({title:"iron man"})
    if(!response){
        res.send({message:"not able to delete record"})
    }
    res.send({message:"records deleted successfully"})
}

const removeNotes=async(req:Request,res:Response)=>{
    const response=await notesModel.remove()
    if(!response){
        res.send({message:"not able to delete records"})
    }
    res.send({message:"records deleted successfully"})
}

const updateSingleNotes=async(req:Request,res:Response)=>{
    const myQuery={title:"iron man"}
    const response=await notesModel.updateOne(myQuery,{title:"spider man"})
    if(!response){
        res.send({message:"not able to update"})
    }
    res.send({response})
}



const updateAllNotes=async(req:Request,res:Response)=>{
    const response=await notesModel.updateMany({},{title:"iron man"})
    if(!response){
        res.send({message:"not able to update"})
    }
    res.send({response})
}

export{addNewNotes,getNotes,getSingleNotes,removeSingleNotes,removeNotes,updateSingleNotes,updateAllNotes}