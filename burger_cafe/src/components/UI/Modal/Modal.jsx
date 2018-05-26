import React, {Component} from 'react';
import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi/Auxi';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate(){
        console.log("[Modal] WillUpdate")
    }
    render() {
        return (
            <Auxi>
                <Backdrop show={this.props.show} clickedBackdrop={this.props.modalClosed}/>
                <div
                    className={styles.Modal}
                    style={{
                    transform: this.props.show
                        ? 'translateY(0)'
                        : 'translateY(-100vh)',
                    opacity: this.props.show
                        ? '1'
                        : '0'
                }}>
                    {this.props.children}
                </div>
            </Auxi>
        )
    }
}

export default Modal;