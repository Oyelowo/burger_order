import React from 'react';
import styles from './Backdrop.css';

const backdrop = (props) => {
let backdropStyle = [styles.Backdrop, props.desktop?styles.BackdropSideDrawer:null]

    return (props.show
        ? <div className={backdropStyle.join(' ')} onClick={props.clickedBackdrop}></div>
        : null);
}

export default backdrop;
