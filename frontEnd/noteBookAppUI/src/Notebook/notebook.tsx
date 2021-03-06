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

  const _handleTitleSearchInp = (e: any) => {
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

  const [creatBar, setCreateBar] = useState(true);
  const [searchBar, setSearchBar] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [deleteSingleBar, setDeleteSingleBar] = useState(false);
  const [deleteAlleBar, setDeleteAllBar] = useState(false);

  const _createNotebookBar = () => {
    setCreateBar(true);
    setSearchBar(false);
    setShowBar(false);
    setDeleteSingleBar(false);
    setDeleteAllBar(false);
  };
  const _searchNotebookBar = () => {
    setCreateBar(false);
    setSearchBar(true);
    setShowBar(false);
    setDeleteSingleBar(false);
    setDeleteAllBar(false);
  };

  const _showNotebookBar = () => {
    setCreateBar(false);
    setSearchBar(false);
    setShowBar(true);
    setDeleteSingleBar(false);
    setDeleteAllBar(false);
  };
  const _deleteSingleNotebookBar = () => {
    setCreateBar(false);
    setSearchBar(false);
    setShowBar(false);
    setDeleteSingleBar(true);
    setDeleteAllBar(false);
  };
  const _deleteAllNotebookBar = () => {
    setCreateBar(false);
    setSearchBar(false);
    setShowBar(false);
    setDeleteSingleBar(false);
    setDeleteAllBar(true);
  };
  return (
    <div className="main-container">
      <div className="domLinkBar-style">
        <LinkIndex />
      </div>
      <div className="noteBookArea-style">
        <div className="operationNavbar-style">
          <p onClick={_createNotebookBar}>Create </p>
          <p onClick={_searchNotebookBar}>Search </p>
          <p onClick={_showNotebookBar}>Show </p>
          <p onClick={_deleteSingleNotebookBar}>Delete Single </p>
          <p onClick={_deleteAllNotebookBar}>Delete All </p>
        </div>
        <div className="showArea-style">
          {creatBar ? (
            <div className="create-area">
              <ul>
                <li>
                  <label htmlFor="title">Title </label>
                  <input
                    placeholder="Enter task title..."
                    type="text"
                    onChange={_handleTitleInp}
                  />
                </li>
                <li>
                  <label htmlFor="description">Description </label>
                  <input
                    placeholder="Enter task description..."
                    className="description"
                    type="text"
                    onChange={_handleDesInp}
                  />
                </li>
                <li>
                  <label htmlFor="userId">UserID </label>
                  <input
                    placeholder="Enter user id..."
                    type="text"
                    onChange={_handleIDInp}
                  />
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
            <div className="search-main-container">
              <div className="search-area">
                <ul>
                  <li>
                    <label htmlFor="search word">Title</label>
                    <input
                      placeholder="Enter the title for search..."
                      type="text"
                      onChange={_handleTitleSearchInp}
                    />
                  </li>
                  <br />
                  <li>
                    <button onClick={_handleSingleDataOutBtn}>Submit</button>
                  </li>
                </ul>
              </div>

              <div className="search-show">
                {singleData.map((item: any, index: any) => (
                  <div key={index}>
                    <h3>Title : {item.title}</h3>
                    <p>Description : {item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {deleteSingleBar ? (
            <div className="delete-single-main-container">
              <ul>
                <li>
                  <label htmlFor="delete word">Title</label>
                  <input
                    placeholder="Enter the title for delete..."
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
          ) : null}
          {deleteAlleBar ? (
            <div className="delete-all-main-container">
              <ul>
                <li>
                  <button onClick={_handleDeleteAllDataBtn}>
                    Delete All Data
                  </button>
                </li>
                <br />
              </ul>
            </div>
          ) : null}

          {showBar ? (
            <div className="show-container">
              <div className="wrap-show">
                {posts.map((item: any, index: any) => (
                  <div className="separate-display" key={index}>
                    <h4>
                      Title :<span> {item.title}</span>
                    </h4>
                    <h4>
                      Description : <span>{item.description}</span>
                    </h4>
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
