const express = require('express');

const apiRoute = express.Router();
apiRoute.use(express.json());

apiRoute.post('/login', (req, res) => {
    const {username, password} = req.body;
  console.log(`Request recieve!, ${username} -> ${password}`);
  return res.json({'token': 'eySKNndmnidnnmnaDJIAdnmnaJDISdKJKSDJklsjd'});
});

module.exports = apiRoute;