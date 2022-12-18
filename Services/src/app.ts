import express from 'express';
import morgan from 'morgan';
import { APIRouter } from './routes/route';
import CONFIG from './config/config';
import cors from 'cors';

const URL = CONFIG.URL

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares(): void {
    this.express.use(cors({ credentials: true, origin: true }));
    this.express.options('*', cors());
    this.express.use(express.json());
    this.express.use(morgan('tiny'));
  }

  private setRoutes(): void {
    this.express.use(URL, APIRouter);

    this.express.all('*', async (req, res) => {
      //throw new NotFoundError();
    });
  }

}

export default new App().express;
