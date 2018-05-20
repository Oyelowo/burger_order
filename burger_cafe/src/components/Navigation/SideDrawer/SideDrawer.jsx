import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi/Auxi';

const sideDrawer = (props) => {
    let attachedStyles = [styles.SideDrawer, styles.Close];

    if (props.open) {
        attachedStyles = [styles.SideDrawer, styles.Open]
    }
    return (
        <Auxi>
            <Backdrop show={props.open} clickedBackdrop={props.closed}/>
            <div className={attachedStyles.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav><NavigationItems/></nav>
            </div>
        </Auxi>
    );
}

export default sideDrawer;
