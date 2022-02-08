import axios from "axios";

const GetAllReq=async (getAllApi:any)=>{
    const responseData=await axios
    .get(`http://ec2-3-108-236-18.ap-south-1.compute.amazonaws.com:8000/${getAllApi}`)
    return(responseData)
}
export default GetAllReq