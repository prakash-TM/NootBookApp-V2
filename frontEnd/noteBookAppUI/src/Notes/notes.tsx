import { useState, useEffect } from "react";
import "./notes.css";
import PostReq from "../requests/post";
import GetAllReq from "../requests/getAll";
import GetSingleReq from "../requests/getSingle";
import DeleteSingleReq from "../requests/deleteSingle";
import DeleteAllReq from "../requests/deleteAll";
import LinkIndex from "../DomLinks/LinkIndex";
function Notes() {
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [singleData, setSingleData] = useState([]);
  const [title, setTitle] = useState("");
  const [aID, setAId] = useState("");
  const [aName, setAname] = useState("");
  const [email, setEmail] = useState("");
  const [tName, setTname] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [deleteWord, setDeleteWord] = useState([]);
  const [deleteRes, setDeleteRes] = useState([]);

  const _handleTitleInp = (e: any) => {
    setTitle(e.target.value);
  };
  const _handleAId = (e: any) => {
    setAId(e.target.value);
  };
  const _handleAName = (e: any) => {
    setAname(e.target.value);
  };
  const _handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const _handleTName = (e: any) => {
    setTname(e.target.value);
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

  //create
  const _handlePost = async (e: any) => {
    const postApi = "notes";
    const data = {
      title: title,
      authorId: aID,
      authorName: aName,
      email: email,
      // tags:[{tName}],
    };
    const postReq = await PostReq(data, postApi);
  };

  //show notes
  const _handleAllDataOutBtn = async () => {
    console.log("inside handle out");
    const getAllApi = "getNotes";
    var getAll = await GetAllReq(getAllApi);
    setPosts(getAll.data);
  };

  //get single
  const _handleSingleDataOutBtn = async () => {
    const getSingleApi = "getSingleNotes";
    console.log(searchWord);
    const getSingle = await GetSingleReq(searchWord, getSingleApi);
    setSingleData(getSingle.data);
  };

  //delete single
  const _handleDeleteSingleDataBtn = async () => {
    const deleteSingleApi = "removeSingleNotes";
    const deleteSingle = await DeleteSingleReq(deleteWord, deleteSingleApi);
    setDeleteRes(deleteSingle.data);
    alert("records was deleted successfully & refresh the once");
  };

  //delete all
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
    <>
      <div className="main-container">
        <div className="domLinkBar-style">
          <LinkIndex />
        </div>
        <div className="notesArea-style">
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
                    <label htmlFor="description">Author ID </label>
                    <input
                      placeholder="Enter author ID..."
                      className="description"
                      type="text"
                      onChange={_handleAId}
                    />
                  </li>
                  <li>
                    <label htmlFor="userId">Author Name </label>
                    <input
                      placeholder="Enter author name..."
                      type="text"
                      onChange={_handleAName}
                    />
                  </li>
                  <li>
                    <label htmlFor="userId">Email </label>
                    <input
                      placeholder="Enter email address..."
                      type="text"
                      onChange={_handleEmail}
                    />
                  </li>
                  <li>
                    <label htmlFor="userId">Tag Name </label>
                    <input
                      placeholder="Enter tag name..."
                      type="text"
                      onChange={_handleTName}
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
                      <p>authorId : {item.authorId}</p>
                      <p>authorName : {item.authorName}</p>
                      <p>email : {item.email}</p>
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
                      <h3>Title : {item.title}</h3>
                      <p>Author Id : {item.authorId}</p>
                      <p>Author Name : {item.authorName}</p>
                      <p>Email : {item.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {/* {handleData(posts)} */}
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