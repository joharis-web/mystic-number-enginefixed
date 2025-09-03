export default async function handler(req, res) {
  const { query = "Nike" } = req.query;

  try {
    const r = await fetch(
      `https://google-search74.p.rapidapi.com/?query=${query}&limit=10&related_keywords=true`,
      {
        headers: {
          "x-rapidapi-host": "google-search74.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
      }
    );

    const text = await r.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
