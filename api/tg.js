export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { userid } = req.query;

    if (!userid) {
        return res.status(400).json({
            status: false,
            message: "Telegram user ID daalo"
        });
    }

    const BASE_URL = process.env.AERIVUE_BASE;
    const API_KEY = process.env.TG_API_KEY;

    // 🔥 Toggle (future ke liye useful)
    const MAINTENANCE_MODE = false;

    if (MAINTENANCE_MODE) {
        return res.status(200).json({
            status: false,
            error: "API is expired",
            message: "⚠️ This API is currently not active.",
            provider: "@aerivue",
            api: "Black-Api-Box",
            fix: "Contact @aerivue to renew access"
        });
    }

    try {
        const response = await fetch(
            `${BASE_URL}/tg?userid=${encodeURIComponent(userid)}&apikey=${API_KEY}`
        );

        const data = await response.json();

        // 🔥 API expire check
        if (data?.message?.includes("expire")) {
            return res.status(200).json({
                status: false,
                error: "API is expired",
                message: "⚠️ This API is currently not active.",
                provider: "@aerivue",
                api: "Black-Api-Box",
                fix: "Contact @aerivue to renew access"
            });
        }

        // ✅ Normal response
        return res.status(200).json({
            status: true,
            data: data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            error: "Server Error",
            message: error.message
        });
    }
}
