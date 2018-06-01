import React from 'react';
import styles from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => {
    return (
        <div>
            <li className={styles.NavigationItem}>
                <NavLink to={props.link} exact={props.exact} activeClassName={styles.active}>{props.children}</NavLink>
            </li>
        </div>
    )
}

// oldway const navigationItem = (props) => {     return (         <div>     <li
// className={styles.NavigationItem}>                 <NavLink
// to={props.link}>{props.children}</NavLink>             </li>         </div>
// ) }

export default navigationItem;
