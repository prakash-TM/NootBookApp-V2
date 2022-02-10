import axios from "axios";

const DeleteSingleReq=async (deleteWord:any,deleteSingleApi:any)=>{
    const responseData=await axios
    .delete(`http://13.233.209.155:8000/${deleteSingleApi}`, { params: { title: deleteWord }})
    return(responseData)
}
export default DeleteSingleReq