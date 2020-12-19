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

function App() {
  const [{ user }] = useStateValue();

  // if (!user) {
  //   return (
  //     <Router>
  //       <Switch>
  //         <Route path="/">
  //           <LoginPage />;
  //         </Route>
  //       </Switch>
  //     </Router>
  //   );
  // }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/reset_passwordd">
            <Orders />
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
