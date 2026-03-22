export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const { aadhar } = req.query;
    
    if (!aadhar) {
        return res.status(400).json({ error: 'Aadhar number daal' });
    }
    
    const BASE_URL = process.env.AERIVUE_BASE;
    const API_KEY = process.env.AADHAR_API_KEY;
    
    try {
        const response = await fetch(
            `${BASE_URL}/aadhar?aadhar=${encodeURIComponent(aadhar)}&apikey=${API_KEY}`
        );
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
