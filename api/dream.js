export default async function handler(req, res) {
  const { symbol = "Snake" } = req.query;

  try {
    const r = await fetch(
      "https://ai-dream-interpretation-dream-dictionary-dream-analysis.p.rapidapi.com/dreamDictionary?noqueue=1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "ai-dream-interpretation-dream-dictionary-dream-analysis.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
        body: JSON.stringify({ symbol, language: "en" }),
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
