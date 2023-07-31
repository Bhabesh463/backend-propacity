const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/folders', require('./routes/folders'));
app.use('/files', require('./routes/files'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
