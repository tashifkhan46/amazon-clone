import React from 'react';
import './Checkout.css';
import './App.js';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout--left">
                <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h3 className="checkout--title">Your Shopping Details</h3>
                    {/* CheckoutProduct */}
                    {cart.map( item => (
                     <CheckoutProduct
                      id = {item.id}
                      title = {item.title}
                      image = {item.image}
                      price = {item.price}
                     />   
                    ))}
                    {/* CheckoutProduct */}
                    

                </div>

            </div>

            <div className="checkout--right">
                <Subtotal />
               

            </div>
        </div>
    );
}

export default Checkout