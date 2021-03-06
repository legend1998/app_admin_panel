import "./App.css";
import Header from "./components/Header";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import AddProduct from "./components/Add_new_product";
import Customers from "./components/Customers";
import Orders from "./components/Orders";

import { useStateValue } from "./StateProvider";
import LoginPage from "./components/LoginPage";
import ProductDetailPage from "./components/ProductDetailPage";
import { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    let u = localStorage.getItem("user");
    dispatch({
      type: "SET_USER",
      user: u,
    });
  }, []);

  if (!user) {
    return <LoginPage />;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/product_detail/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/add_new_product">
            <AddProduct />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
