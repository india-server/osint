export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const { userid } = req.query;
    
    if (!userid) {
        return res.status(400).json({ error: 'Telegram user ID daal' });
    }
    
    const BASE_URL = process.env.AERIVUE_BASE;
    const API_KEY = process.env.TG_API_KEY;
    
    try {
        const response = await fetch(
            `${BASE_URL}/tg?userid=${encodeURIComponent(userid)}&apikey=${API_KEY}`
        );
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
