# 🧘 SerenaMente - Plataforma de Apoyo en Salud Mental

Una aplicación Angular 21 integral diseñada para proporcionar apoyo en salud mental y orientación de bienestar. Construida con tecnologías web modernas y optimizada para escalabilidad.

**Disponible en:** Español | [English (README.md)](README.md)

---

## 📋 Tabla de Contenidos

- [🧘 SerenaMente - Plataforma de Apoyo en Salud Mental](#-serenamente---plataforma-de-apoyo-en-salud-mental)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [✨ Características](#-características)
    - [Implementación Actual](#implementación-actual)
    - [Características Planificadas](#características-planificadas)
  - [🛠️ Stack Tecnológico](#️-stack-tecnológico)
    - [Frontend](#frontend)
    - [Backend (Listo para Implementación)](#backend-listo-para-implementación)
    - [Base de Datos](#base-de-datos)
    - [Despliegue](#despliegue)
    - [Pruebas](#pruebas)
  - [📦 Requisitos Previos](#-requisitos-previos)
    - [Desarrollo Local con Docker](#desarrollo-local-con-docker)
    - [Desarrollo Manual (sin Docker)](#desarrollo-manual-sin-docker)
    - [Despliegue en la Nube](#despliegue-en-la-nube)
  - [🚀 Primeros Pasos](#-primeros-pasos)
    - [Opción 1: Docker Compose (Recomendado)](#opción-1-docker-compose-recomendado)
    - [Opción 2: Configuración Manual](#opción-2-configuración-manual)
  - [💻 Desarrollo](#-desarrollo)
    - [Scripts Disponibles](#scripts-disponibles)
      - [Comandos Docker](#comandos-docker)
      - [Comandos de Construcción](#comandos-de-construcción)
      - [Testing DevOps](#testing-devops)
    - [Estructura del Código](#estructura-del-código)
    - [Validación de Formularios](#validación-de-formularios)
  - [🌐 Despliegue](#-despliegue)
    - [Despliegue Local (Docker Compose)](#despliegue-local-docker-compose)
    - [Despliegue en la Nube (Vercel)](#despliegue-en-la-nube-vercel)
      - [Pasos de Configuración](#pasos-de-configuración)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [📚 Documentación](#-documentación)
    - [Español 🇪🇸](#español-)
    - [English 🇺🇸](#english-)
  - [🔐 Seguridad](#-seguridad)
  - [📊 Base de Datos](#-base-de-datos)
    - [Tablas](#tablas)
    - [Datos Iniciales](#datos-iniciales)
  - [🧪 Pruebas](#-pruebas)
  - [🐛 Solución de Problemas](#-solución-de-problemas)
    - [Problemas con Docker](#problemas-con-docker)
    - [Problemas con Vercel](#problemas-con-vercel)
  - [📝 Variables de Entorno](#-variables-de-entorno)
    - [Desarrollo (.env)](#desarrollo-env)
    - [Producción (Panel de Vercel)](#producción-panel-de-vercel)
  - [🤝 Contribuyendo](#-contribuyendo)
  - [📄 Licencia](#-licencia)
  - [🎯 Hoja de Ruta](#-hoja-de-ruta)
  - [📞 Soporte](#-soporte)
  - [🙏 Agradecimientos](#-agradecimientos)

---

## ✨ Características

### Implementación Actual

- ✓ **Flujo de Registro en 4 Pasos**
  - Registro básico con validación de correo electrónico y contraseña
  - Selección de preferencias (modalidad, profesional)
  - Sistema de selección de etiquetas
  - Aceptación de términos legales

- ✓ **Interfaz Responsiva**
  - Barra de navegación con enrutamiento
  - Página de inicio con CTA para registro
  - Validación completa de formularios

- ✓ **Integración de Base de Datos**
  - Base de datos MySQL con esquema preconfigurado
  - Sistema de gestión de usuarios
  - Seguimiento de preferencias
  - Sistema de etiquetado para categorización

- ✓ **Listo para Despliegue**
  - Configuración de Docker y Docker Compose
  - Configuración de Vercel (3 entornos)
  - Soporte SSR (Server-Side Rendering)

### Características Planificadas

- API de Backend con Node.js/Express
- Autenticación y autorización
- Panel de usuario
- Sistema de coincidencia de profesionales
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
- **Docker:** Containerización

### Despliegue

- **Docker Compose:** Desarrollo local
- **Vercel:** Despliegue en la nube (3 entornos)
- **Angular SSR:** Renderizado del lado del servidor

### Pruebas

- **Vitest:** 4.0.8 (Pruebas unitarias)

---

## 📦 Requisitos Previos

### Desarrollo Local con Docker

- Docker 20.10+ y Docker Compose 1.29+
- Cualquier sistema operativo (Windows, macOS, Linux)

### Desarrollo Manual (sin Docker)

- Node.js 20+
- npm 11.6.2+
- MySQL 8.0+
- Angular CLI 21.0.5+

### Despliegue en la Nube

- Cuenta de Vercel
- Repositorio Git (se recomienda GitHub)

---

## 🚀 Primeros Pasos

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

   - Aplicación: [http://localhost:3000](http://localhost:3000)
   - Base de Datos: [localhost:3306](localhost:3306)

### Opción 2: Configuración Manual

1. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. **Configurar entorno:**

   ```bash
   cp .env.example .env
   # Editar .env con tu configuración
   ```

3. **Iniciar servidor de desarrollo:**

   ```bash
   npm start
   ```

4. **Acceder a la aplicación:**

   - [http://localhost:4200](http://localhost:4200)

---

## 💻 Desarrollo

### Scripts Disponibles

#### Comandos Docker

```bash
npm run docker:dev      # Iniciar con Docker Compose (recomendado)
npm run docker:up       # Iniciar en segundo plano
npm run docker:down     # Detener todos los contenedores
npm run docker:logs     # Ver registros de la aplicación
npm run docker:shell    # Acceder a la shell del contenedor
npm run docker:build    # Reconstruir imagen Docker
npm run docker:prod     # Iniciar en modo producción
```

#### Comandos de Construcción

```bash
npm start               # Servidor de desarrollo (ng serve)
npm run build          # Construcción de desarrollo
npm run build:prod     # Construcción de producción
npm run build:ssr      # Construcción con SSR
npm run build:server   # Construcción del servidor Express
```

#### Testing DevOps

```bash
npm test               # Ejecutar pruebas unitarias con Vitest
```

### Estructura del Código

```
src/
├── app/
│   ├── app.ts                    # Componente raíz
│   ├── app.routes.ts             # Definiciones de rutas
│   ├── core/
│   │   └── navbar/               # Componente de navegación
│   └── pages/
│       ├── home/                 # Página de inicio
│       └── register/             # Flujo de registro de 4 pasos
│           ├── registro/         # Paso 1: Información básica
│           ├── register-preferences/   # Paso 2: Preferencias
│           ├── register-tags/    # Paso 3: Etiquetas
│           └── register-legal/   # Paso 4: Términos legales
├── styles/                       # Estilos globales
└── server.ts                     # Servidor Express SSR
```

### Validación de Formularios

Todos los formularios incluyen validación exhaustiva:

- **Correo Electrónico:** Compatible con RFC 5322
- **Contraseña:** Mínimo 6 caracteres, reglas de complejidad
- **Nombre Completo:** Se requieren mínimo 2 palabras
- **Casillas de Verificación:** Se requiere aceptación de términos

---

## 🌐 Despliegue

### Despliegue Local (Docker Compose)

```bash
cp .env.example .env
npm run docker:dev
```

Consulta [DEPLOYMENT.md](DEPLOYMENT.md) para obtener instrucciones detalladas.

### Despliegue en la Nube (Vercel)

Tres entornos listos:

| Entorno    | URL                                   | Rama          | Estado                |
|------------|---------------------------------------|---------------|-----------------------|
| Desarrollo | dev.serenamente.miniserver.online     | `development` | Despliegue automático |
| Staging    | staging.serenamente.miniserver.online | `staging`     | Despliegue automático |
| Producción | serenamente.miniserver.online         | `main`        | Despliegue automático |

#### Pasos de Configuración

1. Conectar repositorio a Vercel
2. Configurar variables de entorno por entorno
3. Configurar dominios personalizados en la configuración de Vercel
4. Hacer push a la rama correspondiente para despliegue automático

Consulta [VERCEL_CONFIG.md](VERCEL_CONFIG.md) para obtener configuración detallada.

---

## 📁 Estructura del Proyecto

Consulta [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) para obtener la estructura completa del directorio y descripciones de archivos.

Directorios clave:

- `src/` - Código fuente de Angular
- `public/` - Activos estáticos
- `dist/` - Salida de construcción (generada)
- Archivos de configuración: `angular.json`, `tsconfig.json`, `package.json`

---

## 📚 Documentación

### Español 🇪🇸

- [LEEME.md](LEEME.md) - Documentación en español
- [CAMBIOS.md](CAMBIOS.md) - Lista detallada de cambios
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guía de deployment
- [VERCEL_CONFIG.md](VERCEL_CONFIG.md) - Configuración de Vercel
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Estructura del proyecto

### English 🇺🇸

- [README.md](README.md) - Documentación en inglés
- [CHANGES.md](CHANGES.md) - Lista detallada de cambios
- [DEPLOYMENT.en.md](DEPLOYMENT.en.md) - Guía de deployment
- [VERCEL_CONFIG.en.md](VERCEL_CONFIG.en.md) - Configuración de Vercel
- [PROJECT_STRUCTURE.en.md](PROJECT_STRUCTURE.en.md) - Estructura del proyecto

---

## 🔐 Seguridad

- Variables de entorno en `.env` (no confirmadas)
- Contraseñas de base de datos gestionadas de forma segura
- HTTPS/SSL automático en Vercel
- Validación de formularios en frontend y backend
- Hash de contraseña listo en esquema de base de datos

---

## 📊 Base de Datos

### Tablas

- **users** - Cuentas y credenciales de usuario
- **preferences** - Preferencias de usuario (modalidad, profesional)
- **tags** - Etiquetas/categorías disponibles
- **user_tags** - Relaciones de etiquetas de usuario
- **legal_agreements** - Seguimiento de aceptación de términos

### Datos Iniciales

- 8 etiquetas predefinidas
- Índices de muestra para optimización de rendimiento

---

## 🧪 Pruebas

Pruebas unitarias listas con Vitest:

```bash
npm test
```

Cobertura actual: Formularios de registro y lógica de validación

---

## 🐛 Solución de Problemas

### Problemas con Docker

- Puerto ya en uso: Cambiar `APP_PORT` en `.env`
- Conexión a MySQL fallida: Esperar a que termine el healthcheck
- Permiso denegado: Ejecutar `sudo chown 999:999 mysql_data/`

### Problemas con Vercel

- Compilación fallida: Verificar registros en panel de Vercel
- Variables de entorno no aplicadas: Volver a desplegar después de cambios
- Dominio no funciona: Verificar registros DNS

Consulta [DEPLOYMENT.md](DEPLOYMENT.md) para más solución de problemas.

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

### Producción (Panel de Vercel)

Configurar por entorno en la configuración de Vercel. Consulta [VERCEL_CONFIG.md](VERCEL_CONFIG.md).

---

## 🤝 Contribuyendo

1. Crear una rama de característica: `git checkout -b feature/tu-caracteristica`
2. Confirmar tus cambios: `git commit -m 'Agregar caracteristica'`
3. Hacer push a la rama: `git push origin feature/tu-caracteristica`
4. Enviar una solicitud de extracción

---

## 📄 Licencia

Este proyecto es parte de la iniciativa SerenaMente.

---

## 🎯 Hoja de Ruta

- [ ] API de Backend (Node.js/Express)
- [ ] Sistema de autenticación
- [ ] Algoritmo de coincidencia de profesionales
- [ ] Gestión de sesiones
- [ ] Integración de pagos
- [ ] Aplicación móvil
- [ ] Panel de análisis
- [ ] Notificaciones push

---

## 📞 Soporte

Para problemas, preguntas o sugerencias:

1. Consulta la documentación en [DEPLOYMENT.md](DEPLOYMENT.md)
2. Revisa la estructura del proyecto en [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
3. Consulta la sección de solución de problemas en este LEEME
4. Abre un issue en el repositorio

---

## 🙏 Agradecimientos

Construido con [Angular 21](https://angular.io/), [Docker](https://www.docker.com/) y [Vercel](https://vercel.com/).

---

**Última actualización:** 30 de mayo de 2026

**Estado:** Listo para desarrollo, despliegue configurado
