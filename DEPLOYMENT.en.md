# 🚀 SerenaMente Deployment Guide

Complete guide to deploy the SerenaMente application on **local docker-compose** and **Vercel** (development, staging, production).

---

## 📋 Prerequisites

- **Docker** and **Docker Compose** installed
- **Node.js 20+** and **npm 11.6.2+** (for local development)
- **Vercel** account access (for cloud deployment)
- Domain configured: `serenamente.miniserver.online`

---

## 🐳 Option 1: Local Deployment with Docker Compose

### Initial Setup

1. **Copy environment file:**

   ```bash
   cp .env.example .env
   ```

2. **Edit environment variables (.env):**

   ```env
   NODE_ENV=development
   APP_PORT=3000                    # Local app port
   DOMAIN=localhost:3000            # For local development
   DB_USER=serena_user
   DB_PASSWORD=serena_password
   DB_NAME=serena_mente_db
   DB_ROOT_PASSWORD=root_password
   ```

### Start Containers

```bash
# Build and start (first time)
npm run docker:dev

# Or with additional flags
docker-compose up -d

# View application logs
npm run docker:logs

# Or all logs
docker-compose logs -f
```

### Access Application

- **Angular App:** [http://localhost:3000](http://localhost:3000)
- **MySQL:** [localhost:3306](localhost:3306) (from the app inside the container)

### Useful Commands

```bash
# Stop containers
npm run docker:down

# Rebuild image
npm run docker:build && npm run docker:up

# Access container shell
npm run docker:shell

# View container status
docker-compose ps

# Clean volumes (WARNING: deletes database data)
docker-compose down -v
```

### Volume Structure

- **mysql_data:** Persistent database
- **node_modules:** Project dependencies
- **dist:** Build artifacts

---

## ☁️ Option 2: Vercel Deployment (3 Environments)

### 2.1 Initial Vercel Setup

1. **Go to [vercel.com](https://vercel.com) and connect your repository**
   - Select the `Proyecto-Final-SerenaMente` repository
   - Select framework: **Angular**

2. **Configure environment variables per environment**

### 2.2 Environment: Development

```.env
URL: https://dev.serenamente.miniserver.online
Variables:
  NODE_ENV=development
  DOMAIN=dev.serenamente.miniserver.online
  DB_HOST=<your-mysql-server>
  DB_USER=serena_user
  DB_PASSWORD=<secure-password>
  DB_NAME=serena_mente_dev
```

**Automatic deploy:** On every push to `development` branch

### 2.3 Environment: Staging

```.env
URL: https://staging.serenamente.miniserver.online
Variables:
  NODE_ENV=staging
  DOMAIN=staging.serenamente.miniserver.online
  DB_HOST=<your-mysql-server>
  DB_USER=serena_user
  DB_PASSWORD=<secure-password>
  DB_NAME=serena_mente_staging
```

**Automatic deploy:** On every push to `staging` branch

### 2.4 Environment: Production

```.env
URL: https://serenamente.miniserver.online
Variables:
  NODE_ENV=production
  DOMAIN=serenamente.miniserver.online
  DB_HOST=<your-mysql-server>
  DB_USER=serena_user
  DB_PASSWORD=<secure-password>
  DB_NAME=serena_mente_prod
```

**Automatic deploy:** On every push to `main` branch

### 2.5 Domain Configuration

1. In Vercel, go to **Settings > Domains**
2. Add domain: `serenamente.miniserver.online`
3. Follow instructions for DNS records
4. Configure SSL/TLS (Vercel handles this automatically)

### 2.6 SSL Certificates

- Vercel provides Let's Encrypt certificates automatically
- No manual configuration required

---

## 🔐 Environment Variables - Security

### Local Development (`.env`)

```env
NODE_ENV=development
APP_PORT=3000
DOMAIN=localhost:3000
DB_USER=serena_user
DB_PASSWORD=serena_password
DB_NAME=serena_mente_db
DB_ROOT_PASSWORD=root_password
```

### On Vercel (Dashboard > Settings > Environment Variables)

- **NEVER** commit sensitive variables
- Use strong passwords (minimum 16 characters)
- Rotate credentials periodically

---

## 📊 Database

### Initial Structure (init.sql)

The database is initialized automatically with:

- **users:** User information
- **preferences:** Preferences (modality, professional)
- **tags:** Available tags (8 initial)
- **user_tags:** User-tags relationship
- **legal_agreements:** Terms acceptance

### Future Migrations

To add database changes:

1. Create SQL file in `scripts/migrations/`
2. Execute manually or create automated script
3. Update `init.sql` for new instances

---

## 🚀 Deployment Process

### Local with Docker Compose

```bash
# 1. Prepare environment
cp .env.example .env

# 2. Start services
npm run docker:dev

# 3. Verify
docker-compose ps
npm run docker:logs

# 4. Stop when done
npm run docker:down
```

### On Vercel

```bash
# 1. Create branches for each environment
git branch development
git branch staging
git branch main

# 2. Push code
git push origin development   # Deploys to dev
git push origin staging       # Deploys to staging
git push origin main          # Deploys to production

# 3. Vercel does automatic deployment
# Check status at https://vercel.com/dashboard
```

---

## 🛠️ Troubleshooting

### Docker Compose

**Problem:** `Port 3000 already in use`

```bash
# Change port in .env
APP_PORT=3001
docker-compose up -d
```

**Problem:** `MySQL connection refused`

```bash
# Wait for MySQL to be ready
docker-compose logs mysql
# Container should show: "ready for connections"
```

**Problem:** Permission denied on `/var/lib/mysql`

```bash
docker-compose down -v
sudo chown 999:999 mysql_data/
docker-compose up -d
```

### Vercel Build Failed

**Problem:** Build fails

```bash
# View logs in Vercel dashboard
# Settings > Deployments > Failed > View Logs

# Redeploy:
# Dashboard > Deployments > Select > Redeploy
```

**Problem:** Environment variables not being applied

```bash
# 1. Check Settings > Environment Variables
# 2. Redeploy (Vercel requires redeploy after variable changes)
# 3. Clear cache: Settings > Advanced > Clear Build Cache
```

---

## 📈 Monitoring

### Local Monitoring

```bash
# Real-time logs
npm run docker:logs

# Service status
docker-compose ps

# Resource usage
docker stats
```

### Vercel Dashboard

- **Dashboard:** [https://vercel.com/dashboard](https://vercel.com/dashboard)
- **Logs:** Deployments > Select > Logs
- **Metrics:** Analytics (Pro+ plan)
- **Webhooks:** Settings > Git > Deploy Hooks

---

## 🔄 Update Code

### Local

```bash
git pull origin master
docker-compose down
npm run docker:dev
```

### Vercel

```bash
git commit -am "message"
git push origin <branch>  # Automatically deploys
```

---

## 📝 Important Notes

- **Persistent Database:** MySQL data is saved in `mysql_data/` volume
- **Don't Commit:** `.env`, database files, `node_modules/`
- **SSL Certificates:** Vercel manages them automatically
- **CDN:** Vercel provides global CDN automatically
- **Backups:** Implement database backup strategy for production

---

## ✓ Pre-Deployment Checklist

- [ ] Environment variables configured (`.env`)
- [ ] Docker installed and running
- [ ] Port 3000 available (or adjust in `.env`)
- [ ] MySQL database working
- [ ] Build without errors: `npm run build`
- [ ] Tests passing: `npm test`
- [ ] Code pushed to repository
- [ ] Domains configured in DNS
- [ ] SSL verified (Vercel handles it)
- [ ] Database backups configured (production)

---

## 📞 Support

For issues or questions:

- Check logs: `npm run docker:logs`
- Verify variables: `docker-compose config`
- Clean everything: `docker-compose down -v && npm run docker:dev`
