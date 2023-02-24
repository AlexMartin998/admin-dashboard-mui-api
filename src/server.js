import app from './app.js';
import { PORT } from './config/index.js';

console.clear();

export const server = app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
