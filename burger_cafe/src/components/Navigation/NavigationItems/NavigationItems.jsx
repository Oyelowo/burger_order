import React from 'react';
import styles from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>Burger Maker </NavigationItem>
        <NavigationItem link="/orders">Orders </NavigationItem>
    </ul>
)

export default navigationItems;
