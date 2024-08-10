import { app } from 'electron';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

import Database from 'better-sqlite3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const root = path.join(__dirname, '..');

const require = createRequire(import.meta.url);

let database: Database.Database;

export function getSqlite3(
  filename = path.join(app.getPath('userData'), 'better-sqlite3.sqlite3')
) {
  console.log('FileNAME: ', filename);
  const nativeBinding = path.join(
    root,
    import.meta.env.VITE_BETTER_SQLITE3_BINDING
  );

  database ??= new Database(filename, {
    nativeBinding: require(nativeBinding)
  });

  database.pragma('journal_mode = WAL');

  return database;
}
