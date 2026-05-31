# SerenaMente Project Structure

## 📁 Directory Tree

```
Proyecto-Final-SerenaMente/
├── src/                          # Angular source code
│   ├── app/
│   │   ├── app.ts               # Root component
│   │   ├── app.routes.ts        # Main routes
│   │   ├── app.config.ts        # Angular configuration
│   │   ├── core/                # Shared components
│   │   │   └── navbar/
│   │   └── pages/               # Main pages
│   │       ├── home/            # Home page
│   │       └── register/        # Registration flow (4 steps)
│   │           ├── registro/
│   │           ├── register-preferences/
│   │           ├── register-tags/
│   │           └── register-legal/
│   ├── styles/                  # Global styles
│   ├── main.ts                  # App entry point
│   ├── main.server.ts           # SSR entry point
│   ├── server.ts                # Express server (SSR)
│   └── index.html               # HTML template
│
├── public/                       # Static assets
│
├── dist/                         # Build output (generated)
├── node_modules/                # Dependencies (generated)
│
├── docker-compose.yml           # Docker orchestration (Angular + MySQL)
├── Dockerfile                   # Docker image for Angular
├── .dockerignore                # Files to exclude from Docker
│
├── vercel.json                  # Vercel configuration (3 environments)
│
├── .env.example                 # Variables template (don't commit .env)
├── .env.local.example           # Variables for local development
│
├── init.sql                     # MySQL initialization script
│
├── DEPLOYMENT.md                # Deployment guide
├── VERCEL_CONFIG.md             # Detailed Vercel configuration
├── PROJECT_STRUCTURE.md         # This file
│
├── package.json                 # Scripts and dependencies
├── tsconfig.json                # TypeScript configuration
├── angular.json                 # Angular CLI configuration
│
├── README.md                    # Main documentation
└── .git/                        # Git history
```

## 🔧 Key Configuration

### `package.json` - Main Scripts

```json
{
  "scripts": {
    "start": "ng serve",                    # Dev server (localhost:4200)
    "build": "ng build",                    # Development build
    "build:prod": "ng build --configuration production",
    "build:ssr": "ng build --configuration production",
    "docker:dev": "docker-compose up",      # Start dev with Docker
    "docker:up": "docker-compose up -d",    # Start in background
    "docker:down": "docker-compose down",   # Stop
    "docker:logs": "docker-compose logs -f" # View logs
  }
}
```

### `Dockerfile` - Docker Image

- **Builder Stage:** Compiles Angular to /dist
- **Runtime Stage:** Runs with Node Alpine
- **Exposes port:** 4200 (mapped to 3000 in docker-compose)

### `docker-compose.yml` - Orchestration

**Services:**
1. **mysql** - Database
   - Port: 3306 (configurable via .env)
   - Volume: mysql_data/ (persistent)
   - Healthcheck: Verifies connection

2. **app** - Angular Application
   - Port: 3000 -> 4200 (configurable)
   - Environment: development/production
   - Volumes: node_modules, dist (for build optimization)
   - Command: npm start

**Network:** serena-mente-network (service communication)

### `vercel.json` - Vercel Configuration

```json
{
  "builds": [{ "src": "package.json", "use": "@vercel/static-build" }],
  "routes": [{ "src": "^/(?!api).*", "dest": "dist/..." }],
  "env": {
    "development": { "DOMAIN": "@development_domain" },
    "staging": { "DOMAIN": "@staging_domain" },
    "production": { "DOMAIN": "@production_domain" }
  }
}
```

### `init.sql` - Database Initialization

Automatically creates tables on MySQL startup:
- **users** - User information
- **preferences** - Modality and professional preferences
- **tags** - Available tags
- **user_tags** - User-tags relationship
- **legal_agreements** - Terms acceptance

Indices and constraints for performance.

## 🚀 Deployment Flow

### Local (Docker Compose)

```bash
npm run docker:dev
# http://localhost:3000
```

### Vercel - Development

```bash
git push origin development
# Automatically deploys to dev.serenamente.miniserver.online
```

### Vercel - Staging

```bash
git push origin staging
# Automatically deploys to staging.serenamente.miniserver.online
```

### Vercel - Production

```bash
git push origin main
# Automatically deploys to serenamente.miniserver.online
```

## 📊 Database

### Main Tables

1. **users**
   - id, nombre_completo, email, password_hash
   - Timestamps

2. **preferences**
   - id, user_id, modalidad, profesional
   - Foreign key: users(id)

3. **tags**
   - id, name (predefined tags)

4. **user_tags**
   - id, user_id, tag_id
   - Junction table (N:N relationship)

5. **legal_agreements**
   - id, user_id
   - terms_accepted, privacy_accepted, data_treatment_accepted

### Indices

- user_email
- preferences_user
- user_tags_user
- user_tags_tag
- legal_user

## 🔐 Security

- Sensitive variables in `.env` (not committed)
- Hashed passwords in database
- CORS configured (if needed)
- SSL/TLS automatic on Vercel
- Frontend and backend validations (when implemented)

## 📦 Key Dependencies

### Production
- @angular/core: 21.0.0
- @angular/router: 21.0.0
- @angular/forms: 21.0.0
- @angular/ssr: 21.0.5 (Server-Side Rendering)
- express: 5.1.0 (Server for SSR)
- rxjs: 7.8.0

### Development
- @angular/cli: 21.0.5
- typescript: 5.9.2
- vitest: 4.0.8 (Testing)

## 🔄 Environment Variables

### Local Development
```env
NODE_ENV=development
APP_PORT=3000
DOMAIN=localhost:3000
DB_HOST=mysql (inside docker-compose)
```

### Vercel (per environment)
```env
NODE_ENV=development|staging|production
DOMAIN=dev|staging|serenamente.miniserver.online
DB_HOST=[your-external-mysql-server]
```

## 📝 Next Steps

1. ✅ Backend API (Node.js/Express with MySQL)
2. ✅ Authentication services
3. ✅ Database services
4. ✅ Server-side validations
5. ✅ Unit and integration tests
6. ✅ CI/CD pipeline
7. ✅ Monitoring and logging
8. ✅ Automatic backups
