import axios from "axios";

const DeleteAllReq=async (deleteAllApi:any)=>{
    const responseData=await axios
    .delete(`http://ec2-3-108-236-18.ap-south-1.compute.amazonaws.com:8000/${deleteAllApi}`)
    return(responseData)
}
export default DeleteAllReq