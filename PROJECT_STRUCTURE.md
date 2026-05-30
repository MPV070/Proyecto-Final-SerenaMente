# Estructura del Proyecto - SerenaMente

## 📁 Árbol de Directorios

```
Proyecto-Final-SerenaMente/
├── src/                          # Código fuente de Angular
│   ├── app/
│   │   ├── app.ts               # Componente root
│   │   ├── app.routes.ts        # Rutas principales
│   │   ├── app.config.ts        # Configuración de Angular
│   │   ├── core/                # Componentes compartidos
│   │   │   └── navbar/
│   │   └── pages/               # Páginas principales
│   │       ├── home/            # Página de inicio
│   │       └── register/        # Flujo de registro (4 pasos)
│   │           ├── registro/
│   │           ├── register-preferences/
│   │           ├── register-tags/
│   │           └── register-legal/
│   ├── styles/                  # Estilos globales
│   ├── main.ts                  # Entry point de la app
│   ├── main.server.ts           # Entry point SSR
│   ├── server.ts                # Express server (SSR)
│   └── index.html               # Template HTML
│
├── public/                       # Assets estáticos
│
├── dist/                         # Build output (generado)
├── node_modules/                # Dependencias (generado)
│
├── docker-compose.yml           # Orquestación Docker (Angular + MySQL)
├── Dockerfile                   # Imagen Docker de Angular
├── .dockerignore                # Archivos a excluir en Docker
│
├── vercel.json                  # Configuración Vercel (3 ambientes)
│
├── .env.example                 # Template de variables (no commitear .env)
├── .env.local.example           # Variables para desarrollo local
│
├── init.sql                     # Script para inicializar MySQL
│
├── DEPLOYMENT.md                # Guía de deployment
├── VERCEL_CONFIG.md             # Configuración Vercel en detalle
├── PROJECT_STRUCTURE.md         # Este archivo
│
├── package.json                 # Scripts y dependencias
├── tsconfig.json                # Configuración TypeScript
├── angular.json                 # Configuración Angular CLI
│
├── README.md                    # Documentación principal
└── .git/                        # Historial Git
```

## 🔧 Configuración Clave

### `package.json` - Scripts principales

```json
{
  "scripts": {
    "start": "ng serve",                    # Dev server (localhost:4200)
    "build": "ng build",                    # Build development
    "build:prod": "ng build --configuration production",
    "build:ssr": "ng build --configuration production",
    "docker:dev": "docker-compose up",      # Iniciar dev con Docker
    "docker:up": "docker-compose up -d",    # Iniciar background
    "docker:down": "docker-compose down",   # Parar
    "docker:logs": "docker-compose logs -f" # Ver logs
  }
}
```

### `Dockerfile` - Imagen Docker

- **Builder Stage:** Compila Angular a /dist
- **Runtime Stage:** Ejecuta con Node Alpine
- **Expone puerto:** 4200 (mapeado a 3000 en docker-compose)

### `docker-compose.yml` - Orquestación

**Servicios:**
1. **mysql** - Base de datos
   - Puerto: 3306 (configurable via .env)
   - Volumen: mysql_data/ (persistente)
   - Healthcheck: Verifica conexión

2. **app** - Aplicación Angular
   - Puerto: 3000 -> 4200 (configurable)
   - Ambiente: development/production
   - Volúmenes: node_modules, dist (para optimizar rebuild)
   - Comando: npm start

**Red:** serena-mente-network (comunicación entre servicios)

### `vercel.json` - Configuración Vercel

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

### `init.sql` - Inicialización BD

Crea tablas automáticamente al iniciar MySQL:
- **users** - Información de usuarios
- **preferences** - Modalidad y profesional
- **tags** - Etiquetas disponibles
- **user_tags** - Relación usuario-etiquetas
- **legal_agreements** - Aceptación de términos

Indices y constraints para performance.

## 🚀 Flujo de Deployments

### Local (Docker Compose)

```bash
npm run docker:dev
# http://localhost:3000
```

### Vercel - Development

```bash
git push origin development
# Deploya automáticamente a dev.serenamente.miniserver.online
```

### Vercel - Staging

```bash
git push origin staging
# Deploya automáticamente a staging.serenamente.miniserver.online
```

### Vercel - Production

```bash
git push origin main
# Deploya automáticamente a serenamente.miniserver.online
```

## 📊 Base de Datos

### Tablas Principales

1. **users**
   - id, nombre_completo, email, password_hash
   - Timestamps

2. **preferences**
   - id, user_id, modalidad, profesional
   - Foreign key: users(id)

3. **tags**
   - id, name (etiquetas predefinidas)

4. **user_tags**
   - id, user_id, tag_id
   - Junction table (relación N:N)

5. **legal_agreements**
   - id, user_id
   - terms_accepted, privacy_accepted, data_treatment_accepted

### Índices

- user_email
- preferences_user
- user_tags_user
- user_tags_tag
- legal_user

## 🔐 Seguridad

- Variables sensibles en `.env` (no commiteadas)
- Contraseñas hasheadas en BD
- CORS configurado (si necesita)
- SSL/TLS automático en Vercel
- Validaciones en frontend y backend (cuando exista)

## 📦 Dependencias Clave

### Producción
- @angular/core: 21.0.0
- @angular/router: 21.0.0
- @angular/forms: 21.0.0
- @angular/ssr: 21.0.5 (Server-Side Rendering)
- express: 5.1.0 (Server para SSR)
- rxjs: 7.8.0

### Desarrollo
- @angular/cli: 21.0.5
- typescript: 5.9.2
- vitest: 4.0.8 (Testing)

## 🔄 Variables de Entorno

### Desarrollo Local
```env
NODE_ENV=development
APP_PORT=3000
DOMAIN=localhost:3000
DB_HOST=mysql (dentro de docker-compose)
```

### Vercel (por ambiente)
```env
NODE_ENV=development|staging|production
DOMAIN=dev|staging|serenamente.miniserver.online
DB_HOST=[tu-servidor-mysql-externo]
```

## 📝 Próximos Pasos

1. ✅ Backend API (Node.js/Express con MySQL)
2. ✅ Servicios de autenticación
3. ✅ Servicios de BD
4. ✅ Validaciones en servidor
5. ✅ Tests unitarios e integración
6. ✅ CI/CD pipeline
7. ✅ Monitoring y logging
8. ✅ Backups automáticos

