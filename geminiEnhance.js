import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Limit: 3 requests per IP per hour
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: { error: 'Too many enhancement requests from this IP, please try again later.' }
});
app.use('/api/enhance', limiter);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/enhance', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided.' });

  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
      { prompt: { text } },      // Your input text
      {
        temperature: 0.7,      // Optional: controls randomness
        candidateCount: 1      // Optional: how many generated results you want
      },  
      {
        headers: { 'Content-Type': 'application/json' },
        params: { key: GEMINI_API_KEY }
      }
    );
    const enhanced = response.data.candidates?.[0]?.output || '';
    res.json({ enhanced });
  } catch (error) {
    console.error(error);  // Add logging for easier debugging
    res.status(500).json({ error: 'Enhancement failed.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Gemini Enhance API running on port ${PORT}`));
