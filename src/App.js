import React, { useState } from "react";
import { Switch, Route } from "react-router-dom"
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AuthProvider from "./store/AuthProvider";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import AdminPanel from "./components/AdminPanel/AdminPanel"

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <AuthProvider>
      <CartProvider>
        {showCart && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Switch>
            <Route path="/user/login">
              <Login />
            </Route>
            <Route path="/user/registration">
              <Registration />
            </Route>
            <Route path="/admin">
              <AdminPanel />
            </Route>
            <Route path="/meals">
              <Meals />
            </Route>
          </Switch>
        </main>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
