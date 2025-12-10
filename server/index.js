import app from '../api/index.js';

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🛡️  Secure Server running on http://localhost:${PORT}`);
});
