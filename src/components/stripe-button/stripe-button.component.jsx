import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Vvl5Vs66J1Gmyx5xrnEuQfiO00m8RFhCcA';

    const onToken = token => {
        console.log(token);
        alert("payment successful");
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Mun clothing Store"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;