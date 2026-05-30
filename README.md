# 🧘 SerenaMente - Mental Health Support Platform

A comprehensive Angular 21 application designed to provide mental health support and wellness guidance. Built with modern web technologies and optimized for scalability.

**Available in:** [Español (LEEME.md)](LEEME.md) | English

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [Support](#-support)

---

## ✨ Features

### Current Implementation
- ✅ **4-Step User Registration Flow**
  - Basic registration with email and password validation
  - Preferences selection (modality, professional)
  - Tag selection system
  - Legal terms acceptance

- ✅ **Responsive UI**
  - Navigation bar with routing
  - Home page with CTA to registration
  - Complete form validation

- ✅ **Database Integration**
  - MySQL database with pre-configured schema
  - User management system
  - Preference tracking
  - Tag system for categorization

- ✅ **Deployment Ready**
  - Docker & Docker Compose setup
  - Vercel configuration (3 environments)
  - SSR (Server-Side Rendering) support

### Planned Features
- Backend API with Node.js/Express
- Authentication & authorization
- User dashboard
- Professional matching system
- Session management
- Real-time notifications

---

## 🛠️ Tech Stack

### Frontend
- **Angular:** 21.0.0 (Standalone Components)
- **TypeScript:** 5.9.2
- **SCSS:** Styling
- **RxJS:** 7.8.0
- **Angular Router:** Navigation
- **Angular Forms:** Form handling with validation

### Backend (Ready for Implementation)
- **Express:** 5.1.0
- **Node.js:** 20+ (Alpine in Docker)

### Database
- **MySQL:** 8.0
- **Docker:** Containerization

### Deployment
- **Docker Compose:** Local development
- **Vercel:** Cloud deployment (3 environments)
- **Angular SSR:** Server-side rendering

### Testing
- **Vitest:** 4.0.8 (Unit tests)

---

## 📦 Prerequisites

### Local Development with Docker
- Docker 20.10+ and Docker Compose 1.29+
- Any OS (Windows, macOS, Linux)

### Manual Development (without Docker)
- Node.js 20+
- npm 11.6.2+
- MySQL 8.0+
- Angular CLI 21.0.5+

### Cloud Deployment
- Vercel account
- Git repository (GitHub recommended)

---

## 🚀 Getting Started

### Option 1: Docker Compose (Recommended)

1. **Clone and setup:**
   ```bash
   git clone https://github.com/MPV070/Proyecto-Final-SerenaMente.git
   cd Proyecto-Final-SerenaMente
   cp .env.example .env
   ```

2. **Start services:**
   ```bash
   npm run docker:dev
   ```

3. **Access application:**
   - App: http://localhost:3000
   - Database: localhost:3306

### Option 2: Manual Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Access application:**
   - http://localhost:4200

---

## 💻 Development

### Available Scripts

#### Docker Commands
```bash
npm run docker:dev      # Start with Docker Compose (recommended)
npm run docker:up       # Start in background
npm run docker:down     # Stop all containers
npm run docker:logs     # View application logs
npm run docker:shell    # Access container shell
npm run docker:build    # Rebuild Docker image
npm run docker:prod     # Start in production mode
```

#### Build Commands
```bash
npm start               # Development server (ng serve)
npm run build          # Development build
npm run build:prod     # Production build
npm run build:ssr      # Build with SSR
npm run build:server   # Build Express server
```

#### Testing
```bash
npm test               # Run unit tests with Vitest
```

### Code Structure

```
src/
├── app/
│   ├── app.ts                    # Root component
│   ├── app.routes.ts             # Route definitions
│   ├── core/
│   │   └── navbar/               # Navigation component
│   └── pages/
│       ├── home/                 # Landing page
│       └── register/             # 4-step registration flow
│           ├── registro/         # Step 1: Basic info
│           ├── register-preferences/   # Step 2: Preferences
│           ├── register-tags/    # Step 3: Tags
│           └── register-legal/   # Step 4: Legal
├── styles/                       # Global styles
└── server.ts                     # SSR Express server
```

### Form Validation

All forms include comprehensive validation:
- **Email:** RFC 5322 compliant
- **Password:** Minimum 6 characters, complexity rules
- **Full Name:** Minimum 2 words required
- **Checkboxes:** Required acceptance for terms

---

## 🌐 Deployment

### Local Deployment (Docker Compose)

```bash
cp .env.example .env
npm run docker:dev
```

See [DEPLOYMENT.md](DEPLOYMENT.md) or [DEPLOYMENT.en.md](DEPLOYMENT.en.md) for detailed instructions.

### Cloud Deployment (Vercel)

Three environments ready:

| Environment | URL | Branch | Status |
|---|---|---|---|
| Development | dev.serenamente.miniserver.online | `development` | Auto-deploy |
| Staging | staging.serenamente.miniserver.online | `staging` | Auto-deploy |
| Production | serenamente.miniserver.online | `main` | Auto-deploy |

#### Setup Steps

1. Connect repo to Vercel
2. Configure environment variables per environment
3. Set up custom domains in Vercel settings
4. Push to corresponding branch for automatic deployment

See [VERCEL_CONFIG.md](VERCEL_CONFIG.md) or [VERCEL_CONFIG.en.md](VERCEL_CONFIG.en.md) for detailed configuration.

---

## 📁 Project Structure

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) or [PROJECT_STRUCTURE.en.md](PROJECT_STRUCTURE.en.md) for complete directory structure and file descriptions.

