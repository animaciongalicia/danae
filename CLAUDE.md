# CLAUDE.md

## Project overview

DANAHE is a corporate website for a talent management and operational staffing agency.

DANAHE helps companies design, select, organize, coordinate and supervise teams for:

* Events.
* Festivals.
* Concerts.
* Congresses.
* Fairs.
* Hospitality.
* Bars and catering operations.
* Brand activations.
* Corporate environments.
* Administrative and customer-facing roles.

DANAHE must not be presented as a temporary employment agency or as a company that merely supplies workers.

The core positioning is:

DANAHE designs talent and operational solutions that help services work better.

The company works with people, but its commercial value is based on:

* Organization.
* Coordination.
* Reliability.
* Execution.
* Productivity.
* Customer experience.
* Brand image.
* Operational results.
* Economic results when applicable.

The public-facing content of the website is in Spanish.

The project name used in code is `danae-web`.

## Main business message

DANAHE does not simply search for staff.

DANAHE:

* Understands the client's operational need.
* Defines the necessary roles.
* Selects suitable professionals.
* Creates team structures.
* Assigns coordinators and team leaders.
* Organizes schedules and responsibilities.
* Trains teams when necessary.
* Supervises execution.
* Helps reduce incidents.
* Helps improve service quality, image and operational performance.

Main proposition:

Encontramos a las personas adecuadas, construimos el equipo y organizamos la operación para que cada servicio funcione mejor.

Do not use unverified promises or invented performance figures.

Do not claim guaranteed increases in sales, productivity or profitability.

## Technical stack

Use only the following stack unless explicit approval is requested:

* Next.js.
* App Router.
* React.
* TypeScript.
* Tailwind CSS.
* Server Components whenever appropriate.
* Vercel for deployment.
* GitHub for source control.

For forms:

* Native Next.js Route Handlers or Server Actions.
* Zod may be used for validation.
* Resend may be used for email delivery.

Do not add third-party libraries unless they solve a clear requirement.

Before installing a new dependency, explain:

1. Why it is necessary.
2. Why the existing stack cannot solve the requirement.
3. What maintenance or security impact it introduces.

Do not use:

* UI frameworks.
* Page builders.
* Large animation libraries.
* State management libraries.
* Heavy icon packs.
* CMS platforms.
* Databases.
* Authentication.
* Analytics.
* Cookie tracking.
* External scripts.

Unless specifically requested.

## Project structure

Use a clear and maintainable structure similar to:

