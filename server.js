const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

// specify the static asset folder (css, images, etc)
app.use(express.static('public'));

app.use(bodyParser());

// using ejs for the views
app.set('view engine', 'ejs');

const todos = [];

app.get('/', (req, res) => {
  // res.render('heyho', { todos });
  const templateVars = { todos };
  res.render('heyho', templateVars);
});

app.post('/todos', (req, res) => {
  todos.push(req.body.secretTodoItem);
  console.log(req.body);

  // res.render('heyho', { todos });
  res.redirect('/');
});

app.post('/todos/:specificTodo', (req, res) => {
  console.log(req.body);
  console.log(todos);
  // const index = Number(req.body.indexOfTodo);
  const index = req.params.specificTodo;
  todos[index] = req.body.secretTodoItem;

  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
