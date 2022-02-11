import axios from "axios";

const DeleteAllReq=async (deleteAllApi:any)=>{
    const responseData=await axios
    .delete(`http://127.0.0.1:8000/${deleteAllApi}`)
    return(responseData)
}
export default DeleteAllReq