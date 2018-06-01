import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.css'

const logo = (props) => {
  return (
    <div className={styles.Logo} style={{height:props.height}}>
      <img src={burgerLogo} alt="Burger"/>
    </div>
  )
}

export default logo;