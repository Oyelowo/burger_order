import React from 'react';
import styles from './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button
                className={styles.Less}
                onClick={props.removed}
                disabled={props.disabled}>Remove</button>
            <button className={styles.More} onClick={props.added}>Add</button>
        </div>
    )
}

export default buildControl;
