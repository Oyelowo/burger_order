import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },

        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients)
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Oyelowo Oyedayo',
                address: {
                    street: 'Linnoituksentie 10',
                    postalCode: '00940',
                    city: 'Helsinki',
                    country: 'Finland'
                },
                email: 'oyelowooyedayo@gmail.com'
            },
            deliveryMethod: 'quick'
        }

        axios
            .post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false});
            });

    }

    render() {
        let form = (
            <form action="/">
                <input
                    className={styles.Input}
                    type="text"
                    name="name"
                    placeholder="Your Name"/>
                <input
                    className={styles.Input}
                    type="email"
                    name="email"
                    placeholder="Your Mail"/>
                <input className={styles.Input} type="text" name="street" placeholder="Street"/>
                <input
                    className={styles.Input}
                    type="text"
                    name="postal"
                    placeholder="Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;