import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
    const booking = useLoaderData();

    console.log(booking)
    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    
    // const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    return (
        <div >
            <h1 className="text-3xl font-bold my-6">Payment option</h1>
            <div className='w-2/3 mx-auto my-6'>
                <h3 className="text-xl font-bold my-3">Payment for {treatment}</h3>
                <p className="text-sm">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>

                <div className='w-96 border mt-4 rounded-md'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
}

export default Payment;
