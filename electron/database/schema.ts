import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name'),
  birthDate: text('birth_date')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
});