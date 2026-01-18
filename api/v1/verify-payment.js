import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const { session_id } = req.query;

    if (!session_id) {
        return res.status(400).json({ error: 'Missing session_id' });
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(session_id);

        if (session.payment_status === 'paid') {
            const plan = session.metadata.plan;

            // Generate the Real License based on verified payment
            let tier = 'Pro';
            let licenseKey = `BRK-PRO-${Math.random().toString(36).substring(2, 15).toUpperCase()}`;
            let expiry = '2026-06-30';

            if (plan === 'Elite' || plan === 'Enterprise') {
                tier = 'Elite';
                licenseKey = `BRK-ELITE-${Math.random().toString(36).substring(2, 15).toUpperCase()}-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
                expiry = '2026-12-31';
            }

            return res.status(200).json({
                status: 'verified',
                tier: tier,
                licenseKey: licenseKey,
                expiry: expiry,
                amount_paid: session.amount_total / 100
            });
        } else {
            return res.status(402).json({ status: 'unpaid', error: 'Payment has not been completed.' });
        }
    } catch (error) {
        console.error('Verify error:', error);
        return res.status(500).json({ error: 'Internal server error during verification.' });
    }
}
