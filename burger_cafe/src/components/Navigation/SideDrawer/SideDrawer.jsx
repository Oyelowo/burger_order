import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';

const sideDrawer = (props) => {
    let attachedStyles = [styles.sideDrawer, styles.Close];

    if (props.open) {
        attachedStyles = [styles.sideDrawer, styles.Open]
    }
    return (
        <Auxi>
            <Backdrop show={props.open} clickedBackdrop={props.closed}/>
            <div className={attachedStyles.join(' ')}>
                <div className={styles.Logo}>
                    <Logo height="11%"/>
                </div>
                <nav><NavigationItems/></nav>
            </div>
        </Auxi>
    );
}

export default sideDrawer;
