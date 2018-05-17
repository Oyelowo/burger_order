import React from 'react';
import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // Object.keys is used to convert the object to Array. it takes the keys into an
    // array
    const transformIngredients = Object
        .keys(props.ingredients)
        .map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])].map((_,i)=> {
                return <BurgerIngredient key={ingrKey + i} type={ingrKey} />
            });
        });

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
}

export default burger;
