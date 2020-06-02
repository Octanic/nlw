import express from 'express';
import cors from 'cors';
import routes from './routes'; //get my exported routes
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json()); //express will now interpret json bodies. 

app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname,"..", 'uploads')));

app.listen(3333);