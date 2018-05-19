import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.css';

const sideDrawer = (props) => {

    return (
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo height="71%"/>
            </div>
            <nav><NavigationItems/></nav>
        </div>
    );
}

export default sideDrawer;
