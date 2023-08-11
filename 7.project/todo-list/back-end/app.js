const Joi = require('joi');
const express = require('express');
const app = express();git 

let todos = [
  {
    id: 1,
    title: '',
    status: 'PENDING',
  },
];

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/api/todos', (req, res) => {
  res.status(200).send(todos);
});

app.get('/api/todos/:id', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  const selectedTodos = todos.filter(
    (todo) => todo.id === parseInt(req.params.id),
  );
  res.status(200).send(selectedTodos);
});

app.post('/api/todos', (req, res) => {
  //   const result = validateTodo(req);
  //   if (result.error) {
  //     res.status(400).send(result.error);
  //   }
  const course = {
    id: todos.length + 1,
    title: req.body.title,
    status: 'PENDING',
  };

  todos = todos.concat(course);

  res.status(200).send(todos);
});

app.put('/api/todos', (req, res) => {
  const selectedTodosIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.body.id),
  );

  //   if (validateTodo(req.body).error) {
  //     res.status(400).send(validateTodo(req.body).error);
  //   }

  const todosCopy = [...todos];
  const selectedTodo = todosCopy[selectedTodosIndex];

  if (selectedTodo) {
    selectedTodo.id = req.body.id;
    selectedTodo.title = req.body.title;
    selectedTodo.status = req.body.status;
  }

  todos = todosCopy;

  console.log(todos);

  res.status(200).send(todos);
});

app.delete('/api/todos/:id', (req, res) => {
  console.log(req.params.id);
  const selectedTodosIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id),
  );

  if (!selectedTodosIndex) {
    res.status(404).send('todo not found');
  }

  todos = todos.slice(selectedTodosIndex, 1);
  res.status(200).send(todos);
});

const validateTodo = (req) => {
  const schemas = {
    name: Joi.string().min(1).required(),
  };

  return Joi.validate(req, schemas);
};

app.listen(5000, () => {
  console.log('server is running on port 5000');
});
