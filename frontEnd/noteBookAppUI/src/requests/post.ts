import axios from "axios";
const PostReq=async (data:any,postApi:any)=>{
    await axios
    .post(`http://127.0.0.1:8000/${postApi}`, data)
}

export default PostReq