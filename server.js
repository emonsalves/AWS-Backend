import app from './app.js';

const port = 3600;

console.log("test");

app.listen(port, () => {
  console.log(`  Server is running on port ${port}`);
});
