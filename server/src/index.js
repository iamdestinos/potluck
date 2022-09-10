const express = require('express');

/**
 * This is the file where we set up the server connection
 */

// set app equal to an invocation of express
const app = express();
const port = 3000;

// connect port
app.listen(port, () => {
  console.log(`Potluck is listening on port ${port}`);
});
