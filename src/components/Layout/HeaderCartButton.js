import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useSelector } from 'react-redux';

const HeaderCartButton = (props) => {
  const getData = useSelector((state) => state.cartreducer.carts);
  console.log('getData', getData);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span >Your Cart</span>
      <span className={classes.badge}>
        {getData.length}
      </span>

    </button>
  )
}

export default HeaderCartButton
