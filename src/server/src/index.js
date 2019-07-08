const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => res.send('POST this with a bearer token!'));

app.post('/', (req, res) => {
  const token = req.headers['x-google-token'];
  if(!token) return res.sendStatus(401);

  axios({
    method: 'GET',
    url: 'https://www.googleapis.com/oauth2/v1/userinfo',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }).then((data) => {
    res.send(data.data);
    console.log(data.data);
  }).catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.listen(port, () => console.log(`Profile getter running on port ${port}!`))
