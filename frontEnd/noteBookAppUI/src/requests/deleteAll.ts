import axios from "axios";

const DeleteAllReq=async (deleteAllApi:any)=>{
    const responseData=await axios
    .delete(`http://13.233.209.155:8000/${deleteAllApi}`)
    return(responseData)
}
export default DeleteAllReq