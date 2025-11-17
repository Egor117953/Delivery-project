import Database from "better-sqlite3";
import fs from "fs";

const DB_PATH = "./users.db";

if (!fs.existsSync(DB_PATH)) {
  const db = new Database(DB_PATH);
  db.prepare(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      email TEXT UNIQUE,
      password TEXT
    )
  `).run();
  db.close();
}

export const db = new Database(DB_PATH);
