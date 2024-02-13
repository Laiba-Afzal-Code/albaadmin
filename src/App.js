import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <>
    <BrowserRouter>
      <Topbar />
      <div className="App">
        <Sidebar />
        <div className="others">
        <Routes>
          <Route exict path="/" element={<Home />}></Route>
          <Route exict path="/users" element={<UserList />}></Route>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
