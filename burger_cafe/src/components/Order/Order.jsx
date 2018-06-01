import React from 'react';
import styles from './Order.css'

const Order = (props) => {
  return (
    <div className={styles.Order}>
      <p>Ingredients: Salad (1) </p>
      <p>Price: <strong>EUR 4.75</strong></p>
    </div>
  )
}

export default Order;
