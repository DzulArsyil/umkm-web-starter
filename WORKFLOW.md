# Development Workflow

A lightweight workflow for maintaining and extending UMKM Web Starter without losing its reusable architecture.

## 1. Understand

Define the requested outcome and identify whether it affects UI, content, configuration, business logic, SEO, accessibility, or deployment.

## 2. Inspect

Before coding, inspect the existing implementation and identify reusable components, data structures, hooks, utilities, and configuration.

## 3. Plan

Write a short implementation plan:

- files to change
- files to create, if necessary
- user-facing behavior
- responsive behavior
- accessibility considerations
- validation steps

## 4. Implement

Build the smallest maintainable change that solves the requirement. Reuse existing primitives and keep configuration/content separated from components.

## 5. Validate

Run:

```bash
npm run typecheck
npm run build
```

For UI changes, also verify:

- mobile layout
- tablet layout
- desktop layout
- keyboard navigation
- reduced-motion behavior
- broken images/links
- CTA behavior

## 6. Review

Check for:

- unnecessary duplication
- hard-coded business data
- accessibility regressions
- layout overflow
- console errors
- unnecessary dependencies
- accidental changes outside the task

## 7. Document

Update the relevant documentation when a change affects:

- setup → `QUICKSTART.md`
- architecture → `DOCUMENTATION.md` / `ARCHITECTURE.md`
- SEO → `SEO.md`
- design behavior → `DOCUMENTATION.md`
- project history → `CHANGELOG.md`
- major architectural reasoning → `DECISIONS.md`

## 8. Ship

Use a descriptive commit message and keep the repository in a buildable state.

### Commit Examples

```text
feat: add service category filtering
fix: improve mobile navigation spacing
docs: update SEO configuration guide
refactor: extract reusable CTA component
```
