-- SerenaMente Database Initialization
-- This file is automatically executed when the MySQL container starts

USE serena_mente_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_completo VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Preferences table
CREATE TABLE IF NOT EXISTS preferences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  modalidad VARCHAR(100) NOT NULL,
  profesional VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_preferences (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tags table
CREATE TABLE IF NOT EXISTS tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- User tags junction table
CREATE TABLE IF NOT EXISTS user_tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  tag_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_tag (user_id, tag_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Legal agreements table
CREATE TABLE IF NOT EXISTS legal_agreements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  terms_accepted BOOLEAN NOT NULL DEFAULT FALSE,
  privacy_accepted BOOLEAN NOT NULL DEFAULT FALSE,
  data_treatment_accepted BOOLEAN NOT NULL DEFAULT FALSE,
  accepted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_agreement (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default tags
INSERT INTO tags (name) VALUES
  ('Estrés'),
  ('Ansiedad'),
  ('Depresión'),
  ('Insomnio'),
  ('Relaciones'),
  ('Trabajo'),
  ('Familia'),
  ('Autoestima')
ON DUPLICATE KEY UPDATE id=id;

-- Create indexes for better performance
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_preferences_user ON preferences(user_id);
CREATE INDEX idx_user_tags_user ON user_tags(user_id);
CREATE INDEX idx_user_tags_tag ON user_tags(tag_id);
CREATE INDEX idx_legal_user ON legal_agreements(user_id);
