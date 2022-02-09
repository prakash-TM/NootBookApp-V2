import axios from "axios";

const DeleteAllReq=async (deleteAllApi:any)=>{
    const responseData=await axios
    .delete(`http://ec2-52-66-244-234.ap-south-1.compute.amazonaws.com:8000/${deleteAllApi}`)
    return(responseData)
}
export default DeleteAllReq