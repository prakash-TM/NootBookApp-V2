import axios from "axios";

const DeleteAllReq=async (deleteAllApi:any)=>{
    const responseData=await axios
    .delete(`http://ec2-13-233-209-155.ap-south-1.compute.amazonaws.com:8000/${deleteAllApi}`)
    return(responseData)
}
export default DeleteAllReq