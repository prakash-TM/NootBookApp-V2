import { useState, useEffect } from "react";
import PostReq from "../requests/post";
import GetAllReq from "../requests/getAll";
import GetSingleReq from "../requests/getSingle";
import DeleteSingleReq from "../requests/deleteSingle";
import DeleteAllReq from "../requests/deleteAll";
import LinkIndex from "../DomLinks/LinkIndex";
function User() {
  const [posts, setPosts] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [userName, setUserName] = useState("");
  const [uName, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [deleteWord, setDeleteWord] = useState([]);
  const [deleteRes, setDeleteRes] = useState([]);

  const _handleUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const _handleUname = (e: any) => {
    setUname(e.target.value);
  };
  const _handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const _handleContactNumber = (e: any) => {
    setContactNumber(e.target.value);
  };
  const _handleGender = (e: any) => {
    setGender(e.target.value);
  };

  const _handleNameSearchInp = (e: any) => {
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
      userName: userName,
      name: uName,
      email: email,
      contactNumber: contactNumber,
      gender: gender,
    };
    const postReq = await PostReq(data, postApi);
  };

  //show notes
  const _handleAllDataOutBtn = async () => {
    console.log("inside handle out");
    const getAllApi = "getUser";
    var getAll = await GetAllReq(getAllApi);
    setPosts(getAll.data);
  };

  //get single
  const _handleSingleDataOutBtn = async () => {
    const getSingleApi = "getSingleUser";
    console.log(searchWord);
    const getSingle = await GetSingleReq(searchWord, getSingleApi);
    setSingleData(getSingle.data);
  };

  //delete single
  const _handleDeleteSingleDataBtn = async () => {
    const deleteSingleApi = "removeSingleUser";
    const deleteSingle = await DeleteSingleReq(deleteWord, deleteSingleApi);
    setDeleteRes(deleteSingle.data);
    alert("records was deleted successfully & refresh the once");
  };

  //delete all
  const _handleDeleteAllDataBtn = async () => {
    const deleteAllApi = "removeUser";
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
                    <label htmlFor="title">User Name </label>
                    <input
                      placeholder="Enter user name..."
                      type="text"
                      onChange={_handleUserName}
                    />
                  </li>
                  <li>
                    <label htmlFor="description">Author Name </label>
                    <input
                      placeholder="Enter author name..."
                      className="description"
                      type="text"
                      onChange={_handleUname}
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
                    <label htmlFor="userId">Contact Number </label>
                    <input
                      placeholder="Enter contact number..."
                      type="text"
                      onChange={_handleContactNumber}
                    />
                  </li>
                  <li>
                    <label htmlFor="userId">Gender </label>
                    <input
                      placeholder="Enter gender..."
                      type="text"
                      onChange={_handleGender}
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
                      <label htmlFor="search word">User Name</label>
                      <input
                        placeholder="Enter the user name for search..."
                        type="text"
                        onChange={_handleNameSearchInp}
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
                      <h4>User Name : {item.userName}</h4>
                      <p>Name : {item.name}</p>
                      <p>Email : {item.email}</p>
                      <p>Contact Number : {item.contactNumber}</p>
                      <p>Gender : {item.gender}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {deleteSingleBar ? (
              <div className="delete-single-main-container">
                <ul>
                  <li>
                    <label htmlFor="delete word">User Name</label>
                    <input
                      placeholder="Enter the user name for delete..."
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
                      <h4>User Name : {item.userName}</h4>
                      <p>Name : {item.name}</p>
                      <p>Email : {item.email}</p>
                      <p>Contact Number : {item.contactNumber}</p>
                      <p>Gender : {item.gender}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {/* {handleData(posts)} */}
      </div>
    </>
  );
}

export default User;
