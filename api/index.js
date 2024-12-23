export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello, Vercel!' });
  } else if (req.method === 'POST') {
    const data = req.body;
    res.status(200).json({ message: 'Data received!', data });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
