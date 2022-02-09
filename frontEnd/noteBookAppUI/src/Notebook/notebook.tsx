import "./notebook.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PostReq from "../requests/post";
import GetAllReq from "../requests/getAll";
import GetSingleReq from "../requests/getSingle";
import DeleteSingleReq from "../requests/deleteSingle";
import DeleteAllReq from "../requests/deleteAll";
import LinkIndex from "../DomLinks/LinkIndex";

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
  const _handlePost = async (e: any) => {
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

  const [creatBar, setCreateBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [showBar, setShowBar] = useState(false);

  const _createNotebookBar = () => {
    setCreateBar(true);
    setSearchBar(false);
    setShowBar(false);
  };
  const _searchNotebookBar = () => {
    setCreateBar(false);
    setSearchBar(true);
    setShowBar(false);
  };

  const _showNotebookBar = () => {
    setCreateBar(false);
    setSearchBar(false);
    setShowBar(true);
  };

  return (
    <div className="main-container">
      <div className="domLinkBar-style">
        <LinkIndex />
      </div>
      <div className="noteBookArea-style">
        <div className="operationNavbar-style">
          <p onClick={_createNotebookBar}>Create Notebook</p>
          <p onClick={_searchNotebookBar}>Search Notebook</p>
          <p onClick={_showNotebookBar}>Show Notebook</p>
        </div>
        <div className="showArea-style">
        {creatBar ? (
          <div>
            <ul>
              <h3>Add Data</h3>
              <li>
                <label htmlFor="title">Title </label>
                <input type="text" onChange={_handleTitleInp} />
              </li>
              <li>
                <label htmlFor="description">Description </label>
                <input type="text" onChange={_handleDesInp} />
              </li>
              <li>
                <label htmlFor="userId">UserID </label>
                <input type="text" onChange={_handleIDInp} />
              </li>
              <br />

              <li>
                <button onClick={_handlePost} type="submit">
                  Submit
                </button>
                {/* <button onClick={_handleInpEmpty}>Inputs Empty</button> */}
              </li>
            </ul>
          </div>
        ) : null}

        {searchBar ? (
          <div>
            <div>
              <ul>
                <h3>Search Data</h3>
                <li>
                  <label htmlFor="search word">
                    Enter the title for search
                  </label>
                  <input type="text" onChange={_handleDeleteTitleSearchInp} />
                </li>
                <br />
                <li>
                  <button onClick={_handleSingleDataOutBtn}>
                    Get single data
                  </button>
                </li>
              </ul>
            </div>

            <div>
              {singleData.map((item: any, index: any) => (
                <div key={index}>
                  <h3>Title : {item.title}</h3>
                  <p>Description : {item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div>
          <ul>
            <h3>Delete Single Data</h3>
            <li>
              <label htmlFor="delete word">Enter the title for delete</label>
              <input type="text" onChange={_handleDeleteInp} />
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
          <ul>
            <h3>Delete All Data</h3>
            <li>
              <button onClick={_handleDeleteAllDataBtn}>Delete All Data</button>
            </li>
            <br />
          </ul>
        </div>
        {showBar ? (
          <div>
            <div>
              <h3>--Display Area--</h3>
              <button onClick={_handleAllDataOutBtn}>Get All Data</button>
            </div>

            <div>
              {posts.map((item: any, index: any) => (
                <div key={index}>
                  <h3>Title : {item.title}</h3>
                  <p>Description : {item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        </div>
      </div>
      {/* {handleData(posts)} */}
    </div>
  );

  }
export default Notebook;
