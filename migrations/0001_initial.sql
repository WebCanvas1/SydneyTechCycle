PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS collection_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  organisation_type TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  company TEXT NOT NULL,
  position TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  suburb TEXT NOT NULL,
  postcode TEXT NOT NULL,
  building_level TEXT,
  loading_access TEXT,
  data_destruction TEXT NOT NULL,
  asset_reporting TEXT NOT NULL,
  recurring TEXT NOT NULL,
  preferred_date TEXT,
  access_instructions TEXT,
  additional_info TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS collection_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  request_id INTEGER NOT NULL,
  equipment TEXT NOT NULL,
  quantity TEXT NOT NULL,
  FOREIGN KEY (request_id) REFERENCES collection_requests(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_collection_requests_status ON collection_requests(status);
CREATE INDEX IF NOT EXISTS idx_collection_requests_created_at ON collection_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_collection_items_request_id ON collection_items(request_id);

CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS admin_sessions (
  token_hash TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_admin_sessions_user_id ON admin_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires_at ON admin_sessions(expires_at);
