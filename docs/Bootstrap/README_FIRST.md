# AskSky Documentation Bootstrap

**Version:** 1.1

**Status:** Approved

**Owner:** Product Owner

**Last Updated:** 28 June 2026

This is the first document to read before making any AskSky repository changes.

AskSky is an existing React + Vite weather application that will be improved incrementally into a premium, production-quality weather product. The current application must not be replaced, regenerated, or rewritten from scratch unless a future approved architectural decision explicitly requires it.

## Mission

AskSky exists to become a premium weather platform that delivers fast, accurate, and beautifully presented weather information through a modern, accessible, and maintainable user experience.

Every improvement should move the product closer to this mission.

## Current Stage

Stage 2 is documentation foundation only.

No application code should be implemented during this stage. Documentation should be created one major document at a time, reviewed, and approved before the next major document begins.

## Definition Of Success

Stage 2 is considered successful when:

- Documentation establishes a single source of truth.
- Future contributors can understand the project without external explanation.
- The architecture supports long-term growth.
- Every implementation decision can reference an approved document.

## Official Project Direction

- AskSky is a dual-theme product.
- Light Theme is the first implementation reference.
- Dark Theme must reuse the same design tokens and component system.
- The AskSky UI/UX Design Specification PDF is the primary design authority.
- Other supplied images are reference material only.
- AQI, UV, weather maps, premium features, and authentication are future roadmap items.
- Version 1 should be architected for extensibility, but those future roadmap features should not be implemented yet.
- PWA readiness should be considered architecturally, but PWA implementation is out of scope for Version 1.

## Working Principles

- Preserve existing working functionality.
- Prefer incremental refactoring over rewriting.
- Keep the project understandable for the developer.
- Make one major change at a time.
- Explain architectural reasoning before implementation.
- Wait for approval after each major document or implementation step.
- Avoid introducing complexity before the product needs it.

## Source Of Truth Priority

When project materials conflict, use this priority order:

1. Direct user approvals and clarifications in the current development thread.
2. AskSky UI/UX Design Specification PDF.
3. Existing repository behavior and source code.
4. Weather Forecast Application Brief.
5. Team Project Instructions.
6. UI reference images and logo assets.
7. Older or stage-specific bootstrap notes.

If a conflict still remains, document the conflict and ask for approval before deciding.

## AI Collaboration

AskSky follows a Codex-First Operating System supported by multiple AI collaborators.

### Responsibilities

**ChatGPT**

- Product Architect.
- Product Strategy Advisor.
- Documentation Advisor.
- Design Reviewer.
- Architecture Reviewer.

**Codex**

- Engineering Lead.
- Software Implementation.
- Documentation Author.
- Repository Maintenance.
- Technical Refactoring.

### Collaboration Rules

When uncertainty exists:

1. Ask for clarification.
2. Document assumptions.
3. Wait for approval before proceeding.

Neither AI should invent product requirements that have not been approved.

Every implementation must remain aligned with the approved documentation and project vision.

## Documentation Standard

Every documentation file created for AskSky should include the following sections whenever applicable:

- Purpose.
- Scope.
- Dependencies.
- Design Decisions.
- Future Considerations.
- Approval Status.
- Last Updated.

This ensures consistency across the entire documentation system and allows every contributor to understand the intent and lifecycle of each document.

## Current Repository Role

The existing repository is the active AskSky codebase.

It currently contains a working weather application with:

- City weather search.
- Current location weather.
- Current weather display.
- Multi-day forecast.
- Light and dark theme toggle.
- Loading and error states.
- Responsive foundations.

These features must continue to work throughout future development unless the project owner approves a specific replacement.

## Version 1 Scope Guardrails

Version 1 should focus on:

- Clean documentation foundation.
- Approved folder architecture.
- Reusable React component architecture.
- Light Theme first visual implementation.
- Shared token system that supports both Light and Dark themes.
- Weather search, geolocation, current weather, and forecast polish.
- Accessibility, responsiveness, and maintainability.

Version 1 should not include:

- Authentication.
- Premium subscription flows.
- Weather maps.
- AQI implementation.
- UV implementation.
- Offline PWA implementation.
- Mobile app packaging.

These items belong in the future roadmap unless explicitly approved earlier.

## Stage 2 Deliverable Sequence

The first approved deliverable is this file:

```text
docs/Bootstrap/README_FIRST.md
```

After this document is reviewed and approved, the next documentation file should be proposed before it is created.

## Approval Rule

Stop after completing each major document.

Do not continue to the next document, create additional folders, or modify application code without explicit approval from the project owner.

## Long-Term Development Philosophy

AskSky is not being developed as a simple weather application.

It is being developed as a long-term software product.

Every design decision, architectural decision, and implementation must consider:

- Maintainability.
- Scalability.
- Reusability.
- Accessibility.
- Performance.
- Future backend integration.
- Future mobile application.
- Progressive Web App readiness.
- Future premium subscription.
- Offline capability.
- Future AI-powered weather insights.

Avoid short-term solutions that create technical debt.

When multiple valid approaches exist, recommend the approach that best supports a production-grade software product. Explain the trade-offs before implementation.

The goal is not merely to complete Version 1.

The goal is to establish a foundation capable of supporting AskSky for many years of future development.

## Notes For Future Contributors

This document serves as the first document every contributor, human or AI, must read before making changes to the AskSky repository.

No implementation should begin until this document has been reviewed and the current project stage is understood.

If this document conflicts with newer approved documentation, follow the project's documented Source Of Truth Priority and request clarification before proceeding.

Once this Version 1.1 document is finalized, treat it as a locked foundational document. Future changes should be rare and made only through explicit approval, because every subsequent document in the AskSky Operating System will build upon it.
