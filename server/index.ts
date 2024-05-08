// simple server
import { getToken } from './workato';
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import axios from 'axios';

const filename = 'fdifdif';
// filename.replace('');

const port = 4090;// 7005;
const app = express();
app.use(bodyParser.json());

const downloadData = (data: any) => {
  fs.writeFile("./download.json", JSON.stringify(data), (err) => {
    console.log("Error?:", err || "NO");
  });
};

app.get('/api', async (req, res) => {
  res.send('you are welcome');
});

app.get('/api/cors-test', async (req, res) => {
  try {
    // await axios.get('http://localhost:4090/api',
     await axios.get('http://localhost:3000/api/google-integration/get-token/company/2/user/3950',
    //  { headers: {
    //   'X-Requested-With': 'XmlHttpRequest',
    // }
  // }
  )
  res.send('works well');

  } catch(e: any) {
    console.log(e.message, 'error')
    res.send(e);
  }
});

app.post('/api/workato', (req, res) => {
    console.log(req.body);
    if(req.body) {
        downloadData(req.body || {});
        return res.json({ message: 'Data received', data: req.body });
    }

    return res.status(400).json({ message: 'Error'});
});

const token ='uncomment';// getToken();
const connectionId = 1403739;// 1403738;// 1403739; //1403740
app.get('/workato', (req, res) => {
  return res.send(`<div style="display:flex; justify-content: center; align-items: center; height: 100%"><iframe height="300px" width="300px" src="https://www.workato.com/direct_link/embedded/connections/${connectionId}?workato_dl_token=${token}"></iframe></div>`);
})

app.listen(port, () => {
    console.log('connected');
});