import axios from "axios";
const PostReq=async (data:any,postApi:any)=>{
    await axios
    .post(`http://ec2-52-66-244-234.ap-south-1.compute.amazonaws.com:8000/${postApi}`, data)
}

export default PostReq