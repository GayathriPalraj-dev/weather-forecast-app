# PA-004 — Production Implementation Package v1.0

**Document ID:** PA-004  
**Version:** 1.0.0  
**Status:** Approved  
**Owner:** Founder (Gayathri Palraj)  
**Project:** AskSky — Production-Grade Weather Intelligence Platform

---

# 1. Purpose

This document serves as the official implementation handoff package for engineers contributing to AskSky.

Its purpose is to ensure that every implementation follows the approved software architecture, engineering standards, and long-term product vision established by the founder.

This document must be read before implementing any feature.

---

# 2. Project Overview

## Project Name

AskSky — Production-Grade Weather Intelligence Platform

## Founder

Gayathri Palraj

## Project Vision

AskSky is being engineered as a production-grade weather intelligence platform that demonstrates professional software engineering practices rather than functioning as a traditional tutorial or college project.

The project prioritizes:

- Maintainability
- Scalability
- Clean Architecture
- User Experience
- Engineering Excellence
- Long-Term Evolution

Every implementation should contribute toward these goals.

---

# 3. Engineering Foundation

The following engineering documents define AskSky's architecture and standards.

These documents are considered project law.

- Engineering Foundation v1.0
- Product Vision
- Product Principles
- Master Architecture (SSOT)
- Frontend Architecture
- Backend Architecture
- Shared Component Architecture
- Application Layer Architecture
- Folder Architecture
- Engineering Standards
- Security Guidelines
- Performance Guidelines
- Architecture Decision Records (ADRs)

Implementation must conform to these documents.

---

# 4. Technology Stack

## Frontend

- React
- JavaScript (ES6+)
- Vite

## Backend

- Node.js
- Express.js

## Database

- MongoDB (planned)

## APIs

- OpenWeather API

## Version Control

- Git
- GitHub

---

# 5. Approved Frontend Architecture

AskSky follows a Hybrid Frontend Architecture.

```
src/

app/
assets/
components/
constants/
features/
hooks/
pages/
routes/
services/
styles/
utils/
```

Feature-specific implementation follows:

```
features/

weather/

components/
hooks/
services/
```

Application-wide code belongs outside feature modules.

---

# 6. Current Repository Status

Completed:

- Engineering Foundation
- Production Architecture
- Repository Bootstrap
- Folder Structure
- Application Provider Layer
- Weather Module
- Weather Service Layer
- Git Production Workflow

Current Weather Service includes:

- getWeather()
- getForecast()
- getLocationWeather()

---

# 7. Engineering Principles

Every implementation must follow these principles.

## Separation of Concerns

Each module owns one responsibility.

UI components should never communicate directly with APIs.

---

## Single Responsibility Principle

Every file should have one reason to change.

---

## Layered Architecture

```
UI

↓

Hooks

↓

Services

↓

External APIs
```

Responsibilities must never leak across layers.

---

## Feature-First Organization

Feature-specific code belongs inside its feature module.

Shared code belongs in shared folders.

---

## Simplicity First

Prefer simple, readable implementations over unnecessary abstraction.

---

## Incremental Refactoring

Large refactors should be broken into small reviewable steps.

---

# 8. Coding Standards

## Components

Components should:

- be reusable when appropriate
- remain focused
- avoid duplicated logic
- receive data through props

Components should not:

- call APIs
- contain business logic
- manipulate global application state

---

## Services

Services should:

- communicate with APIs
- return data

Services should never:

- update React state
- manipulate UI
- contain presentation logic

---

## Hooks

Hooks should:

- manage state
- coordinate business logic
- orchestrate services

Hooks should not:

- render UI

---

## Styling

Maintain consistent spacing.

Avoid inline styles unless justified.

Prefer reusable styling patterns.

---

# 9. Git Workflow

Every implementation follows:

```
Feature Branch

↓

Implementation

↓

Local Testing

↓

Commit

↓

Push

↓

Pull Request

↓

Architecture Review

↓

Founder Approval

↓

Merge
```

---

## Branch Naming

Examples

```
feat/weather-dashboard

feat/search-module

feat/settings-page

fix/location-service

refactor/weather-service
```

---

## Commit Convention

Examples

```
feat(weather): implement weather dashboard

feat(search): add autocomplete

refactor(weather): extract service layer

fix(location): handle permission denial
```

Semantic commits are mandatory.

---

# 10. Current Folder Structure

```
src/

app/
providers/

assets/

components/
common/
layout/
ui/

constants/

features/
weather/
components/
hooks/
services/

pages/

routes/

styles/

utils/
```

---

# 11. Implementation Rules

Engineers must:

- preserve architecture
- respect folder organization
- prefer reusable code
- keep commits focused
- explain architectural decisions when needed

Engineers must not:

- bypass approved architecture
- introduce unnecessary dependencies
- rename existing architecture without approval
- duplicate business logic
- mix UI and API responsibilities

---

# 12. Definition of Done

Every implementation must satisfy the following.

✅ Builds successfully

✅ No console errors

✅ Architecture respected

✅ Small reviewable commit

✅ Readable code

✅ Maintainable implementation

✅ No duplicated logic

---

# 13. Current Sprint Status

Completed

- Engineering Foundation
- Production Architecture
- Sprint 1.1 Repository Bootstrap
- Sprint 1.2 Weather Module Migration
- Sprint 1.3 Application Layer
- Sprint 1.4 Weather Service Extraction
- Sprint 1.5 Weather Service Completion

Upcoming

Production UI Implementation

---

# 14. Initial Implementation Priorities

Priority 1

- Application Layout
- Header
- Navigation
- Search Experience

Priority 2

- Weather Dashboard
- Forecast Dashboard

Priority 3

- Loading Experience
- Error Experience
- Empty States

Priority 4

- Air Quality
- UV Index
- Weather Alerts
- Favorites

---

# 15. Team Responsibilities

## Founder

Gayathri Palraj

Responsibilities

- Product Vision
- Final Approval
- Business Decisions
- Engineering Direction

---

## Architecture Partner

Responsibilities

- Architecture
- Engineering Reviews
- Sprint Planning
- Code Quality
- Technical Guidance

---

## Senior Software Engineer

Responsibilities

- Production Implementation
- Feature Development
- Safe Refactoring
- Performance Improvements
- Bug Fixes
- Maintainable Code

---

# 16. Success Criteria

Every pull request should improve at least one of the following.

- Readability
- Maintainability
- Scalability
- Performance
- Accessibility
- Developer Experience

If a change improves none of these areas, it should be reconsidered.

---

# 17. Engineering Philosophy

AskSky is not built by writing the maximum amount of code.

It is built by making the best engineering decisions.

Every implementation should answer one question:

> Does this make AskSky easier to understand, maintain, and scale?

If the answer is **No**, the implementation should be redesigned.

---

# 18. Welcome to AskSky

Welcome to the AskSky Engineering Team.

The architecture has already been designed and approved.

Your responsibility is to implement features that respect those architectural decisions while maintaining high engineering quality.

Favor simplicity.

Protect maintainability.

Respect the architecture.

Build software that can grow for years.

Every commit should move AskSky one step closer to becoming a production-grade weather intelligence platform.