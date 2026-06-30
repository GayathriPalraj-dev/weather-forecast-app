01_Folder_Architecture.md

Part 1 — Architecture Foundation

1. Document Metadata
2. Purpose
3. Scope
4. Architectural Philosophy
5. Architectural Goals
6. Folder Design Principles
7. Layered Architecture Overview
8. Architectural Boundaries
9. Relationship with Other Documents

────────────────────────────

Part 2 — Folder Architecture

10. Repository Structure

11. Frontend Structure

12. Backend Structure

13. Documentation Structure

14. Asset Organization

15. Shared Resources

16. Dependency Direction

17. Data Flow

18. Future Next.js Migration Strategy

────────────────────────────

Part 3 — Governance

19. Folder Usage Rules

20. Anti-Patterns

21. Architecture Review Workflow

22. Scalability Guidelines

23. Versioning

24. Related Documents

25. Approval Statement
# 01_Folder_Architecture.md

> **Part 1 of 3 – Architecture Foundation**

---

# AskSky Folder Architecture

| Property              | Value                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------- |
| **Document ID**       | ASK-DOC-201                                                                            |
| **Document Name**     | Folder Architecture                                                                    |
| **Version**           | 1.0.0                                                                                  |
| **Status**            | Draft                                                                                  |
| **Project**           | AskSky                                                                                 |
| **Owner**             | Gayathri Palraj                                                                        |
| **Maintainer**        | AskSky Software Architecture Team                                                      |
| **Primary Audience**  | Software Architects, Frontend Engineers, Backend Engineers, Contributors               |
| **Review Cycle**      | Major Architectural Changes                                                            |
| **Classification**    | Software Architecture                                                                  |
| **Related Documents** | Product Principles, Component Guidelines, Backend Architecture, Engineering Principles |

---

# Table of Contents

1. Purpose
2. Scope
3. Architectural Philosophy
4. Architectural Goals
5. Folder Design Principles
6. Layered Architecture
7. Architectural Boundaries
8. Relationship with Other Documents

---

# 1. Purpose

The Folder Architecture defines how the AskSky repository is organized to support long-term scalability, maintainability, collaboration, and future growth.

Folders are more than containers for files—they represent architectural boundaries.

Every directory within AskSky has a clearly defined responsibility, ownership, and relationship with the rest of the system.

A well-structured repository enables developers to understand the project quickly, reduces accidental complexity, and encourages consistent engineering practices.

This document establishes the architectural rules that govern the organization of the entire codebase.

---

# 2. Scope

This document defines:

* Repository organization
* Architectural layering
* Folder responsibilities
* Dependency direction
* Structural boundaries
* Scalability principles
* Future migration readiness

This document intentionally does **not** define:

* React implementation
* Express implementation
* Database schemas
* API contracts
* Component behavior
* Deployment configuration
* Testing implementation

Those implementation details are defined in their respective Architecture and Engineering documents.

---

# 3. Architectural Philosophy

The AskSky repository is organized around **responsibility**, not technology.

Folders should communicate **why something exists**, not simply **what language or framework it uses**.

Every folder should represent a distinct architectural concern with clear ownership and minimal overlap.

The structure should remain understandable whether the project contains ten files or ten thousand files.

The philosophy of the AskSky Folder Architecture can be summarized as:

> **"Every folder should have one responsibility, one owner, and one reason to change."**

This principle minimizes coupling, improves maintainability, and enables independent evolution of different parts of the application.

---

# 4. Architectural Goals

The Folder Architecture is designed to achieve the following objectives:

### Scalability

The repository should support continuous growth without requiring structural redesign.

New features should integrate into the existing architecture instead of introducing parallel structures.

---

### Maintainability

Developers should locate relevant files quickly.

Changes should remain localized, reducing unintended side effects across the codebase.

---

### Readability

The repository should communicate its architecture through organization.

A developer should understand the high-level structure before opening individual files.

---

### Separation of Concerns

Each architectural layer should own a specific responsibility.

Presentation, business logic, infrastructure, configuration, and documentation should remain clearly separated.

---

### Collaboration

