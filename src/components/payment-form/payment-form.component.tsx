import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles';
import {FormEvent, useState} from 'react';
import { useSelector } from 'react-redux';
import { selectCartPrice } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import {StripeCardElement} from "@stripe/stripe-js";

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;

export const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const amount = useSelector(selectCartPrice);
    const currentUser = useSelector(selectCurrentUser);

    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        const clientSecret = response.paymentIntent.client_secret;
        const cardDetails = elements.getElement(CardElement);
        if(!ifValidCardElement(cardDetails)) return;
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardDetails,
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        });

        setIsProcessingPayment(false);
        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert('Payment Succesfull');
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPES_CLASSES.inverted}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
};