```text
danae-web/
├── app/
│   ├── contacto/
│   │   └── page.tsx
│   ├── privacidad/
│   │   └── page.tsx
│   ├── privacidad-candidatos/
│   │   └── page.tsx
│   ├── sectores/
│   │   └── page.tsx
│   ├── soluciones/
│   │   └── page.tsx
│   ├── trabaja-con-danahe/
│   │   └── page.tsx
│   ├── aviso-legal/
│   │   └── page.tsx
│   ├── cookies/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── MobileNavigation.tsx
│   ├── sections/
│   │   ├── CallToAction.tsx
│   │   ├── Hero.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── SectorsSection.tsx
│   │   └── SolutionsSection.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   └── CandidateForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── SectionHeading.tsx
│       └── ServiceCard.tsx
├── config/
│   ├── navigation.ts
│   ├── site.ts
│   └── services.ts
├── content/
│   ├── home.ts
│   ├── sectors.ts
│   └── solutions.ts
├── lib/
│   ├── email.ts
│   ├── validation.ts
│   └── utils.ts
├── public/
│   ├── images/
│   └── icons/
├── types/
│   └── index.ts
├── .env.example
├── .gitignore
├── CLAUDE.md
├── README.md
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

The exact structure may be adjusted if there is a clear technical reason, but avoid unnecessary abstraction.

## Website routes

Main navigation:

* `/` — Inicio.
* `/soluciones` — Soluciones.
* `/sectores` — Sectores.
* `/contacto` — Contacto.

Secondary navigation and CTA:

* `/trabaja-con-danahe` — Trabaja con Danahe.

Legal routes:

* `/aviso-legal`.
* `/privacidad`.
* `/cookies`.
* `/privacidad-candidatos`.

Future-ready routes may be planned but must not be created unless requested:

* `/casos-de-exito`.
* `/blog`.
* `/equipo`.
* `/ofertas`.

## Design direction

The website must feel:

* Elegant.
* Professional.
* Clear.
* Calm.
* Modern.
* Trustworthy.
* Structured.
* Human.
* Discreetly feminine.
* Suitable for both corporate clients and event companies.

The website must not feel:

* Ostentatious.
* Luxury-focused.
* Childish.
* Party-oriented.
* Like a temporary employment agency.
* Like a nightlife agency.
* Like a generic HR template.
* Like a startup dashboard.
* Excessively minimalist.
* Excessively animated.

Visual principles:

* Generous spacing.
* Clear hierarchy.
* High readability.
* Warm neutral colors.
* Soft contrast.
* Subtle accent color.
* Clean typography.
* Realistic and professional imagery.
* Mobile-first implementation.
* Fast page loading.
* Accessible contrast and focus states.

Avoid:

* Sliders.
* Carousels.
* Auto-playing video.
* Large hero videos.
* Excessive gradients.
* Glassmorphism.
* Complex animations.
* Decorative motion without purpose.
* Generic stock photos of people pointing at charts.
* Party or nightclub imagery.

## Content tone

All public content must be written in Spanish.

Tone:

* Professional.
* Direct.
* Clear.
* Credible.
* Calm.
* Business-oriented.
* Results-oriented.
* Free from empty claims.

Use language related to:

* Solutions.
* Results.
* Organization.
* Talent.
* Teams.
* Coordination.
* Execution.
* Service quality.
* Efficiency.
* Image.
* Customer experience.
* Reliability.

Avoid:

* “Somos líderes”.
* “Revolucionamos”.
* “Garantizamos resultados”.
* “El mejor talento”.
* “Soluciones 360” without explanation.
* “Excelencia” as a generic claim.
* Invented statistics.
* Invented clients.
* Invented testimonials.
* Invented years of experience.
* Promises of specific financial results without evidence.

## Coding conventions

Code language:

* English.

Public website content:

* Spanish.

File and component names:

* PascalCase for React components.
* camelCase for functions and variables.
* kebab-case for URLs.
* Descriptive names instead of abbreviations.

Examples:

* `SolutionsSection.tsx`
* `ContactForm.tsx`
* `getContactEmail`
* `/trabaja-con-danahe`

React conventions:

* Prefer Server Components.
* Use Client Components only when interactivity requires them.
* Add `"use client"` only where necessary.
* Avoid global state.
* Avoid prop drilling through excessive abstraction.
* Keep components focused and readable.
* Do not create generic components without a real repeated use case.

TypeScript conventions:

* Avoid `any`.
* Define explicit types for content and forms.
* Validate external input.
* Keep types close to their usage unless shared.

CSS conventions:

* Use Tailwind CSS.
* Use CSS variables for brand colors and global design tokens.
* Avoid large arbitrary class strings repeated across components.
* Do not create complex custom CSS when Tailwind is sufficient.

## Configuration

Contact and business information must be centralized.

Create a configuration file such as:

```ts
export const siteConfig = {
  name: "DANAHE Talent",
  legalName: "",
  siteUrl: "",
  email: "",
  candidateEmail: "",
  phone: "",
  whatsapp: "",
  location: "Galicia",
  social: {
    linkedin: "",
    instagram: "",
  },
};
```

Do not spread contact details through multiple components.

Do not invent legal, contact or business information.

Use visible placeholders or empty configuration values where information is missing.

## Environment variables

Do not create, modify or expose `.env.local` without explicit instructions.

Do not commit environment variables.

Do not place secrets in source files.

Use `.env.example` only for documenting required variables.

Potential variables:

```text
RESEND_API_KEY=
EMAIL_FROM=
EMAIL_CONTACT=
EMAIL_CANDIDATES=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_PHONE=
NEXT_PUBLIC_WHATSAPP=
```

Never:

* Print secrets.
* Commit secrets.
* Add real credentials to documentation.
* Upload `.env` files.
* Replace existing environment variables without permission.

## Git and GitHub rules

Do not delete Git history.

Do not force-push.

Do not modify remote configuration without explicit approval.

Do not commit secrets or personal data.

Use small, descriptive commits.

Suggested commit format:

```text
chore: initialize Next.js project
feat: add site navigation and layout
feat: build home page sections
feat: add solutions and sectors pages
feat: implement contact form
docs: update deployment instructions
fix: improve mobile navigation accessibility
```

Before every commit:

* Run lint.
* Run type checking.
* Run build when appropriate.
* Review changed files.
* Confirm no secrets or personal data are included.

## Vercel rules

The project will be deployed on Vercel.

Do not:

* Change DNS records without explicit instructions.
* Add production domains without confirmation.
* Add environment variables without confirmation.
* Assume access to the user's Vercel account.
* Remove existing projects.

Prepare the application for deployment and document the required steps.

## Scope control

Do not invent functionality.

Do not add features that were not requested.

Do not create:

* User accounts.
* Admin panels.
* Databases.
* Candidate management systems.
* Dashboards.
* Job boards.
* Calendars.
* Chatbots.
* CRM integrations.
* Analytics.
* Newsletter systems.
* Automated scoring of candidates.
* AI features.

Unless explicitly requested.

When a requirement is ambiguous:

* Choose the simplest maintainable implementation.
* Explain the assumption.
* Avoid expanding the project scope.

## Quality requirements

Before completing each phase:

* Run the linter.
* Run TypeScript checks.
* Run a production build.
* Test desktop and mobile layouts.
* Check keyboard navigation.
* Check forms where applicable.
* Review semantic heading order.
* Check for broken links.
* Confirm no secrets are exposed.
* Summarize the files created or changed.

Do not redesign completed phases unless explicitly requested or required to fix a defect.
