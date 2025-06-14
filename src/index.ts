import { drizzle } from "drizzle-orm/neon-http";
import { z } from "zod/v4";

const schema = z.object({
  DATABASE_URL: z.string(),
});

const env = schema.parse(process.env);

const db = drizzle(env.DATABASE_URL);

export default db;
