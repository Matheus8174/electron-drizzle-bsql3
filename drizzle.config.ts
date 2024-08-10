import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './electron/database/schema.ts',
  out: './drizzle',

  dialect: 'sqlite'
});
