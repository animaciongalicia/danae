# DANAE Talent — danae-web

Sitio web corporativo de DANAE, agencia de soluciones de talento y operaciones para eventos, hostelería y entornos corporativos.

Stack: [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS, desplegado en Vercel.

## Desarrollo local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev
```

El sitio queda disponible en [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run lint    # ESLint
npm run build   # build de producción
npm start       # servir el build de producción
```

## Variables de entorno

Las variables necesarias están documentadas en `.env.example`. Para desarrollo local, copia ese archivo a `.env.local` y completa los valores. No subas nunca archivos `.env*` al repositorio.

- `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_CONTACT`, `EMAIL_CANDIDATES`: envío de correo de los formularios (Resend). Hasta que estén configuradas, los formularios responden con un error claro en lugar de simular el envío.
- `NEXT_PUBLIC_SITE_URL`: URL pública del sitio (usada en metadatos, robots y sitemap).
- `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_WHATSAPP`: datos de contacto públicos.

## Estructura

- `app/` — rutas (App Router): inicio, soluciones, sectores, contacto, trabaja-con-danae, páginas legales y `api/contact`.
- `components/` — componentes de layout, secciones, formularios y UI.
- `config/` — configuración centralizada del sitio (`site.ts`, `navigation.ts`, `services.ts`).
- `content/` — textos del sitio en español, tipados.
- `lib/` — validación (Zod), envío de email y utilidades.

Los datos de contacto y la información legal están centralizados en `config/site.ts`. Los valores pendientes se dejan vacíos o con marcadores visibles: no se inventa información.

## Despliegue en Vercel

1. Importa el repositorio de GitHub en Vercel (framework detectado: Next.js; no requiere configuración especial de build).
2. Añade en el proyecto de Vercel las variables de entorno de `.env.example` con sus valores reales (Settings → Environment Variables).
3. Despliega. Cada push a la rama principal genera un despliegue de producción; las ramas generan previews.
4. Configura el dominio propio en Settings → Domains cuando esté decidido, y actualiza `NEXT_PUBLIC_SITE_URL` en consecuencia.
