const express = require('express');

const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: 'html' },
  { id: 2, name: 'css' },
  { id: 3, name: 'js' },
];

app.get('/', (req, res) => {
  console.log(req, res);
  console.log(req.params);
  console.log(req.query);
  res.status(200).end('Hello');
});

app.get('/api/courses', (req, res) => {
  res.status(200).send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id),
  );
  res.status(200).send(course);
});

//port
const port = process.env.PORT;

app.listen(`${port}`, () => {
  console.log(`server in running on ${port}`);
});
