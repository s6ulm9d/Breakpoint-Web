import Stripe from 'stripe';

// Initialize Stripe with Secret Key from environment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { plan, userEmail } = req.body;

    const planData = {
        'Professional': {
            amount: 4900, // $49.00
            name: 'Breakpoint Professional Edition',
        },
        'Elite': {
            amount: 24900, // $249.00
            name: 'Breakpoint Elite Enterprise Edition',
        }
    };

    const selectedPlan = planData[plan];
    if (!selectedPlan) {
        return res.status(400).json({ error: 'Invalid plan selected' });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: selectedPlan.name,
                            description: 'Persistent license identity for Breakpoint CLI.',
                        },
                        unit_amount: selectedPlan.amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/pricing`,
            customer_email: userEmail,
            metadata: {
                plan: plan,
                userEmail: userEmail
            }
        });

        return res.status(200).json({ id: session.id, url: session.url });
    } catch (error) {
        console.error('Stripe Session Error:', error);
        return res.status(500).json({ error: 'Failed to create payment session. Check STRIPE_SECRET_KEY.' });
    }
}
