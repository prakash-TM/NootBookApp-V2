import { Link } from "react-router-dom";
import "./LinkIndex.css";
const LinkIndex = () => {
  return (
    <div>
      <div>
        <Link to="/notebook">NoteBook</Link>
      </div>
      <div>
        <Link to="/notes">Notes</Link>
      </div>
      <div>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};
export default LinkIndex;
