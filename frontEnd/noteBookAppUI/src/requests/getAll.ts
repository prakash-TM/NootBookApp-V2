import axios from "axios";

const GetAllReq=async (getAllApi:any)=>{
    const responseData=await axios
    .get(`http://13.233.209.155:8000/${getAllApi}`)
    return(responseData)
}
export default GetAllReq