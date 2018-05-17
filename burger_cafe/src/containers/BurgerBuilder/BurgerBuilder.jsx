import React, {Component} from 'react'
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxi>
                <div>Burger</div>
                <div>Build Controls</div>
                <Burger />
            </Auxi>
        );
    }
}

export default BurgerBuilder;
