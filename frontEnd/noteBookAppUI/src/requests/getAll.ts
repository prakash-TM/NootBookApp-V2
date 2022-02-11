import axios from "axios";

const GetAllReq=async (getAllApi:any)=>{
    const responseData=await axios
    .get(`http://127.0.0.1:8000/${getAllApi}`)
    return(responseData)
}
export default GetAllReq