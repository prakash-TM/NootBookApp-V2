import { useState, useEffect } from "react";
import PostReq from "../requests/post";
import GetAllReq from "../requests/getAll";
import GetSingleReq from "../requests/getSingle";
import DeleteSingleReq from "../requests/deleteSingle";

function Notes() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleData, setSingleData] = useState([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [id, setID] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [deleteWord, setDeleteWord] = useState([]);
  const [deleteRes, setDeleteRes] = useState([]);

  useEffect(() => {
    _handleAllDataOutBtn();
  });

  const _handleAllDataOutBtn = async () => {
    console.log("inside handle out");
    const getAllApi = "getNotes";
    var getAll = await GetAllReq(getAllApi);
    setPosts(getAll.data);
  };
  // useEffect(() => {
  //   axios("http://ec2-3-111-52-204.ap-south-1.compute.amazonaws.com:8000/getNotes")
  //     .then((res) => {
  //       setLoading(false);
  //       if (res.data) {
  //         console.log(res.data);
  //         setPosts(res.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      <div style={{backgroundColor:"aqua"}}>
        <div style={{ textAlign: "center" }}>
          <h3>--Display Area--</h3>
          <button onClick={_handleAllDataOutBtn}>Get All Out</button>
        </div>

        <div className="posts-box">
          {posts.map((item: any, index: any) => (
            <div style={{ listStyleType: "none" }} key={index}>
              <li>
                <h3>Title : {item.title}</h3>
              </li>
              <li>Author Id : {item.authorId}</li>
              <li>Author Name : {item.authorName}</li>
              <li>Email : {item.email}</li>
              <li>
                <ul>
                  {item.tags.map((item: any, index: any) => {
                    console.log({ item });
                    return (
                      <div style={{ listStyleType: "none" }} key={index}>
                        <li>Tag : {item.name}</li>
                      </div>
                    );
                  })}
                </ul>
              </li>
              <li>Place : {item.place}</li>
              <li>Content : {item.content}</li>
              <li>Category : {item.category}</li>
              <li>Status : {item.status}</li>
              <li></li>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        {loading
          ? "Loading"
          : posts &&
            posts.length && (
              <ul>
                {posts.map((item: any, index: any) => (
                  <div key={index}>
                    <li>title : {item.title}</li>
                    <li>authorId : {item.authorId}</li>
                    <li>authorName : {item.authorName}</li>
                    <li>email : {item.email}</li>
                    <li>
                        <ul>
                      {item.tags.map((item: any, index: any) => {
                          console.log({item})
                          return(
                        <div key={index}>
                          <li>{item.name}</li>
                        </div>
                          )
                      })}
                      </ul>
                    </li>
                    <li>place : {item.place}</li>
                    <li>content : {item.content}</li>
                    <li>category : {item.category}</li>
                    <li>status : {item.status}</li>
                    <li></li>
                  </div>
                ))}
              </ul>
            )}
      </div> */}
    </>
  );
}

export default Notes;
