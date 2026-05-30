# 🧘 SerenaMente - Plataforma de Apoyo en Salud Mental

Una aplicación completa en Angular 21 diseñada para proporcionar apoyo en salud mental y orientación en bienestar. Construida con tecnologías web modernas y optimizada para escalabilidad.

**Disponible en:** Español | [English (README.md)](README.md)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Requisitos Previos](#-requisitos-previos)
- [Comenzar](#-comenzar)
- [Desarrollo](#-desarrollo)
- [Deployment](#-deployment)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Documentación](#-documentación)
- [Soporte](#-soporte)

---

## ✨ Características

### Implementadas Actualmente
- ✅ **Flujo de Registro en 4 Pasos**
  - Registro básico con validación de email y contraseña
  - Selección de preferencias (modalidad, profesional)
  - Sistema de selección de etiquetas
  - Aceptación de términos legales

- ✅ **Interfaz Responsiva**
  - Barra de navegación con enrutamiento
  - Página de inicio con CTA al registro
  - Validación completa de formularios

- ✅ **Integración de Base de Datos**
  - Base de datos MySQL con esquema preconfigurado
  - Sistema de gestión de usuarios
  - Seguimiento de preferencias
  - Sistema de etiquetado para categorización

- ✅ **Listo para Deployment**
  - Setup de Docker & Docker Compose
  - Configuración de Vercel (3 ambientes)
  - Soporte SSR (Server-Side Rendering)

### Características Planeadas
- API Backend con Node.js/Express
- Sistema de autenticación y autorización
- Dashboard de usuario
- Sistema de búsqueda de profesional
- Gestión de sesiones
- Notificaciones en tiempo real

---

## 🛠️ Stack Tecnológico

### Frontend
- **Angular:** 21.0.0 (Componentes Standalone)
- **TypeScript:** 5.9.2
- **SCSS:** Estilos
- **RxJS:** 7.8.0
- **Angular Router:** Navegación
- **Angular Forms:** Manejo de formularios con validación

### Backend (Listo para Implementación)
- **Express:** 5.1.0
- **Node.js:** 20+ (Alpine en Docker)

### Base de Datos
- **MySQL:** 8.0
- **Docker:** Contenedorización

### Deployment
- **Docker Compose:** Desarrollo local
- **Vercel:** Deployment en la nube (3 ambientes)
- **Angular SSR:** Renderizado en servidor

### Testing
- **Vitest:** 4.0.8 (Tests unitarios)

---

## 📦 Requisitos Previos

### Desarrollo Local con Docker
- Docker 20.10+ y Docker Compose 1.29+
- Cualquier OS (Windows, macOS, Linux)

### Desarrollo Manual (sin Docker)
- Node.js 20+
- npm 11.6.2+
- MySQL 8.0+
- Angular CLI 21.0.5+

### Deployment en la Nube
- Cuenta en Vercel
- Repositorio Git (recomendado GitHub)

---

## 🚀 Comenzar

### Opción 1: Docker Compose (Recomendado)

1. **Clonar y configurar:**
   ```bash
   git clone https://github.com/MPV070/Proyecto-Final-SerenaMente.git
   cd Proyecto-Final-SerenaMente
   cp .env.example .env
   ```

2. **Iniciar servicios:**
   ```bash
   npm run docker:dev
   ```

3. **Acceder a la aplicación:**
   - App: http://localhost:3000
   - Base de Datos: localhost:3306

### Opción 2: Setup Manual

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar entorno:**
   ```bash
   cp .env.example .env
   # Editar .env con tus valores
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm start
   ```

4. **Acceder a la aplicación:**
   - http://localhost:4200

---

## 💻 Desarrollo

### Scripts Disponibles

#### Comandos Docker
```bash
npm run docker:dev      # Iniciar con Docker Compose (recomendado)
npm run docker:up       # Iniciar en background
npm run docker:down     # Detener todos los contenedores
npm run docker:logs     # Ver logs de la aplicación
npm run docker:shell    # Acceder al shell del contenedor
npm run docker:build    # Reconstruir imagen Docker
npm run docker:prod     # Iniciar en modo producción
```

#### Comandos de Build
```bash
npm start               # Servidor de desarrollo (ng serve)
npm run build          # Build de desarrollo
npm run build:prod     # Build de producción
npm run build:ssr      # Build con SSR
npm run build:server   # Build del servidor Express
```

#### Testing
```bash
npm test               # Ejecutar tests unitarios con Vitest
```

### Estructura del Código

```
src/
├── app/
│   ├── app.ts                    # Componente raíz
│   ├── app.routes.ts             # Definición de rutas
│   ├── core/
│   │   └── navbar/               # Componente de navegación
│   └── pages/
│       ├── home/                 # Página de inicio
│       └── register/             # Flujo de registro (4 pasos)
│           ├── registro/         # Paso 1: Info básica
│           ├── register-preferences/   # Paso 2: Preferencias
│           ├── register-tags/    # Paso 3: Etiquetas
│           └── register-legal/   # Paso 4: Legal
├── styles/                       # Estilos globales
└── server.ts                     # Servidor Express para SSR
```

### Validación de Formularios

Todos los formularios incluyen validación completa:
- **Email:** Conforme a RFC 5322
- **Contraseña:** Mínimo 6 caracteres, reglas de complejidad
- **Nombre Completo:** Mínimo 2 palabras requeridas
- **Checkboxes:** Aceptación requerida de términos

---

## 🌐 Deployment

### Deployment Local (Docker Compose)

```bash
cp .env.example .env
npm run docker:dev
```

Ver [DEPLOYMENT.md](DEPLOYMENT.md) para instrucciones detalladas.

### Deployment en la Nube (Vercel)

Tres ambientes listos:

| Ambiente | URL | Rama | Estado |
|---|---|---|---|
| Development | dev.serenamente.miniserver.online | `development` | Auto-deploy |
| Staging | staging.serenamente.miniserver.online | `staging` | Auto-deploy |
| Production | serenamente.miniserver.online | `main` | Auto-deploy |

#### Pasos de Setup

1. Conectar repo a Vercel
2. Configurar variables de entorno por ambiente
3. Configurar dominios personalizados en Vercel
4. Pushear a la rama correspondiente para deployment automático

Ver [VERCEL_CONFIG.md](VERCEL_CONFIG.md) para configuración detallada.

---

## 📁 Estructura del Proyecto

Ver [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) para la estructura completa del directorio y descripciones de archivos.

Directorios clave:
- `src/` - Código fuente de Angular
- `public/` - Assets estáticos
- `dist/` - Output del build (generado)
- Archivos de configuración: `angular.json`, `tsconfig.json`, `package.json`

---

## 📚 Documentación

### En Español 🇪🇸
- [CAMBIOS.md](CAMBIOS.md) - Lista detallada de cambios
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guía de deployment
- [VERCEL_CONFIG.md](VERCEL_CONFIG.md) - Configuración de Vercel
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Estructura del proyecto

### En Inglés 🇺🇸
- [CHANGES.md](CHANGES.md) - Detailed list of changes
- [DEPLOYMENT.en.md](DEPLOYMENT.en.md) - Deployment guide
- [VERCEL_CONFIG.en.md](VERCEL_CONFIG.en.md) - Vercel configuration
- [PROJECT_STRUCTURE.en.md](PROJECT_STRUCTURE.en.md) - Project structure

---

## 🔐 Seguridad

- Variables de entorno en `.env` (no commiteadas)
- Contraseñas de base de datos gestionadas seguramente
- HTTPS/SSL automático en Vercel
- Validación de formularios en frontend y backend
- Hashing de contraseñas listo en esquema de BD

---

## 📊 Base de Datos

### Tablas
- **users** - Cuentas de usuario y credenciales
- **preferences** - Preferencias del usuario (modalidad, profesional)
- **tags** - Etiquetas disponibles/categorías
- **user_tags** - Relaciones de etiquetas de usuario
- **legal_agreements** - Seguimiento de aceptación de términos

### Datos Iniciales
- 8 etiquetas predefinidas
- Índices de ejemplo para optimización de rendimiento

---

## 🧪 Testing

Tests unitarios listos con Vitest:

```bash
npm test
```

Cobertura actual: Formularios de registro y lógica de validación

---

## 🐛 Troubleshooting

### Problemas con Docker
- Puerto ya en uso: Cambiar `APP_PORT` en `.env`
- Conexión a MySQL fallida: Esperar al healthcheck
- Permiso denegado: Ejecutar `sudo chown 999:999 mysql_data/`

### Problemas con Vercel
- Build falla: Revisar logs en dashboard de Vercel
- Variables de entorno no aplican: Redeploy después de cambios
- Dominio no funciona: Verificar registros DNS

Ver [DEPLOYMENT.md](DEPLOYMENT.md) para más troubleshooting.

---

## 📝 Variables de Entorno

### Desarrollo (.env)
```env
NODE_ENV=development
APP_PORT=3000
DOMAIN=localhost:3000
DB_USER=serena_user
DB_PASSWORD=serena_password
DB_NAME=serena_mente_db
```

### Producción (Vercel Dashboard)
Configurar por ambiente en los settings de Vercel. Ver [VERCEL_CONFIG.md](VERCEL_CONFIG.md).

---

## 🤝 Contribuyendo

1. Crear rama de feature: `git checkout -b feature/tu-feature`
2. Hacer commit de cambios: `git commit -m 'Agregar feature'`
3. Push a la rama: `git push origin feature/tu-feature`
4. Enviar pull request

---

## 📄 Licencia

Este proyecto es parte de la iniciativa SerenaMente.

---

## 🎯 Roadmap

- [ ] API Backend (Node.js/Express)
- [ ] Sistema de autenticación
- [ ] Algoritmo de búsqueda de profesional
- [ ] Gestión de sesiones
- [ ] Integración de pagos
- [ ] App móvil
- [ ] Dashboard de analytics
- [ ] Notificaciones push

---

## 📞 Soporte

Para problemas, preguntas o sugerencias:
1. Revisar la documentación en [DEPLOYMENT.md](DEPLOYMENT.md)
2. Consultar la estructura del proyecto en [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
3. Revisar la sección de troubleshooting en este LEEME
4. Abrir un issue en el repositorio

---

## 🙏 Agradecimientos

Construido con [Angular 21](https://angular.io/), [Docker](https://www.docker.com/) y [Vercel](https://vercel.com/).

---

**Última actualización:** 30 de mayo de 2026

**Estado:** Desarrollo listo, deployment configurado
