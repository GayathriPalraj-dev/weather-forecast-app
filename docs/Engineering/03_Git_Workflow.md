# Part 2 — Git Workflow in Practice

Engineering principles establish why version control matters.

This section defines how AskSky engineers use Git throughout the software development lifecycle.

Every branch, commit, merge, and release should follow a consistent workflow that promotes collaboration, traceability, maintainability, and engineering excellence.

---

# AskSky Git Workflow

The official Git workflow for AskSky follows a structured development process.

```text
Planning

↓

Create Branch

↓

Development

↓

Self Review

↓

Testing

↓

Commit

↓

Push

↓

Pull Request

↓

Code Review

↓

Approval

↓

Merge

↓

Release
```

Every engineering task should follow this lifecycle.

---

# Repository Structure

AskSky uses a single Git repository containing:

- Frontend
- Backend
- Documentation
- Configuration
- Infrastructure
- Shared Resources

A unified repository simplifies collaboration and maintains a single engineering history.

---

# Branch Strategy

Every branch should have one clear purpose.

The repository follows the following branch strategy.

```text
main

│

├── feature/

├── docs/

├── fix/

├── hotfix/

├── release/

└── experiment/
```

Each branch represents one engineering objective.

---

# Main Branch

The **main** branch always represents the latest stable version of AskSky.

Rules:

- Always deployable.
- Never commit directly.
- Protected branch.
- Reviewed changes only.
- Production-ready state.

The main branch represents the official engineering history.

---

# Feature Branches

Feature branches are created for new product functionality.

Examples:

```text
feature/weather-dashboard

feature/forecast-page

feature/search-location

feature/asksky-intelligence

feature/air-quality

feature/settings
```

Every feature branch should focus on a single feature.

---

# Documentation Branches

Documentation evolves alongside engineering.

Examples:

```text
docs/architecture

docs/engineering

docs/api

docs/design-system

docs/interview-guide
```

Documentation should receive the same engineering discipline as source code.

---

# Bug Fix Branches

Bug fixes should remain isolated.

Examples:

```text
fix/weather-cache

fix/search-results

fix/loading-state

fix/mobile-layout
```

Every fix should address one issue.

---

# Hotfix Branches

Hotfix branches are reserved for production-critical issues.

Examples:

```text
hotfix/api-failure

hotfix/security-patch

hotfix/login-error
```

Hotfixes should remain minimal and focused.

---

# Release Branches

Release branches prepare software for deployment.

Examples:

```text
release/v1.0.0

release/v1.1.0

release/v2.0.0
```

Release branches allow final testing before production deployment.

---

# Experimental Branches

Research and experimentation should never affect stable development.

Examples:

```text
experiment/ai-weather

experiment/new-dashboard

experiment/ml-predictions
```

Experimental work can be discarded without affecting production code.

---

# Branch Naming Convention

Branch names should:

- Be descriptive.
- Use lowercase.
- Separate words using hyphens.
- Represent one engineering objective.

Example:

```text
feature/weather-map

NOT

feature1

weather123

new-feature-final-final
```

Consistency improves repository readability.

---

# Commit Message Convention

AskSky follows Conventional Commits.

Examples:

```text
feat(weather): add forecast cards

feat(search): implement city autocomplete

fix(api): resolve timeout handling

docs(engineering): finalize Git workflow

style(ui): improve spacing

refactor(weather): simplify forecast service

perf(api): optimize caching

test(search): add autocomplete tests

chore(deps): update dependencies
```

Every commit should clearly explain the engineering change.

---

# Commit Philosophy

A commit should:

- Solve one problem.
- Be independently understandable.
- Leave the project stable.
- Be reversible.
- Improve the repository.

Avoid combining unrelated changes into a single commit.

---

# Pull Request Workflow

Every Pull Request should follow:

```text
Feature Complete

↓

Self Review

↓

Run Tests

↓

Update Documentation

↓

Open Pull Request

↓

Engineering Review

↓

Approval

↓

Merge
```

Pull Requests encourage collaboration and improve software quality.

---

# Merge Strategy

AskSky prefers clean repository history.

Merge rules:

- Merge only reviewed branches.
- Resolve conflicts before merging.
- Keep commits meaningful.
- Delete merged branches when appropriate.

Repository history should remain easy to understand.

---

# Conflict Resolution

Merge conflicts should be resolved by:

