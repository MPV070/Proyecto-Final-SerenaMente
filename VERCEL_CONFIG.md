# Configuración de Vercel para los 3 Ambientes

## 🔴 DEVELOPMENT (dev.serenamente.miniserver.online)

```
Variables de Entorno:
  NODE_ENV=development
  DOMAIN=dev.serenamente.miniserver.online
  VERCEL_ENV=development
  
Base de Datos:
  Nombre: serena_mente_dev
  Host: [tu-servidor-mysql]
  User: serena_user
  Password: [contraseña-segura]

Deploy:
  - Trigger: Push a rama 'development'
  - Preview URL: Auto-generada por Vercel
  - Production URL: https://dev.serenamente.miniserver.online
```

## 🟡 STAGING (staging.serenamente.miniserver.online)

```
Variables de Entorno:
  NODE_ENV=staging
  DOMAIN=staging.serenamente.miniserver.online
  VERCEL_ENV=staging
  
Base de Datos:
  Nombre: serena_mente_staging
  Host: [tu-servidor-mysql]
  User: serena_user
  Password: [contraseña-segura]

Deploy:
  - Trigger: Push a rama 'staging'
  - Preview URL: Auto-generada por Vercel
  - Production URL: https://staging.serenamente.miniserver.online
```

## 🟢 PRODUCTION (serenamente.miniserver.online)

```
Variables de Entorno:
  NODE_ENV=production
  DOMAIN=serenamente.miniserver.online
  VERCEL_ENV=production
  
Base de Datos:
  Nombre: serena_mente_prod
  Host: [tu-servidor-mysql]
  User: serena_user
  Password: [contraseña-segura-muy-fuerte]

Deploy:
  - Trigger: Push a rama 'main'
  - Preview URL: Auto-generada por Vercel
  - Production URL: https://serenamente.miniserver.online
  - Require Approval: SÍ (recomendado)
```

## 📋 Pasos para Configurar en Vercel

1. **Ir a Dashboard > Project Settings > Environment Variables**

2. **Para cada ambiente (dev, staging, prod), agregar:**
   - NODE_ENV
   - DOMAIN
   - DB_HOST (opcional, si la BD está en la nube)
   - DB_USER
   - DB_PASSWORD
   - DB_NAME

3. **Configurar Domains:**
   - Settings > Domains
   - Agregar: dev.serenamente.miniserver.online
   - Agregar: staging.serenamente.miniserver.online
   - Agregar: serenamente.miniserver.online

4. **Configurar Git Branches:**
   - Production Branch: main
   - Preview Branches: development, staging

5. **Proteger Main Branch (recomendado):**
   - Require Approval para deployments a producción
   - Settings > Git > Protected Branches

## 🔄 Workflow de Deployments

```
Feature Development:
  1. git checkout -b feature/nueva-feature
  2. Hacer cambios
  3. git push origin feature/nueva-feature
  4. Vercel crea Preview URL automáticamente

Testing en Development:
  1. git push origin development
  2. Se deploya automáticamente a dev.serenamente.miniserver.online
  3. Verificar en: https://dev.serenamente.miniserver.online

Testing en Staging:
  1. git push origin staging
  2. Se deploya automáticamente a staging.serenamente.miniserver.online
  3. Verificar en: https://staging.serenamente.miniserver.online

Deploy a Producción:
  1. git push origin main (requiere approval si está configurado)
  2. Se deploya automáticamente a serenamente.miniserver.online
  3. Verificar en: https://serenamente.miniserver.online
```

## 🔐 Variables Secretas

Guardar en Vercel (NO en el código):

- Contraseñas de BD
- API Keys
- Tokens
- Credenciales

## 📊 Monitoreo

Vercel proporciona:

- Build logs
- Runtime logs
- Analytics (plan Pro+)
- Performance metrics
- Deployment history

Acceder en: [https://vercel.com/dashboard/project/[project-id]/logs](https://vercel.com/dashboard/project/[project-id]/logs)
