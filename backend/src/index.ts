import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Docker!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});