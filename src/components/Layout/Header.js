import React ,{Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
// import { useSelector } from 'react-redux';

const Header = ( props) => {

  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ANY TIME MEALS</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
      <div className={classes['main-image']}>
        <img  src={mealsImage} alt=' A table full of delicius food '/>
      </div>
    </Fragment>
  )
}

export default Header;

