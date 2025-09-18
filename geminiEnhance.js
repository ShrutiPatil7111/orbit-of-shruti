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

// Limit: 20 requests per IP per hour
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20,
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
      {
        contents: [
          {
            parts: [
              {
                 text: `You are an assistant that improves user-submitted text for clarity and correctness. 
                        - If the text sounds casual (like from a friend), keep the tone casual, just fix grammar/spelling.  
                        - If the text sounds professional (like recruiter feedback), keep it polished and professional.  
                        Keep the meaning same, keep the length similar (1 to 2 lines shorter or longer is okay).  
                        Do NOT expand into long explanations or lists.   
                        Here is the text to improve: "${text}"`  
                }
              ]
          }
        ]
      },  
      {
        headers: { 'Content-Type': 'application/json' },
        params: { key: GEMINI_API_KEY }
      }
    );
    const enhanced = response.data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    res.json({ enhanced });
  } catch (error) {
    console.error("Enhancement API Error:", error.response?.data || error.message);  // Add logging for easier debugging
    res.status(500).json({ error: 'Enhancement failed.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Gemini Enhance API running on port ${PORT}`));
