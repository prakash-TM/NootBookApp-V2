import { useState, useEffect } from "react";
import PostReq from "../requests/post";
import GetAllReq from "../requests/getAll";
import GetSingleReq from "../requests/getSingle";
import DeleteSingleReq from "../requests/deleteSingle";
import LinkIndex from "../DomLinks/LinkIndex"
function User() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    _handleAllDataOutBtn();
  });

  const _handleAllDataOutBtn = async () => {
    console.log("inside handle out");
    const getAllApi = "getUser";
    var getAll = await GetAllReq(getAllApi);
    setPosts(getAll.data);
  };

  return (

    <>
    <LinkIndex />
      <div >
        <div >
          <h3>--Display Area--</h3>
          <button onClick={_handleAllDataOutBtn}>Get All Out</button>
        </div>

        <div >
          {posts.map((item: any, index: any) => (
            <div key={index}>
              <li>User Name : {item.userName}</li>
              <li>Name : {item.name}</li>
              <li>Email : {item.email}</li>
              <li>Job Details : </li>
              <li>Title : {item.jobDetails.title}</li>
              <li>Designation : {item.jobDetails.designation}</li>
              <li>Organization : {item.jobDetails.organization}</li>
              {/* <li>
                {item.jobDetails.map((item: any, index: any) => {
                  return(
                  <div style={{ listStyleType: "none" }} key={index}>
                    <ul>
                      <li>{item.title}</li>
                      <li>{item.designation}</li>
                      <li>{item.organization}</li>
                    </ul>
                  </div>
                  );
                })}
              </li> */}
              <li>Contact Number : {item.contactNumber}</li>
              <li>Date of Birth : {item.dob}</li>
              <li>Gender : {item.gender}</li>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default User;
