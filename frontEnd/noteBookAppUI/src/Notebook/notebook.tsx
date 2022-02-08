import "./notebook.css";
import { useState, useEffect } from "react";
import PostReq from "../requests/post";
import GetAllReq from "../requests/getAll";
import GetSingleReq from "../requests/getSingle";
import DeleteSingleReq from "../requests/deleteSingle";
import DeleteAllReq from "../requests/deleteAll";

function Notebook() {
  const [posts, setPosts] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [id, setID] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [deleteWord, setDeleteWord] = useState([]);
  const [deleteRes, setDeleteRes] = useState([]);

  const _handleTitleInp = (e: any) => {
    setTitle(e.target.value);
  };
  const _handleDesInp = (e: any) => {
    setDes(e.target.value);
  };
  const _handleIDInp = (e: any) => {
    setID(e.target.value);
  };

  const _handleDeleteTitleSearchInp = (e: any) => {
    setSearchWord(e.target.value);
  };
  const _handleDeleteInp = (e: any) => {
    setDeleteWord(e.target.value);
  };

  useEffect(() => {
    _handleAllDataOutBtn();
  });

  //Adding Info to DB
  const _handlePost = async () => {
    const postApi = "notebook";
    const data = {
      title: title,
      description: des,
      userId: id,
    };
    const postReq = await PostReq(data, postApi);
    // axios
    //   .post("http://ec2-13-127-246-39.ap-south-1.compute.amazonaws.com:8000/notebook", data)
    //   .then((res) => {
    //     console.log(res.data);
    //     _handleOut()
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // alert("record is updated successfully & refresh the once");
  };

  // Get all data from DB
  const _handleAllDataOutBtn = async () => {
    const getAllApi = "getNotebook";
    var getAll = await GetAllReq(getAllApi);
    setPosts(getAll.data);
  };
  // Get single data from DB
  const _handleSingleDataOutBtn = async () => {
    const getSingleApi = "getSingleNotebook";
    const getSingle = await GetSingleReq(searchWord, getSingleApi);
    setSingleData(getSingle.data);
  };
  // Delete Single data in DB
  const _handleDeleteSingleDataBtn = async () => {
    const deleteSingleApi = "removeSingleNotebook";
    const deleteSingle = await DeleteSingleReq(deleteWord, deleteSingleApi);
    setDeleteRes(deleteSingle.data);
    alert("records was deleted successfully & refresh the once");
  };
  // Delete All data in DB
  const _handleDeleteAllDataBtn = async () => {
    const deleteAllApi = "removeNotebook";
    const deleteAll = await DeleteAllReq(deleteAllApi);
    alert("records was deleted successfully & refresh the once");
  };

  return (
    <div className="bg-color">
      <div className="header-sty">
        <h2>Notebook App</h2>
      </div>
      <div>
        <ul className="unOrder-style">
          <h3>Add Data</h3>
          <li>
            <label htmlFor="title">Title </label>
            <input
              style={{ marginLeft: "51px" }}
              type="text"
              onChange={_handleTitleInp}
            />
          </li>
          <li>
            <label htmlFor="description">Description </label>
            <input type="text" onChange={_handleDesInp} />
          </li>
          <li>
            <label htmlFor="userId">UserID </label>
            <input
              style={{ marginLeft: "33px" }}
              type="text"
              onChange={_handleIDInp}
            />
          </li>
          <br />
          <li>
            <button onClick={_handlePost}>Submit</button>
          </li>
        </ul>
      </div>
      <br />
      <div className="singleData-flex">
        <div>
          <ul className="unOrder-style">
            <h3>Search Data</h3>
            <li>
              <label htmlFor="search word">Enter the title for search</label>
              <input
                style={{ marginLeft: "20px" }}
                type="text"
                onChange={_handleDeleteTitleSearchInp}
              />
            </li>
            <br />
            <li>
              <button onClick={_handleSingleDataOutBtn}>Get single data</button>
            </li>
          </ul>
        </div>

        <div className="singleData-box">
          {singleData.map((item: any, index: any) => (
            <div style={{ padding: "0 15px" }} key={index}>
              <h3>Title : {item.title}</h3>
              <p style={{ paddingLeft: "20px" }}>
                Description : {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ul className="unOrder-style">
          <h3>Delete Single Data</h3>
          <li>
            <label htmlFor="delete word">Enter the title for delete</label>
            <input
              style={{ marginLeft: "22px" }}
              type="text"
              onChange={_handleDeleteInp}
            />
          </li>
          <br />
          <li>
            <button onClick={_handleDeleteSingleDataBtn}>
              Delete Single Data
            </button>
          </li>
        </ul>
      </div>
      <div>
        <ul className="unOrder-style">
          <h3>Delete All Data</h3>
          <li>
            <button onClick={_handleDeleteAllDataBtn}>Delete All Data</button>
          </li>
          <br />
        </ul>
      </div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h3>--Display Area--</h3>
          <button onClick={_handleAllDataOutBtn}>Get All Data</button>
        </div>

        <div className="posts-box">
          {posts.map((item: any, index: any) => (
            <div key={index}>
              <h3>Title : {item.title}</h3>
              <p style={{ paddingLeft: "30px" }}>
                Description : {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* {handleData(posts)} */}
    </div>
  );
}

export default Notebook;
