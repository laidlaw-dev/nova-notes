import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Add CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
