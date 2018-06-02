import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elentConfig: {
                    type: 'text',
                    placeholder: ' Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elentConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            postalCode: {
                elementType: 'input',
                elentConfig: {
                    type: 'text',
                    placeholder: ' Postal Code'
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elentConfig: {
                    type: 'text',
                    placeholder: ' City'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elentConfig: {
                    type: 'text',
                    placeholder: ' Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elentConfig: {
                    type: 'email',
                    placeholder: ' E-mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elentConfig: {
                    options: [
                        {
                            value: 'quickest',
                            displayValue: 'Quickest'
                        }, {
                            value: 'cheapest',
                            displayValue: 'Cheapest'
                        }
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients)
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        }

        axios
            .post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this
                    .props
                    .history
                    .push('/')
            })
            .catch(error => {
                this.setState({loading: false});
            });

    }

    render() {
const formElementArray = [];
for(let key in this.state.orderForm){
    formElementArray.push(
        {
            id: key,
            config: this.state.orderForm[key]
        }
    )
}

        let form = (
            <form action="/">
                <Input elementType="..." elementConfig="..." value="..."/>
                {formElementArray.map(formElement =>(
                    <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}/>
                ))}
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