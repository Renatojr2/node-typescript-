import express from 'express';
import router from './router';

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log('Api conectada');
});
