# SkyStay Living Hub

SkyStay Living Hub is a responsive accommodation catalogue for browsing boys', girls', and mixed paying-guest properties, room details, and galleries.

## Core features

- Landing, about, accommodation listing, gallery, and contact pages.
- Separate boys' and girls' accommodation views.
- Property detail pages with images and room types loaded from Supabase.
- Responsive navigation and reusable shadcn/ui components.
- Contact form demonstration with client-side validation and notifications.

## Technology stack

- React 18, TypeScript, and Vite 5
- React Router and TanStack React Query
- Supabase JavaScript client
- Tailwind CSS, shadcn/ui (Radix UI), and Lucide icons

## Prerequisites

- Node.js 20 or newer
- npm (a `package-lock.json` is included)
- Access to the Supabase project and the expected accommodation tables

## Local setup

```bash
git clone https://github.com/varunisrani/skystay-living-hub.git
cd skystay-living-hub
npm ci
npm run dev
```

Other verified scripts are:

```bash
npm run build
npm run preview
npm run lint
```

## Configuration

The current generated Supabase client does not read environment variables; its project URL and publishable client key are embedded in `src/integrations/supabase/client.ts`. No environment variable names are defined by this repository.

## Project structure

```text
src/pages/                  Routed catalogue and information pages
src/components/             Landing-page sections, navigation, footer, and UI primitives
src/services/               Accommodation queries
src/integrations/supabase/  Generated database client and types
src/types/                  Accommodation domain models
supabase/                   Supabase project configuration
```

## Status and limitations

Accommodation content depends on an existing remote Supabase schema; database migrations are not included. The contact form currently logs and clears data in the browser but does not send it to a backend, and the map and social links are placeholders.