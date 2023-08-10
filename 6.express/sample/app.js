const express = require('express');
const app = express();
const port = 3000;

//mount routes
app.use('/api/v1/auth', auth);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});