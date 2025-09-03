export default async function handler(req, res) {
  const { product_id = "601226" } = req.query;

  try {
    const r = await fetch(
      `https://tiktok-api23.p.rapidapi.com/api/trending/top-products/metrics?product_id=${product_id}`,
      {
        headers: {
          "x-rapidapi-host": "tiktok-api23.p.rapidapi.com",
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
