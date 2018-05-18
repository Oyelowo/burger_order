import React from 'react';
import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // Object.keys is used to convert the object to Array. it takes the keys into an
    // array
    const ingKeysArray = Object.keys(props.ingredients);
    // here, i map through the keys/properties of the objects
    // which are in the array, then create an empty array of
    // size which is equivalent to the size of value/amount of each
    // ingredient which is in another component. I used the 
    // spread operator for deconstructing the arraya because
    //  using only e.g Array(3) will create array with undefined
    //  values that can not be mapped, as they will be empty
    // but using the spread operator to deconstructure it into 
    // a new array allows me to map over the array.
    // after this, I then map over this array(which is size of an ingredient),
    // then i get the each element and index of the array. but because
    // i dont need the element here, just the index, i ignored each element
    // by using underscore for the element(i can use anything else),
    // from there, i could create peculiar unique keys for each ingredient
    // that is same amount of value, declared in the state in another component.
    // i concatenated the ingredient and the various indexes to provide
    // unique keys, then, the particular ingredient as the type,
    // which has been declared in the switch statement in BurgerIngredient component.
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

        //not the best but also works:
    // .map(ingrKey => {
    //     return ((Array(props.ingredients[ingrKey]).join("_") + '1').split('')).map((_, i) => {
    //         return <BurgerIngredient key={ingrKey + i} type={ingrKey}/>
    //     });
    // });


    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/> {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
}

export default burger;
