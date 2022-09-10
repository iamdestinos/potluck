const express = require('express');
const path = require('path');

/**
 * This is the file where we set up the server connection
 */

// set app equal to an invocation of express
const app = express();
const port = 3000;
const staticPath = path.resolve(__dirname, '../../client/src/public');

app.use(express.static(staticPath));
// connect port
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Potluck is listening on port ${port}`);
});
