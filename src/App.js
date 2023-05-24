import React, {Fragment} from "react";
import {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showcartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
};

export default App;










































