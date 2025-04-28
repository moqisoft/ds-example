/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import cors from 'cors';
import { merge } from 'lodash';
import * as path from 'path';
import serverConfig from '../../../config';
import { openConfig, documentTypeConfig } from './default.config';

const app = express();
// 静态资源
app.use('/assets', express.static(path.join(__dirname, 'assets')));
// 解析 JSON 格式的请求体
app.use(express.json());
// 解析 URL 编码的请求体
app.use(express.urlencoded({ extended: true }));
// 允许跨域
app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/open/:documentType', (req, res) => {
  const { documentType = 'word' } = req.params;

  const data = merge({}, openConfig, documentTypeConfig[documentType]);
  const { url } = req.query;
  res.send({ error: 0, msg: 'success', data });
});

app.post('/api/callback', (req, res) => {
  console.log('回调消息体 ==> ', req.body);
  res.send({ error: 0 });
});

const port = process.env.PORT || serverConfig.apiPort;
const server = app.listen(port, () => {
  console.log(`Listening at http://${serverConfig.host}:${port}/api`);
});
server.on('error', console.error);
