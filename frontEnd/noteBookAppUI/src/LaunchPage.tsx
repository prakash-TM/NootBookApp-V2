  import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notebook from "./Notebook/notebook";
import Notes from "./Notes/notes";
import User from "./Users/users";
// import LinkIndex from "./DomLinks/LinkIndex";

const LaunchPage = () => {
  return (
    <div>
        
      <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<LinkIndex />}/> */}
            <Route path="/" element={<User />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notebook" element={<Notebook />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default LaunchPage;
