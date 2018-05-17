import React from 'react';
import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // Object.keys is used to convert the object to Array. it takes the keys into an
    // array
    const ingKeysArray = Object.keys(props.ingredients);
    const transformIngredients = ingKeysArray
    .map(ingrKey => {
        return [...Array(props.ingredients[ingrKey])].map((_, i) => {
            return <BurgerIngredient key={ingrKey + i} type={ingrKey}/>
        });
    });

    // alternative
    // const keys = Object.keys(props.ingredients);
    // let transformIngredients = [];
    // for ( let i = 0; i < keys.length; i++ ) {
    //      let ingredientCount = props.ingredients[keys[i]];
        
    //     for ( let j=0; j < ingredientCount; j++ ) {
    //         transformIngredients.push(<BurgerIngredient key={keys[i] + j} type={keys[i]} />);
    //     };
    // }


    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/> {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
}

export default burger;
