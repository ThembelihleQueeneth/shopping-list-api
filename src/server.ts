import { app } from './app';

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Shopping List API running at http://localhost:${PORT}`);
});
