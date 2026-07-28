# DANAE Talent — danae-web

Sitio web corporativo de DANAE, agencia de soluciones de talento y operaciones para eventos, hostelería y entornos corporativos.

Stack: [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS + Zod, desplegado en Vercel. Envío de correo con [Resend](https://resend.com).

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

Documentadas en `.env.example`. Para desarrollo local, copia ese archivo a `.env.local` y completa los valores. No subas nunca archivos `.env*` al repositorio.

| Variable | Uso |
| --- | --- |
| `RESEND_API_KEY` | Clave de API de Resend para el envío de correo. |
| `EMAIL_FROM` | Remitente verificado en Resend (`DANAE <hola@dominio.com>`). |
| `EMAIL_CONTACT` | Buzón que recibe las solicitudes comerciales. |
| `EMAIL_CANDIDATES` | Buzón que recibe las candidaturas con CV adjunto. |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (metadatos, robots, sitemap). |
| `NEXT_PUBLIC_PHONE` | Teléfono público; activa el botón de llamada en Contacto. |
| `NEXT_PUBLIC_WHATSAPP` | Número de WhatsApp con prefijo internacional; activa el botón con mensaje precargado. |

Mientras las variables de Resend no estén configuradas, los formularios devuelven un error claro en español (nunca simulan un envío correcto).

## Formularios y envío de correo

- **Solicitud comercial** (`/contacto` → `POST /api/contact`, JSON). Asunto: «Nueva solicitud comercial desde la web de DANAE». Se envía a `EMAIL_CONTACT`.
- **Candidatura** (`/trabaja-con-danae` → `POST /api/candidates`, `multipart/form-data` con CV en PDF adjunto). Asunto: «Nueva candidatura recibida desde la web de DANAE». Se envía a `EMAIL_CANDIDATES`.
- Ambos envían un **correo de confirmación** al remitente y usan `reply_to` para poder responder directamente.

### Configuración de Resend

1. Crea una cuenta en [resend.com](https://resend.com) y genera una API key (Settings → API Keys).
2. **Verifica el dominio** de envío (Domains → Add Domain) añadiendo los registros DNS (SPF y DKIM) que indica Resend. Hasta verificar el dominio solo se puede enviar desde `onboarding@resend.dev` y únicamente al correo de la propia cuenta.
3. Configura `EMAIL_FROM` con un remitente del dominio verificado, por ejemplo `DANAE <hola@danaetalent.com>`.
4. Define `EMAIL_CONTACT` y `EMAIL_CANDIDATES` (pueden ser el mismo buzón).

### Pruebas locales

1. Copia `.env.example` a `.env.local` y rellena las variables de Resend (puedes usar `onboarding@resend.dev` como `EMAIL_FROM` y tu propio correo como destino durante las pruebas).
2. `npm run dev` y envía los formularios desde `/contacto` y `/trabaja-con-danae`.
3. Sin variables configuradas, la API responde `503` con un mensaje claro: útil para probar la interfaz sin enviar correos.

## Currículums (adjuntos PDF)

- **Solo PDF**: se valida extensión, tipo MIME y la cabecera real del archivo (`%PDF-`).
- **Límite de tamaño: 4 MB.** El límite viene del tamaño máximo de petición en Vercel (~4,5 MB); los PDF válidos de CV rara vez lo superan.
- El nombre original del archivo se descarta y se genera uno seguro (`cv-nombre-apellidos.pdf`).
- El CV **no se guarda en ningún sitio**: ni en el repositorio, ni en `public/`, ni en disco. Viaja en la petición y se reenvía como adjunto por Resend.

### Implicaciones de privacidad

- Los CV llegan por correo: quedan almacenados en los buzones de `EMAIL_CANDIDATES` (y en el historial de Resend según su política de retención). Trátalos como datos personales conforme a la política de privacidad de candidatos.
- **Política de eliminación recomendada**: elimina del buzón las candidaturas descartadas y las que superen el plazo de conservación indicado en la política de privacidad; revisa también la retención de logs/emails en el panel de Resend.
- **Alternativa futura** (no implementada; requiere autorización): almacenamiento privado de CVs (por ejemplo Vercel Blob privado o un bucket con acceso restringido) enviando por correo solo un enlace caducable, lo que facilita la eliminación centralizada.

## Seguridad de los formularios

- Validación con Zod en cliente y servidor (mensajes por campo en español).
- Honeypot oculto en ambos formularios: los bots que lo rellenan reciben una respuesta de éxito falsa y no se envía nada.
- Rate limiting en memoria: máximo 5 envíos por IP cada 10 minutos por instancia (en Vercel cada instancia serverless mantiene su propio contador; es una protección básica sin base de datos).
- Sanitización de entradas (caracteres de control, longitudes máximas) y asuntos de correo fijos (sin datos del usuario).
- Mensajes de error genéricos, sin detalles internos; los logs no registran datos personales (solo el código de estado de Resend).
- Sin captcha (no se añade sin autorización expresa).

## Estructura

- `app/` — rutas (App Router): páginas públicas, `api/contact` (comercial) y `api/candidates` (candidaturas con adjunto).
- `components/` — layout, secciones, formularios y UI.
- `config/` — configuración centralizada (`site.ts`, `navigation.ts`).
- `content/` — todos los textos del sitio en español, tipados y editables.
- `lib/` — validación (Zod), correo (Resend), rate limiting y utilidades.

Los datos de contacto y la información legal se centralizan en `config/site.ts`. Los valores pendientes se dejan vacíos o con marcadores visibles: no se inventa información.

## Despliegue en Vercel

1. Importa el repositorio de GitHub en Vercel (framework detectado: Next.js; sin configuración especial de build).
2. Añade las variables de entorno de `.env.example` con sus valores reales (Settings → Environment Variables).
3. Despliega. Cada push a la rama principal genera un despliegue de producción; las ramas generan previews.
4. Configura el dominio propio en Settings → Domains cuando esté decidido, y actualiza `NEXT_PUBLIC_SITE_URL` en consecuencia.