A consistent folder structure enables multiple developers to work independently while reducing merge conflicts and duplicated effort.

---

### Future Evolution

The architecture should support:

* Feature expansion
* Technology upgrades
* React → Next.js migration
* Team growth
* Long-term maintenance

without requiring fundamental structural changes.

---

# 5. Folder Design Principles

Every folder within AskSky should follow these principles.

---

## Principle 1 — Responsibility First

Each folder should exist for one architectural purpose.

Folders should never become generic storage locations.

---

## Principle 2 — Predictability

Developers should immediately know where a file belongs.

If multiple folders seem equally appropriate, the architecture should be refined to eliminate ambiguity.

---

## Principle 3 — Low Coupling

Folders should interact through clearly defined boundaries.

Cross-layer dependencies should be minimized.

Independent layers should evolve independently whenever possible.

---

## Principle 4 — High Cohesion

Files grouped within the same folder should solve closely related problems.

A folder should represent one meaningful architectural concept.

---

## Principle 5 — Extensibility

Adding new features should require extending the existing structure rather than restructuring it.

The architecture should encourage growth without increasing complexity.

---

## Principle 6 — Framework Independence

The repository organization should remain valid even if implementation technologies change.

React, Next.js, or future frameworks should fit naturally into the same architectural model.

---

# 6. Layered Architecture

The AskSky repository follows a layered architecture.

Each layer has a distinct responsibility and communicates with adjacent layers through well-defined boundaries.

```text
Documentation
        │
        ▼
Application
        │
        ▼
Features
        │
        ▼
Components
        │
        ▼
Services
        │
        ▼
Infrastructure
```

Higher layers define user-facing behavior.

Lower layers provide reusable capabilities.

Each layer should depend only on layers beneath it.

This directional dependency reduces coupling and improves maintainability.

---

# 7. Architectural Boundaries

Architectural boundaries define where responsibilities begin and end.

These boundaries reduce accidental complexity and preserve long-term maintainability.

Each architectural layer should:

* Own its responsibilities completely.
* Avoid leaking implementation details.
* Communicate through clearly defined interfaces.
* Respect dependency direction.
* Avoid circular relationships.

Whenever uncertainty exists regarding file placement, the architectural boundaries defined by this document take precedence over convenience.

---

# 8. Relationship with Other Documents

The Folder Architecture serves as the structural foundation of the AskSky software architecture.

```text
Product Vision
        │
        ▼
Product Principles
        │
        ▼
Folder Architecture
        │
        ▼
Component Architecture
        │
        ▼
State Management
        │
        ▼
API Architecture
        │
        ▼
Backend Architecture
        │
        ▼
Database Architecture
        │
        ▼
Implementation
```

This document answers:

**"How is the repository organized?"**

Supporting architecture documents answer:

* How components communicate.
* How state flows.
* How APIs are designed.
* How backend services are structured.
* How data is stored.
* How security is enforced.

Together, these documents define the complete technical architecture of AskSky.

---

**End of Part 1**

**Next:** **Part 2 – Repository Structure, Frontend Structure, Backend Structure, Documentation Structure, Shared Resources, Dependency Direction, Data Flow, Next.js Migration Strategy.**

# 01_Folder_Architecture.md

> **Part 2 of 3 – Repository Structure & Architectural Layers**

---

# 9. Repository Structure

## Objective

The AskSky repository is organized as a collection of independent architectural domains.

Each top-level directory represents a major responsibility within the software lifecycle rather than a specific technology.

The repository should remain understandable, scalable, and maintainable throughout the evolution of the product.

---

## Repository Overview

```text
AskSky/
│
├── docs/
├── frontend/
├── backend/
├── database/
├── scripts/
├── postman/
├── design/
├── screenshots/
│
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
└── .github/
```

---

## Repository Responsibilities

