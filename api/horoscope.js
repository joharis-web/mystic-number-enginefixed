export default async function handler(req, res) {
  const { zodiac = "aquarius", type = "daily" } = req.query;

  try {
    const r = await fetch(
      `https://astropredict-daily-horoscopes-lucky-insights.p.rapidapi.com/horoscope?lang=en&zodiac=${zodiac}&type=${type}&timezone=UTC`,
      {
        headers: {
          "x-rapidapi-host": "astropredict-daily-horoscopes-lucky-insights.p.rapidapi.com",
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
