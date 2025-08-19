import dotenv from 'dotenv';
import express, {
  Request,
  Response,
} from 'express';

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

type NewTask = {
  task: string;
}

type Task = NewTask & {
  completed: boolean;
};

const tasks: Task[] = [];

app.get('/tasks', (req: Request, res: Response) => {
  res.status(200).json({data: tasks});
});

app.post('/tasks', (req: Request, res: Response) => {
  // @todo validate req.body.task
  if (req.body.task && typeof req.body.task == "string") {
    tasks.push({task: req.body.task, completed: false});
    res.send("Task added");
  } else {
    res.status(400).send("Could not add task")
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send("Server running");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
