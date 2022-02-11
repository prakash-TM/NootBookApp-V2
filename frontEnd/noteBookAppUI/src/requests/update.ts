import axios from "axios";

const UpdateReq=async (searchWord:any,getSingleApi:any,replacingJson:any)=>{
    // console.log({searchWord})
    // console.log({getSingleApi})
    // console.log({replacingJson})
    const responseData=await axios
    .put(`http://127.0.0.1:8000/${getSingleApi}`, { params: { title: searchWord,update:replacingJson } })
    console.log(responseData)
    return(responseData)
}
export default UpdateReq

// ,updateData:replacingJson