import React from 'react';
import classes from './MealItemForm.module.css'
import Input from '../UI/Input';
import { useDispatch } from 'react-redux';
import ADD from "../redux/action"

const MealItemForm = (props) => {


  const dispatch= useDispatch();

  const send = (e) => {
    dispatch(ADD(e))
  }


  return (
    <form className={classes.form}>
        <Input 
         label="Quantity"
         input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '10',
            step: '1',
            defaultValue: '1'
        }}
        />
      <button type="button" onClick={()=> send(props)}>+ Add To Cart</button>
    
    </form>
  );

};

export default MealItemForm;
