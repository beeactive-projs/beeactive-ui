# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fitness platform frontend. Angular monorepo with a shared `core` library and `web` application.

**Tech Stack**: Angular 21, PrimeNG 21 (Lara preset), Tailwind CSS 4 + PrimeUI, ngx-translate, Vitest

## Commands

```bash
ng serve web               # Dev server (port 4200)
ng build web               # Production build
ng build core              # Build core library
ng test                    # Run tests (Vitest)
```

Package manager is **npm**. Prettier config is inline in `package.json`.

## Architecture

### Monorepo Structure

- `projects/core/` — Shared library imported as `'core'`. Contains models, services, stores, guards, interceptors, constants, enums, and environment config. Everything is re-exported from `public-api.ts`.
- `projects/web/` — Main Angular application with pages, layouts, and protected routes.

### Routing

```
/           → Public pages (home, about, blog) via PublicLayout
/auth/*     → Login, signup, password reset
/app/*      → Protected (authGuard) via SidenavLayout
  /app/dashboard, /app/clients, /app/groups, /app/profile, /app/client/*
```

All routes use `loadComponent()` / `loadChildren()` for code splitting.

### API Integration

- Base URL from `environment.apiUrl` (Railway production)
- Auth interceptor adds Bearer token and auto-refreshes on 401
- Endpoints defined in `API_ENDPOINTS` constant
- Import everything from `'core'`: `import { SomeService, SomeModel } from 'core';`

### Auth & State

- `AuthStore` uses Angular signals (`signal()` for writable state, `computed()` for derived)
- Components read store values via `store.value()` in templates
- No NgRx or BehaviorSubject — signals only

### Styling

- Tailwind utility classes in templates (primary)
- SCSS for component-specific styles
- PrimeNG components styled via `styleClass` prop
- Dark mode: CSS class strategy (`.dark` on `<html>`)
- Custom colors: secondary (Midnight Navy), accent (Teal)
- Fonts: Inter (body), Poppins (headings)

## Coding Conventions

### File & Naming

- File names: kebab-case, **no `.component` suffix** (`clients.ts`, `clients.html`)
- Component classes: PascalCase, **no suffix** (`Clients`, `Dashboard`)
- Selector prefix: `bee-` (`bee-clients`, `bee-dashboard`)

### Angular-Specific Rules

- All components are standalone (do NOT set `standalone: true` — it's the default in Angular 21)
- `changeDetection: ChangeDetectionStrategy.OnPush` on every component
- Use `inject()` function, not constructor injection
- Use `input()` and `output()` functions, not `@Input`/`@Output` decorators
- Use `signal()`, `computed()`, `update()`, `set()` — never `mutate` on signals
- Use native control flow (`@if`, `@for`, `@switch`), not `*ngIf`/`*ngFor`/`*ngSwitch`
- Use `class` bindings, not `ngClass`; `style` bindings, not `ngStyle`
- Use `host` object in decorator, not `@HostBinding`/`@HostListener`
- Use `NgOptimizedImage` for all static images (not inline base64)
- Reactive forms preferred over template-driven
- Services: `providedIn: 'root'`, return `Observable` from HttpClient

### PrimeNG

- Template references: `#header`, `#body`, `#footer` (not `pTemplate`)
- Tables: `[lazy]="true"` + `(onLazyLoad)` with `#loadingbody` (p-skeleton) and `#emptymessage`
- Forms: `isFieldInvalid()` / `getFieldError()` pattern, `p-message` for errors

### Accessibility

- Must pass AXE checks and follow WCAG AA (focus management, color contrast, ARIA attributes)
