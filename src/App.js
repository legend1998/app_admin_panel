import "./App.css";
import Header from "./components/Header";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import AddProduct from "./components/Add_new_product";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/add_new_product">
            <AddProduct />
          </Route>
          <Route path="/product">
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
