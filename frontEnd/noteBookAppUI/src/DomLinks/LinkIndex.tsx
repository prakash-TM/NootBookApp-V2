import { Link } from "react-router-dom";
import "./LinkIndex.css"
const LinkIndex=()=>{
    return(
        <div>
             <div className="header">
            <div className="header1">
                <h2>Click here for :</h2>
            <div>
            <Link className="link" to="/notebook" >NoteBook</Link>
            <p>Working Fine</p>
            </div>
            <div>
            <Link className="link" to="/notes">Notes</Link>
            <p>Under Testing</p>
            </div>
           <div>
           <Link className="link" to="users">Users</Link>
           <p>Under Testing</p>
           </div>
            
            </div>
        </div>
        </div>
    )
}
export default LinkIndex