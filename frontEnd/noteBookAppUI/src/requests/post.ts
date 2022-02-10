import axios from "axios";
const PostReq=async (data:any,postApi:any)=>{
    await axios
    .post(`http://13.233.209.155:8000/${postApi}`, data)
}

export default PostReq