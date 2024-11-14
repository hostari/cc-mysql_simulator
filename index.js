import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  res.send(`This is a MySQL Code Checker, perform a POST /check with JSON body: {"code": encoded-base64-mysql-code } and you will get a response.`);
});

const port = parseInt(process.env.PORT) || 8081;
app.listen(port, () => {
  console.log(`app: listening on port ${port}`);
});
