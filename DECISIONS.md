# Architecture Decision Log

This file records decisions that affect the long-term direction of UMKM Web Starter.

## ADR-001 — Config-driven business content

**Decision:** Keep business identity, contact details, location, SEO configuration, and section visibility in configuration files.

**Why:** A starter should be adaptable to different businesses without rewriting reusable UI components.

**Consequence:** Customization is faster and safer, while components remain generic.

## ADR-002 — Content separated from components

**Decision:** Keep services, products, testimonials, FAQs, gallery content, and similar business data in the data layer.

**Why:** Content changes should not require editing presentation components.

**Consequence:** Developers can reuse the same UI for restaurants, cafes, tailors, barbershops, rental businesses, and other local services.

## ADR-003 — WhatsApp as a primary conversion channel

**Decision:** Provide first-class WhatsApp CTAs and pre-filled messages.

**Why:** Many Indonesian UMKM businesses already use WhatsApp as an operational sales channel. A familiar handoff reduces checkout friction compared with requiring a complex custom backend.

**Consequence:** The starter can support ordering/contact flows without requiring a full commerce backend.

## ADR-004 — React + TypeScript + Vite

**Decision:** Use React, TypeScript, and Vite as the core front-end stack.

**Why:** The combination provides component reuse, type safety, and a lightweight development/build experience suitable for a static-first UMKM site.

**Consequence:** The starter remains easy to customize and deploy to common static hosting platforms.

## ADR-005 — Motion as progressive enhancement

**Decision:** Use Framer Motion for purposeful interaction and viewport animation while respecting reduced-motion preferences.

**Why:** Motion can improve hierarchy and perceived responsiveness, but should never block access to content or core actions.

**Consequence:** The UI can feel polished without making animation a functional dependency.

## ADR-006 — No heavy UI framework

**Decision:** Prefer custom reusable components and Tailwind CSS instead of adopting a large component framework.

**Why:** A starter should give developers control over branding and reduce unnecessary bundle/runtime overhead.

**Consequence:** More ownership of component behavior, with a little more implementation responsibility.

## How to Add a Decision

Use this format:

```md
## ADR-XXX — Short title

**Decision:** What was decided.

**Why:** The problem and reasoning.

**Consequence:** What becomes easier, harder, or different because of the decision.
```