- Understanding both implementations.
- Preserving architectural consistency.
- Avoiding duplicate logic.
- Re-running tests.
- Reviewing affected documentation.

Never resolve conflicts without understanding the underlying changes.

---

# Version Tagging

Every production release should receive a version tag.

Examples:

```text
v1.0.0

v1.1.0

v1.2.0

v2.0.0
```

Version tags improve traceability and release management.

---

# Release Workflow

The AskSky release lifecycle:

```text
Development

↓

Testing

↓

Release Branch

↓

Quality Verification

↓

Version Tag

↓

Deployment

↓

Production
```

Every release should represent a stable engineering milestone.

---

# GitHub Workflow

GitHub serves as the collaborative engineering platform for AskSky.

GitHub is used for:

- Source Control
- Pull Requests
- Code Reviews
- Documentation
- Releases
- Issue Tracking
- Project Planning

GitHub represents the public engineering history of the project.

---

# Daily Engineering Workflow

Every development session should follow:

```text
Pull Latest Changes

↓

Create Branch

↓

Implement Feature

↓

Self Review

↓

Test

↓

Commit

↓

Push

↓

Pull Request

↓

Merge
```

Consistency improves productivity.

---

# AskSky Repository Workflow

Throughout AskSky development, every engineering contribution should follow:

```text
Idea

↓

Research

↓

Architecture

↓

Implementation

↓

Testing

↓

Documentation

↓

Git Commit

↓

Review

↓

Merge

↓

Deployment
```

Engineering quality begins before writing code and continues after deployment.

---

# Expected Outcomes

Following this workflow enables:

- Predictable collaboration.
- Cleaner repository history.
- Easier debugging.
- Better code reviews.
- Safer releases.
- Reduced merge conflicts.
- Higher engineering confidence.
- Long-term maintainability.

Professional software development depends upon disciplined version control.

---

# End of Part 2
---

# Part 3 — Git Governance

A successful Git workflow depends not only on technical knowledge, but also on disciplined engineering practices.

This section establishes the governance framework that ensures AskSky maintains a clean, understandable, and professional repository throughout its lifecycle.

Git governance promotes engineering consistency, collaboration, traceability, and long-term maintainability.

---

# Git Usage Rules

Every contributor is expected to follow these Git standards throughout development.

## Rule 1 — One Purpose Per Branch

Each branch should represent one engineering objective.

Avoid combining multiple unrelated features within a single branch.

Focused branches simplify development, testing, and review.

---

## Rule 2 — One Purpose Per Commit

Every commit should represent one meaningful engineering change.

Commits should be:

- Small
- Focused
- Understandable
- Reversible

A commit should answer one simple question:

> "What engineering progress was made?"

---

## Rule 3 — Write Meaningful Commit Messages

Commit messages should clearly describe the engineering change.

Good examples:

```
feat(weather): implement forecast dashboard

fix(search): resolve autocomplete issue

docs(engineering): complete Git workflow

refactor(api): simplify weather service
```

Avoid vague commit messages such as:

```
update

changes

fixed

final

latest
```

Repository history should remain understandable years later.

---

## Rule 4 — Protect the Main Branch

The **main** branch represents the official production history.

Rules:

- Never commit directly.
- Merge reviewed work only.
- Keep main deployable.
- Protect repository stability.

The main branch should always remain production-ready.

---

## Rule 5 — Commit Frequently

Large commits make reviews difficult.

Instead:

Develop

↓

Test

↓

Commit

↓

Repeat

Frequent commits improve traceability and reduce risk.

---

## Rule 6 — Documentation Evolves with Code

Whenever implementation changes affect documentation:

Update documentation first.

Documentation and implementation should remain synchronized.

---

# Git Anti-Patterns

The following practices are prohibited within AskSky.

---

## ❌ Direct Commits to Main

Production history should never contain unreviewed work.

Always develop using dedicated branches.

---

## ❌ Large Unrelated Commits

Avoid commits that combine:

- Documentation
- Refactoring
- Features
- Bug fixes

into one engineering change.

Each commit should have one purpose.

---

## ❌ Meaningless Commit Messages

Examples:

```
update

done

final

testing

new changes
```

These provide no engineering value.

---

## ❌ Long-Lived Feature Branches

Feature branches should remain short-lived.

Smaller branches reduce merge conflicts and simplify reviews.

---

