import { config } from "dotenv";
config();

import { z } from "zod";
export const environment = z
  .object({
    DATABASE_URL: z.string().url(),
  })
  .parse(process.env);
