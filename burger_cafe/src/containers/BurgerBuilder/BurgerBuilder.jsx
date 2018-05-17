import React, {Component} from 'react'
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //   super(props);
    
    //   this.state = {
         
    //   }
    // }

    state={
        ingredients : {
            salad: 2,
            bacon: 1,
            cheese: 2,
            meat: 2,
        }
    }
    

    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients} />
            </Auxi>
        );
    }
}

export default BurgerBuilder;
