import dotenv from 'dotenv';
import express, {
  Request,
  Response,
} from 'express';

dotenv.config();
const app = express();
const port = process.env.PORT;

type NewTask = {
  name: string;
}

type Task = NewTask & {
  completed: boolean;
};

app.get('/', (req: Request, res: Response) => {
  res.send('typescript node server is working')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
