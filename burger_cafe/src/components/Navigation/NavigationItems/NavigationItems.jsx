import React from 'react';
import styles from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>Burger Maker
        </NavigationItem>
        <NavigationItem link="/orders">Orders
        </NavigationItem>
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">LOGOUT</NavigationItem>}
    </ul>
)

export default navigationItems;
