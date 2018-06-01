import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
import Auxi from '../../../hoc/Auxi/Auxi';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate(){
        // console.log('[Ordersummary] willupdate ')
    }

    render() {
        const ingredientSummary = Object
            .keys(this.props.ingredients)
            .map(ingrKey => {
                return <li key={ingrKey}>
                    <span
                        style={{
                        textTransform: 'capitalize'
                    }}>{ingrKey}</span>: {this.props.ingredients[ingrKey]}</li>
            })
        return (
            <Auxi>
                <h3>Your Order</h3>
                <p>Your yummie burger with the following ingredients</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>Total Price: {this
                            .props
                            .price
                            .toFixed(2)}</strong>
                </p>
                <p>Continue to Checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL ORDER</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>

            </Auxi>
        )
    }
}

export default OrderSummary;
