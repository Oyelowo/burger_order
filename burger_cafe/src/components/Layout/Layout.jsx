import React from 'react';
import Auxi from '../../hoc/Auxi';
import styles from './Layout.css';

const layout = (props) => (
    <Auxi>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>{props.children}</main>
    </Auxi>
);

export default layout;
