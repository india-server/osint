export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const { rc } = req.query;
    
    if (!rc) {
        return res.status(400).json({ error: 'RC number daal' });
    }
    
    const BASE_URL = process.env.AERIVUE_BASE;
    const API_KEY = process.env.RTO_API_KEY;
    
    try {
        const response = await fetch(
            `${BASE_URL}/rto?rc=${encodeURIComponent(rc)}&apikey=${API_KEY}`
        );
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
