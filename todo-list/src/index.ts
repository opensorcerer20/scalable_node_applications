import express, {
  Request,
  Response,
} from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('typescript node server is working')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
