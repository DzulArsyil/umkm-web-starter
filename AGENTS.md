# AGENTS.md

## Purpose

This repository is a reusable React + TypeScript starter for Indonesian UMKM websites. AI agents should preserve its reusable, config-driven architecture and avoid turning it into a business-specific implementation.

## Before Changing Code

1. Read `README.md` for the project overview.
2. Read `DOCUMENTATION.md` for architecture, design, SEO, accessibility, and customization rules.
3. Inspect existing components before creating new ones.
4. Check `src/config/site.ts` and `src/data/index.ts` before changing business-facing content.
5. Keep changes scoped to the requested task.

## Architecture Rules

- Prefer reusable components over duplicated page-specific markup.
- Keep business configuration separate from presentation logic.
- Keep content/data separate from reusable UI.
- Reuse existing hooks, utilities, and animation primitives when possible.
- Do not introduce a new dependency when the existing stack can solve the problem.
- Do not migrate frameworks or rewrite the application architecture without an explicit requirement.

## UI/UX Rules

- Preserve the existing warm, professional visual language.
- Keep interfaces mobile-first and responsive.
- Use existing design tokens before adding new values.
- Maintain clear CTA hierarchy, especially for WhatsApp conversion.
- Animations should support hierarchy and feedback rather than distract from content.
- Respect `prefers-reduced-motion`.
- Maintain keyboard accessibility, visible focus states, semantic HTML, and useful labels.

## Content Rules

- Never invent real business contact details, addresses, prices, reviews, or claims.
- Keep demo/sample content clearly identifiable.
- Do not commit secrets, API keys, or private credentials.
- Preserve placeholder values until the user explicitly provides verified business data.

## Validation

Before considering a change complete:

```bash
npm run typecheck
npm run build
```

Then manually review the affected UI at mobile and desktop widths.

## Change Discipline

- Avoid unrelated refactors.
- Prefer small, understandable commits.
- Update documentation when behavior, configuration, architecture, or public usage changes.
- If a decision has long-term architectural impact, record it in `DECISIONS.md`.
