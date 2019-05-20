import express, {Application, Request, Response, NextFunction} from 'express';
import chalk from 'chalk';

const app: Application = express();

const additionData = (a: number, b: number) => a + b;
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  next(chalk.blue(`${additionData(13, 20)}`))
  res.send('Hello');
});

const port: any = process.env.PORT || 5000;

app.listen(port, () => {
  chalk.blue(`Server started at ${port}`);
});