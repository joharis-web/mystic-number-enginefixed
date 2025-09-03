# 🔮 Mystic Number Engine (Fixed)

Aplikasi mistik numerologi dengan integrasi API real-time (Horoscope, Google, TikTok, Dream).

## 🚀 Deploy ke Vercel

1. Clone atau upload repo ini ke GitHub.
2. Deploy di [Vercel](https://vercel.com).
3. Tambahkan Environment Variable di Vercel:
   ```
   RAPIDAPI_KEY=xxxx
   ```
4. Buka URL project kamu.

## 📂 Struktur
- `index.html` → frontend
- `api/` → serverless API proxy (dengan fallback JSON agar tidak error)
- `vercel.json` → config
