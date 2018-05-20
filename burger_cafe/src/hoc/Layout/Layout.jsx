import React, {Component} from 'react';
import Auxi from '../Auxi/Auxi';
import styles from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    // dont do this due to the asynchonous state of set state.
    // sideDrawerToggleHandler = () => {     this.setState({         showSideDrawer:
    // !this.state.showSideDrawer     }) } this is a good way of using a setstate
    // when it depends on the present state
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }
    render() {
        return (
            <Auxi>
                <Toolbar clickedDrawerToggle={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={styles.Content}>{this.props.children}</main>
            </Auxi>
        )
    }
}

export default Layout;
