import React from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object
        .keys(props.ingredients)
        .map(ingrKey => {
            return <li key={ingrKey}>
                <span
                    style={{
                    textTransform: 'capitalize'
                }}>{ingrKey}</span>: {props.ingredients[ingrKey]}</li>
        })
    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>Your yummie burger with the following ingredients</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" btnClicked={props.purchaseCancelled}>CANCEL ORDER</Button>
            <Button btnType="Success" btnClicked={props.purchaseContinued}>CONTINUE</Button>
            
        </Auxi>
    )
};

export default OrderSummary;
