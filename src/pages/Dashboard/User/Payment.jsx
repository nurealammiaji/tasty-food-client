import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const publishableKey = import.meta.env.VITE_STRIPE_PublishableKey;

const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Payment || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <div>

                </div>
            </div>
        </div>
    );
};

export default Payment;