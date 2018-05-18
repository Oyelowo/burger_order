import React from 'react';
import Auxi from '../../../hoc/Auxi';

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
            <p>Continue to Checkout</p>
        </Auxi>
    )
};

export default OrderSummary;
