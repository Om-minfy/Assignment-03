const express = require('express');
const authenticateToken = require('../middleware/auth');
const authorizeAdmin = require('../middleware/admin');
const todos = require('../data/todos');

const router = express.Router();

router.get('/api/todos', authenticateToken, (req, res) => {
  const userTodos = todos.filter(todo => todo.userId === req.user.id);
  res.json(userTodos);
});

router.post('/api/todos', authenticateToken, (req, res) => {
  const { task } = req.body;

  const newTodo = {
    id: todos.length + 1,
    task,
    userId: req.user.id
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.delete('/api/todos/:id', authenticateToken, (req, res) => {
  const todoIndex = todos.findIndex(
    t => t.id === parseInt(req.params.id) && t.userId === req.user.id
  );

  if (todoIndex === -1) {
    return res.status(403).json({ message: 'Not allowed or todo not found' });
  }

  todos.splice(todoIndex, 1);
  res.json({ message: 'Todo deleted' });
});

router.get('/api/admin/all-todos', authenticateToken, authorizeAdmin, (req, res) => {
  res.json(todos);
});

module.exports = router;