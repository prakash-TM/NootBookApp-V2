import { Link } from "react-router-dom";
import "./LinkIndex.css";
const LinkIndex = () => {
  return (
    <div>
       <div className="link-container">
        <Link  className="link-style" to="/users">Users</Link>
      </div>
      <div className="link-container">
        <Link  className="link-style" to="/notes">Notes</Link>
      </div>
      <div className="link-container">
        <Link className="link-style" to="/">NoteBook</Link>
      </div>
     
     
    </div>
  );
};
export default LinkIndex;
