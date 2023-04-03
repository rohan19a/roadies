const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const users = [
  { id: 1, email: 'John@example.com', password: '1' } // password is "secret"
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (!result) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id }, 'secret-key', { expiresIn: '1h' });
    res.status(200).json({ token });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