## ❌ Ignoring Merge Conflicts

Merge conflicts should never be resolved without understanding both implementations.

Every conflict represents an engineering decision.

---

## ❌ Broken Repository State

Never commit code that:

- Does not build.
- Fails testing.
- Breaks existing functionality.
- Violates project standards.

Repository stability is everyone's responsibility.

---

## ❌ Skipping Reviews

Every meaningful engineering contribution should be reviewed before becoming part of the project.

Reviews improve software quality and knowledge sharing.

---

# Repository Review Workflow

Every engineering contribution follows the official AskSky repository workflow.

```text
Branch Created

↓

Implementation

↓

Self Review

↓

Static Analysis

↓

Testing

↓

Documentation Review

↓

Pull Request

↓

Engineering Review

↓

Approval

↓

Merge

↓

Delete Branch
```

Every stage contributes to repository quality.

---

# Commit Quality Standards

Every commit should satisfy the following checklist.

✅ One engineering objective.

✅ Descriptive commit message.

✅ Readable implementation.

✅ Stable repository state.

✅ Documentation updated when necessary.

✅ Tests executed where applicable.

✅ No unnecessary files.

A commit represents an engineering milestone.

---

# Repository Health Metrics

Repository quality should be evaluated using measurable indicators.

| Category | Objective |
|-----------|-----------|
| Commit Quality | Clear and meaningful history |
| Branch Organization | Predictable branch structure |
| Documentation | Documentation remains current |
| Review Process | Every change reviewed |
| Merge Success | Minimal merge conflicts |
| Repository Stability | Main branch always deployable |
| Traceability | Engineering decisions are easy to follow |
| Maintainability | Clean and organized repository history |

Repository health reflects engineering discipline.

---

# Git Scalability Guidelines

As AskSky grows, the Git workflow should continue supporting:

- Multiple contributors.
- Parallel feature development.
- Release management.
- Hotfix deployment.
- AI feature experimentation.
- Mobile applications.
- Enterprise integrations.
- Future microservices.

A scalable repository supports scalable engineering.

---

# Continuous Repository Improvement

Repository quality should improve continuously through:

- Better commit messages.
- Cleaner branch organization.
- Improved documentation.
- Better review practices.
- Automated quality checks.
- Consistent engineering standards.

Engineering history should become more valuable with every release.

---

# Versioning

Git Workflow follows Semantic Versioning.

| Version | Description |
|----------|-------------|
| **1.x** | Documentation improvements and workflow clarifications |
| **2.x** | Workflow enhancements and new collaboration practices |
| **3.x** | Major repository governance revisions |

Workflow improvements should remain backward understandable whenever possible.

---

# Related Documents

This document should be read together with:

- 00_Engineering_Manifesto.md
- 01_Engineering_Principles.md
- 02_Code_Standards.md
- 04_Naming_Conventions.md
- 05_Testing_Strategy.md
- 06_Code_Review_Checklist.md
- 07_Error_Handling_Standards.md
- 08_Logging_Standards.md
- 09_API_Development_Guidelines.md
- 10_React_Best_Practices.md
- 11_NodeJS_Best_Practices.md
- 12_Database_Best_Practices.md
- 13_Security_Implementation.md
- 14_Performance_Implementation.md

Together these documents establish the complete AskSky Engineering Standards.

---

# Approval Statement

This document establishes the official Git workflow for AskSky.

Every contributor is expected to follow these standards throughout the software development lifecycle.

Whenever personal workflow preferences conflict with repository consistency, engineering traceability, collaboration, or long-term maintainability, the standards defined in this document take precedence.

Git is not simply a version control tool.

It is the permanent engineering history of AskSky.

---

# Closing Statement

> **"Every branch begins an idea. Every commit records progress. Every merge strengthens the product. A disciplined Git workflow transforms individual contributions into a reliable engineering history that future teams can understand, trust, and build upon."**

---

# Version History

| Version | Date | Description |
|----------|------|-------------|
| **1.0.0** | July 2026 | Initial release establishing the official Git workflow, repository governance, branch strategy, commit standards, review process, and engineering collaboration model for AskSky. |

---

# End of Document

The AskSky Git Workflow establishes a professional engineering process for managing source code, documentation, collaboration, releases, and long-term repository quality.

By following this workflow, every contribution becomes part of a structured engineering history that supports maintainability, transparency, and continuous product evolution.