
export default function handler(req, res) {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized', tier: 'FREE' });
    }

    const key = authorization.replace('Bearer ', '').trim();

    // Strict Validation Logic
    // In a real app, this would query a database.
    // For this professional demo/enterprise setup, we use format-based validation.

    if (key.startsWith('BRK-ELITE-') && key.length > 20) {
        return res.status(200).json({
            status: 'valid',
            tier: 'PREMIUM',
            type: 'ELITE',
            expires: '2026-12-31',
            owner: 'Enterprise Client'
        });
    }

    if (key.startsWith('BRK-PRO-') && key.length > 15) {
        return res.status(200).json({
            status: 'valid',
            tier: 'PREMIUM',
            type: 'PRO',
            expires: '2026-06-30'
        });
    }

    if (key.startsWith('BRK-FREE-')) {
        return res.status(200).json({
            status: 'valid',
            tier: 'FREE',
            type: 'COMMUNITY'
        });
    }

    return res.status(403).json({
        status: 'invalid',
        error: 'Invalid license key',
        tier: 'FREE'
    });
}
