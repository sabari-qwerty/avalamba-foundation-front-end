import { loadStripe } from '@stripe/stripe-js'

interface checkout {
    lineItems: any
}

export async function checkout(lineItems: checkout) {
    let stripePromise: any | null = null

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
        }

        return stripePromise
    }

    const stripe = await getStripe()

    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successUrl: "http://example.com/",
        cancelUrl: window.location.origin
    })

}