Key directories:
- `src/` - Angular source code
- `public/` - Static assets
- `dist/` - Build output (generated)
- Configuration files: `angular.json`, `tsconfig.json`, `package.json`

---

## 📚 Documentation

### Español 🇪🇸
- [LEEME.md](LEEME.md) - Documentación en español
- [CAMBIOS.md](CAMBIOS.md) - Lista detallada de cambios
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guía de deployment
- [VERCEL_CONFIG.md](VERCEL_CONFIG.md) - Configuración de Vercel
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Estructura del proyecto

### English 🇺🇸
- [CHANGES.md](CHANGES.md) - Detailed list of changes
- [DEPLOYMENT.en.md](DEPLOYMENT.en.md) - Deployment guide
- [VERCEL_CONFIG.en.md](VERCEL_CONFIG.en.md) - Vercel configuration
- [PROJECT_STRUCTURE.en.md](PROJECT_STRUCTURE.en.md) - Project structure

---

## 🔐 Security

- Environment variables in `.env` (not committed)
- Database passwords managed securely
- HTTPS/SSL automatic on Vercel
- Form validation on frontend and backend
- Password hashing ready in database schema

---

## 📊 Database

### Tables
- **users** - User accounts and credentials
- **preferences** - User preferences (modality, professional)
- **tags** - Available tags/categories
- **user_tags** - User tag relationships
- **legal_agreements** - Terms acceptance tracking

### Initial Data
- 8 predefined tags
- Sample indices for performance optimization

---

## 🧪 Testing

Unit tests ready with Vitest:

```bash
npm test
```

Current coverage: Registration forms and validation logic

---

## 🐛 Troubleshooting

### Docker Issues
- Port already in use: Change `APP_PORT` in `.env`
- MySQL connection failed: Wait for healthcheck
- Permission denied: Run `sudo chown 999:999 mysql_data/`

### Vercel Issues
- Build fails: Check logs in Vercel dashboard
- Environment variables not applying: Redeploy after changes
- Domain not working: Verify DNS records

See [DEPLOYMENT.md](DEPLOYMENT.md) for more troubleshooting.

---

## 📝 Environment Variables

### Development (.env)
```env
NODE_ENV=development
APP_PORT=3000
DOMAIN=localhost:3000
DB_USER=serena_user
DB_PASSWORD=serena_password
DB_NAME=serena_mente_db
```

### Production (Vercel Dashboard)
Set per environment in Vercel settings. See [VERCEL_CONFIG.md](VERCEL_CONFIG.md).

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

---

## 📄 License

This project is part of the SerenaMente initiative.

---

## 🎯 Roadmap

- [ ] Backend API (Node.js/Express)
- [ ] Authentication system
- [ ] Professional matching algorithm
- [ ] Session management
- [ ] Payment integration
- [ ] Mobile app
- [ ] Analytics dashboard
- [ ] Push notifications

---

## 📞 Support

For issues, questions, or suggestions:
1. Check the documentation in [DEPLOYMENT.md](DEPLOYMENT.md)
2. Review the project structure in [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
3. Check troubleshooting section in this README
4. Open an issue in the repository

---

## 🙏 Acknowledgments

Built with [Angular 21](https://angular.io/), [Docker](https://www.docker.com/), and [Vercel](https://vercel.com/).

---

**Last updated:** May 30, 2026

**Status:** Development ready, deployment configured
