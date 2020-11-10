import express from 'express';
import { PORT } from './Constants/index';
import feedbacks from './Route/Poll';

import 'dotenv/config.js';
//import { getPosts, getPost, createPost } from './controllers.js';

const app = express();
app.use(express.json());

/*app.use(cors({origin: '*',}))
app.use(morgan('dev'));*/

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('${process.env.BASEURL}/feedbacks', feedbacks);
//app.get('/posts', getPosts);
//app.get('/posts/:id', getPost);
//app.post('/posts', createPost);


app.listen(
  PORT,
  console.log('Server is running in ${process.env.NODE_ENV} mode on port ${PORT}')
);