| Directory        | Responsibility                                                    |
| ---------------- | ----------------------------------------------------------------- |
| **docs/**        | Product, architecture, engineering, and project documentation.    |
| **frontend/**    | Client-side application and user interface.                       |
| **backend/**     | Server-side application and business services.                    |
| **database/**    | Database schemas, migrations, seed data, and indexing strategies. |
| **scripts/**     | Automation and development utilities.                             |
| **postman/**     | API collections and testing environments.                         |
| **design/**      | Design assets, wireframes, mockups, and UI resources.             |
| **screenshots/** | Portfolio assets and release documentation.                       |
| **.github/**     | Repository governance, workflows, templates, and automation.      |

Every top-level directory should have one clearly defined architectural responsibility.

---

# 10. Frontend Structure

## Objective

The frontend architecture is organized around **features**, **shared components**, and **application services**.

Presentation, business logic, and infrastructure should remain clearly separated.

---

## Frontend Overview

```text
frontend/src/

app/
assets/
components/
features/
hooks/
contexts/
services/
api/
providers/
utils/
constants/
config/
styles/
animations/
routes/
tests/
```

---

## Folder Responsibilities

### app/

Application bootstrap.

Contains application initialization and root composition.

---

### components/

Reusable UI building blocks.

Examples:

* Buttons
* Cards
* Layout
* Navigation
* Shared UI

Components should remain reusable and presentation-focused.

---

### features/

Business functionality.

Examples:

* Weather
* Forecast
* Search
* Authentication
* Favorites
* Settings

Every feature owns its business rules and user interactions.

---

### services/

Business services.

Responsible for orchestrating application behavior.

Services should never render UI.

---

### api/

External communication.

Responsible for:

* HTTP requests
* API clients
* Request configuration
* Response normalization

---

### hooks/

Reusable application logic.

Hooks encapsulate stateful behavior while remaining UI-independent.

---

### providers/

Global application providers.

Examples include theme management, query providers, authentication providers, and other application-wide contexts.

---

### utils/

Pure helper functions.

Utilities should remain deterministic and framework-independent.

---

### config/

Application configuration.

Configuration should remain centralized and environment-aware.

---

### tests/

Frontend testing resources.

Testing should remain independent of implementation structure.

---

# 11. Backend Structure

## Objective

The backend follows a layered architecture that separates transport, business logic, persistence, and infrastructure.

---

## Backend Overview

```text
backend/src/

config/
controllers/
services/
repositories/
models/
routes/
middleware/
validators/
utils/
jobs/
cache/
monitoring/
```

---

## Layer Responsibilities

### routes/

Maps HTTP requests to controllers.

Contains no business logic.

---

### controllers/

Coordinate requests and responses.

Controllers validate incoming requests and delegate business operations.

---

### services/

Business logic layer.

Responsible for implementing product behavior.

---

### repositories/

Data access abstraction.

Repositories communicate with databases while hiding persistence details from higher layers.

---

### models/

Data models representing application entities.

---

### middleware/

Cross-cutting concerns.

Examples:

* Authentication
* Authorization
* Logging
* Rate limiting
* Error handling

---

### validators/

Input validation rules.

Validation should occur before business logic executes.

---

### cache/

Caching strategies.

Responsible for improving application performance without affecting business behavior.

---

# 12. Documentation Structure

## Objective

Documentation is treated as a first-class architectural asset.

It evolves alongside the application and remains the authoritative reference for design, engineering, and implementation decisions.

---

## Documentation Domains

```text
docs/

Bootstrap/
Foundation/
UI_UX/
Architecture/
Engineering/
Product/
Project/
```

---

## Documentation Philosophy

Documentation should answer:

* Why something exists.
* What problem it solves.
* How decisions are made.

Implementation should follow documentation—not replace it.

---

# 13. Shared Resources

Certain resources are intentionally shared across multiple architectural layers.

Examples include:

* Design Tokens
* Environment Variables
* API Contracts
* Shared Constants
* Validation Schemas
* Utility Libraries

Shared resources should remain stable, reusable, and independently versioned whenever appropriate.

---

# 14. Dependency Direction

Architectural dependencies should always move in one direction.

```text
Documentation
        │
        ▼
Frontend / Backend
        │
        ▼
Features
        │
        ▼
Components
        │
        ▼
Services
        │
        ▼
Infrastructure
```

Lower layers should never depend on higher layers.

Business logic should remain independent from presentation.

Infrastructure should support the application—not control it.

Circular dependencies are prohibited.

---

# 15. Data Flow

The AskSky architecture follows a predictable data flow.

```text
User
 │
 ▼
UI Component
 │
 ▼
Feature Module
 │
 ▼
Application Service
 │
 ▼
API Client
 │
 ▼
Backend Controller
 │
 ▼
Business Service
 │
 ▼
Repository
 │
 ▼
Database
 │
 ▼
Response
 │
 ▼
UI Update
```

Every layer has a single responsibility.

Each transition between layers should be intentional and well-defined.

---

# 16. Future Next.js Migration Strategy

## Objective

The Folder Architecture is intentionally designed to support migration from React (Vite) to Next.js with minimal structural disruption.

---

## Migration Principles

Migration should preserve:

* Folder responsibilities.
* Feature organization.
* Business services.
* API abstraction.
* Component hierarchy.
* Documentation structure.

Only framework-specific infrastructure should change.

---

## Migration Expectations

During migration:

* Routing will move to the Next.js App Router.
* Server Components may replace selected client-rendered components.
* API integration may leverage Route Handlers where appropriate.
* Rendering strategies (SSR, SSG, ISR) will evolve based on product requirements.

The architectural principles established in this document remain unchanged.

Frameworks may evolve.

Architecture should endure.

---

**End of Part 2**

**Next:** **Part 3 – Folder Usage Rules, Architecture Anti-Patterns, Architecture Review Workflow, Scalability Guidelines, Versioning, Related Documents, Approval Statement.**
# 01_Folder_Architecture.md

> **Part 3 of 3 – Architecture Governance**

---

# 17. Folder Usage Rules

The AskSky Folder Architecture establishes mandatory rules for organizing the repository.

Every contributor is responsible for maintaining the structural integrity of the codebase.

Repository organization should remain intentional throughout the lifetime of the project.

---

## Single Responsibility

Every folder should represent one architectural responsibility.

A folder should have one clear purpose and one primary reason to change.

Responsibilities should never overlap between folders.

---

## Predictable Placement

Every file should have one obvious location.

If multiple folders appear equally suitable for a file, the architecture should be refined to remove ambiguity.

Developers should never need to guess where new files belong.

---

## Reuse Before Creation

Before creating a new folder, contributors should determine whether an existing architectural domain already satisfies the requirement.

The repository should grow through extension rather than duplication.

---

## Stable Public Structure

Frequently used folders should remain stable over time.

Moving or renaming top-level architectural directories should occur only when justified by significant architectural evolution.

Structural stability improves developer productivity and repository familiarity.

---

## Clear Ownership

Every architectural layer should have clearly defined ownership.

Responsibilities should remain inside their designated boundaries.

Folders should not gradually accumulate unrelated concerns.

---

# 18. Architecture Anti-Patterns

The following practices are intentionally prohibited within the AskSky repository.

---

## Generic Utility Folders

Folders such as:

* misc/
* temp/
* new/
* helpers2/
* random/

create uncertainty and weaken architectural clarity.

Every folder should communicate a meaningful responsibility.

---

## Feature Duplication

The same feature should never exist in multiple architectural locations.

Business functionality should have a single authoritative implementation.

---

## Mixed Responsibilities

Presentation logic, business rules, infrastructure, and configuration should never be combined inside a single architectural layer.

Clear separation of concerns must always be preserved.

---

## Circular Dependencies

Architectural layers should never depend on one another in a circular relationship.

Dependencies should always move in one direction.

This maintains loose coupling and simplifies long-term maintenance.

---

## Framework-Centric Organization

Folders should not be created solely because of framework implementation details.

Architecture should outlive frameworks.

Frameworks evolve.

Architectural principles remain.

---

## Uncontrolled Growth

The repository should never expand through uncontrolled folder creation.

New architectural domains require documented justification.

Growth should increase capability—not complexity.

---

# 19. Architecture Review Workflow

Every architectural change should follow a structured review process before implementation.

---

## Review Lifecycle

```text
Requirement
      │
      ▼
Architecture Proposal
      │
      ▼
Architecture Review
      │
      ▼
Documentation Update
      │
      ▼
Implementation
      │
      ▼
Code Review
      │
      ▼
Testing
      │
      ▼
Merge
```

Architecture should always be reviewed before code is introduced.

Documentation remains the primary source of architectural truth.

---

## Review Criteria

Before approving architectural changes, reviewers should confirm:

* Folder responsibilities remain clear.
* Dependency direction is preserved.
* Architectural boundaries remain intact.
* Existing structures are reused where possible.
* Documentation reflects implementation.
* Scalability has been considered.

---

# 20. Scalability Guidelines

The Folder Architecture is designed to support continuous growth without requiring structural redesign.

---

## Growth Strategy

As AskSky evolves:

* New features should integrate into the existing architecture.
* Existing folder responsibilities should remain stable.
* Shared modules should continue to expand through reuse.
* Structural consistency should be preserved.

The repository should scale by extending established patterns rather than introducing competing structures.

---

## Team Scalability

The architecture should remain understandable regardless of team size.

Whether maintained by one developer or many, contributors should quickly understand:

* Where code belongs.
* How layers communicate.
* Which responsibilities each folder owns.

Predictable architecture improves onboarding and collaboration.

---

## Technology Evolution

Future technology changes—including migration to Next.js, TypeScript, new databases, or cloud infrastructure—should require minimal structural changes.

The architecture should be resilient to implementation changes.

---

# 21. Versioning Policy

The Folder Architecture follows Semantic Versioning.

| Version Type | Purpose                                                                               |
| ------------ | ------------------------------------------------------------------------------------- |
| **Major**    | Fundamental architectural restructuring or repository redesign.                       |
| **Minor**    | Introduction of new architectural layers, responsibilities, or governance principles. |
| **Patch**    | Editorial improvements, clarifications, or documentation corrections.                 |

Architectural versioning should remain independent of application release versions.

---

# 22. Related Documents

## Foundation

* Project Constitution
* Product Vision
* Product Principles
* Project Roadmap

---

## UI / UX

* Design Philosophy
* Design System
* Color System
* Typography System
* Spacing System
* Iconography System
* Component Guidelines
* Animation System

---

## Architecture

* Component Architecture
* State Management
* API Architecture
* Backend Architecture
* Database Architecture
* Security Architecture
* Performance Guidelines
* Deployment Architecture

---

## Engineering

* Engineering Principles
* Code Standards
* Git Workflow
* Testing Strategy
* Naming Conventions
* Code Review Checklist

---

The Folder Architecture serves as the structural foundation for every other architecture document.

Changes to repository organization should be reviewed alongside related documentation to preserve consistency across the software architecture.

---

# 23. Approval Statement

This document establishes the structural architecture of the AskSky repository.

It defines how the project is organized, how responsibilities are separated, how dependencies flow, and how the repository scales throughout the product lifecycle.

Implementation details—including React components, Express services, MongoDB models, framework configuration, and deployment pipelines—are governed by their respective Architecture and Engineering documents.

Whenever implementation convenience conflicts with architectural consistency, maintainability, scalability, or clarity, the principles defined in this document take precedence.

Every contributor is expected to understand and follow the Folder Architecture before introducing new files, folders, or architectural domains into the repository.

---

# 24. Version History

| Version   | Date      | Description                                                                                                                                                |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1.0.0** | June 2026 | Initial Folder Architecture defining repository organization, architectural principles, governance, scalability strategy, and long-term structural vision. |

---

# End of Document

The AskSky Folder Architecture establishes the structural blueprint of the entire software system.

It ensures that every directory, module, and architectural layer has a clear purpose, predictable responsibility, and defined relationship with the rest of the application.

By organizing the repository around responsibilities rather than frameworks, this architecture enables AskSky to evolve from a React-based application into future technologies—including Next.js—while preserving maintainability, scalability, and engineering consistency.

The Folder Architecture is the foundation upon which every future implementation decision will be built.
