import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>Enjoy your Yummie Burger!</h1>
      <div
        style={{
        width: '100%',
        margin: 'auto'
      }}></div>

      <Burger ingredients={props.ingredients}/>
      <Button clicked btnType="Danger">CANCEL</Button>
      <Button btnType="Success" clicked>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary;
