import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import { getUserDetails,getUserActivity,getUserAverageSession,getUserPerformances } from "./service/api";

import Nav from "./components/Nav/Nav";
import SideBar from "./components/Sidebar/SideBar";
import Home from "./page/home/home";
import Dashboard from "./page/Dashboard/Dashboard";

// import { UserDetailSanitize } from "./sanitize/sanitizeUserDetails";

function App() {
  // const [user, setUser] = useState(new UserDetailSanitize({}));
  

  return (
    <>
      <div>
        <BrowserRouter>
            <Nav />
            <SideBar />
          <div className="contain">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/dashboard/:userID" element={<Dashboard  />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
