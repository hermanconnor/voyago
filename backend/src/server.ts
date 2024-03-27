import mongoose from 'mongoose';

import app from './app';
import { env } from './schemas/zodEnv';

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  })
  .catch(console.error);
