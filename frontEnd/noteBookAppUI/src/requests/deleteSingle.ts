import axios from "axios";

const DeleteSingleReq=async (deleteWord:any,deleteSingleApi:any)=>{
    const responseData=await axios
    .delete(`http://ec2-3-108-236-18.ap-south-1.compute.amazonaws.com:8000/${deleteSingleApi}`, { params: { title: deleteWord }})
    return(responseData)
}
export default DeleteSingleReq