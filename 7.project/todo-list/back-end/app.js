const Joi = require('joi');
const express = require('express');
const app = express();

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

app.get('/api/getTodos', (req, res) => {
  res.status(200).send(todos);
});

app.get('/api/getTodos/:id,', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  const selectedTodos = todos.filter(
    (todo) => todo.id === parseInt(req.query.id),
  );
  res.status(200).send(selectedTodos);
});

app.post('/api/getTodos,', (req, res) => {
  if (validateTodo(req.body).error) {
    res.status(400).send(validateTodo(req.body).error);
  }
  const course = {
    id: todos.length + 1,
    name: req.body.name,
    status: 'PENDING',
  };

  todos = {
    ...todos,
    course,
  };

  res.status(200).send(todos);
});

app.put('/api/getTodos/:id,', (req, res) => {
  console.log(req.params.id);
  const selectedTodos = todos.filter(
    (todo) => todo.id === parseInt(req.params.id),
  );

  if (validateTodo(req.body).error) {
    res.status(400).send(validateTodo(req.body).error);
  }

  const course = req.body;

  todos = {
    ...todos,
    course,
  };
  res.status(200).send(todos);
});

app.delete('/api/getTodos/:id,', (req, res) => {
  console.log(req.params.id);
  const selectedTodosIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id),
  );

  if (!selectedTodosIndex) {
    res.status(404).send('todo not found');
  }

  const slicedTodos = todos.slice(selectedTodosIndex, 1);
  res.status(200).send(slicedTodos);
});

const validateTodo = (reqBody) => {
  const schemas = {
    name: Joi.String().min(1).required(),
  };

  return (result = Joi.validate(reqBody, schemas));
};

app.listen(5000, () => {
  console.log('server is running on port 5000');
});
