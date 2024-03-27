import { z } from 'zod';

const envSchema = z.object({
  MONGO_CONNECTION_STRING: z
    .string({ required_error: 'DB connection string required' })
    .min(1, { message: 'DB connection string required' }),

  PORT: z
    .string({
      required_error: 'PORT is required',
      invalid_type_error: 'PORT env must be a string',
    })
    .min(1, { message: 'PORT is required' }),

  JWT_SECRET: z.string().min(1, { message: 'Token key is required' }),
});

export const env = envSchema.parse(process.env);
