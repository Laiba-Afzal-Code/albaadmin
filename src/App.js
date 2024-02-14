import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductsList from "./pages/productsList/ProductsList";
import Product from "./pages/product/Product";
import NewProducts from "./pages/newProduct/NewProducts";

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
              <Route exict path="/user/:userId" element={<User />}></Route>
              <Route exict path="/newUser" element={<NewUser />}></Route>
              <Route exict path="/products" element={<ProductsList />}></Route>
              <Route
                exict
                path="/product/:productId"
                element={<Product />}
              ></Route>
              <Route
                exict
                path="/newProducts"
                element={<NewProducts />}
              ></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
