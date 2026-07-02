# 04_Naming_Conventions.md

> **Engineering Foundation**

---

# AskSky Naming Conventions

> **"Names are one of the most important forms of documentation. A well-chosen name explains intent before a single line of implementation is read."**

---

# Document Information

| Property | Value |
|----------|-------|
| **Document ID** | ASK-DOC-304 |
| **Document Name** | Naming Conventions |
| **Version** | 1.0.0 |
| **Status** | Draft |
| **Project** | AskSky |
| **Owner** | Gayathri Palraj |
| **Maintainer** | AskSky Engineering Team |
| **Classification** | Engineering Standard |
| **Audience** | Software Engineers, Contributors, Reviewers |

---

---

# Architecture Reference

This document follows the official AskSky Master Architecture.

For the complete system architecture, refer to:

docs/Architecture/00_Master_Architecture.md

The Master Architecture is the Single Source of Truth (SSOT) for:

- System Architecture
- Component Responsibilities
- Request Lifecycle
- Decision Lifecycle
- Data Lifecycle
- Security Architecture
- Performance Architecture
- Decision Intelligence Architecture

Whenever implementation guidance conflicts with architectural guidance, the Master Architecture takes precedence.

---

# Purpose

This document establishes the official naming conventions used throughout AskSky.

Consistent naming improves readability, simplifies collaboration, reduces ambiguity, and enables engineers to understand the purpose of code without relying on extensive documentation.

A well-designed naming system allows the codebase to communicate naturally.

---

# Relationship with Engineering Standards

The Engineering Manifesto defines how engineers think.

Engineering Principles define how engineers make decisions.

Code Standards define how engineers write code.

Naming Conventions define how engineers communicate intent through code.

```text
Engineering Manifesto
        │
        ▼
Engineering Principles
        │
        ▼
Code Standards
        │
        ▼
Naming Conventions
        │
        ▼
Implementation
```

Every name should reinforce the engineering standards established throughout AskSky.

---

# Why Naming Matters

Names are encountered more often than implementations.

Every engineer reads:

- Variable names
- Function names
- Component names
- Folder names
- API names
- Database collections
- Services
- Hooks

Poor naming increases cognitive effort.

Clear naming reduces mistakes.

Good naming improves every engineering activity.

---

# Scope

These naming conventions apply to every engineering artifact within AskSky, including:

- Variables
- Constants
- Functions
- Classes
- Interfaces
- Types
- Enums
- React Components
- Custom Hooks
- Context Providers
- Services
- Controllers
- Middleware
- APIs
- Database Collections
- Files
- Folders
- Assets
- Git Branches
- Future Modules

Every contributor should follow these standards consistently.

---

# Naming Philosophy

A name should explain **why something exists**, not simply **what it is**.

Instead of choosing names that describe implementation details, engineers should choose names that describe purpose and responsibility.

The goal is communication—not brevity.

---

# Engineering Communication

Code is a conversation between engineers.

Meaningful names reduce the need for comments and explanations.

A future engineer should understand the intent of a module by reading its name before opening the file.

Well-designed names improve collaboration across the entire project.

---

# Characteristics of Good Names

Every name within AskSky should be:

- Meaningful
- Descriptive
- Consistent
- Predictable
- Domain-focused
- Easy to pronounce
- Easy to search
- Easy to understand

Good names reduce ambiguity.

---

# Naming Hierarchy

When selecting a name, engineers should prioritize the following order.

```text
Meaning
        │
        ▼
Clarity
        │
        ▼
Consistency
        │
        ▼
Predictability
        │
        ▼
Conciseness
```

Meaning always takes priority over shorter names.

---

# Domain-Driven Naming

AskSky follows domain-driven terminology.

Engineering names should reflect the language used throughout the product.

Examples include:

- Weather Forecast
- Air Quality
- UV Index
- Recommendation
- Location
- Forecast
- Weather Alert
- AskSky Intelligence™

Using shared terminology creates consistency between engineering, product, and user experience.

---

# Self-Documenting Code

Well-named code reduces the need for excessive comments.

Instead of explaining what a function does through comments, its name should communicate its responsibility.

Documentation should explain **why**.

Names should explain **what**.

Code should explain **how**.

---

# The Cost of Poor Naming

Poor naming creates long-term engineering problems.

Examples include:

- Difficult code reviews.
- Slower onboarding.
- Increased misunderstandings.
- Duplicate implementations.
- Harder debugging.
- Higher maintenance costs.

Choosing good names is a small investment that produces long-term engineering benefits.

---

# Engineering Mindset

Professional engineers spend time choosing meaningful names.

Before introducing a new identifier, ask:

- Does this clearly communicate purpose?
- Would another engineer understand it immediately?
- Is it consistent with the rest of the project?
- Will this still make sense one year from now?

If the answer is uncertain, reconsider the name before implementation.

---

# Expected Outcomes

Following these naming conventions enables:

- Improved readability.
- Consistent engineering language.
- Easier collaboration.
- Faster onboarding.
- Better maintainability.
- Cleaner architecture.
- More effective code reviews.
- Long-term project consistency.

Naming is one of the simplest ways to improve software quality.

---

# Closing Statement

> **"A good name is one of the simplest forms of engineering documentation. When names clearly express intent, engineers spend less time interpreting code and more time solving meaningful problems."**

---

# End of Part 1
---

# Part 2 — Naming Standards

Engineering principles establish why naming matters.

This section defines the official naming conventions used throughout AskSky.

Every identifier should communicate purpose, remain consistent, and support long-term maintainability.

---

# General Naming Principles

Every name should be:

- Meaningful
- Descriptive
- Consistent
- Searchable
- Easy to pronounce
- Easy to understand

Avoid abbreviations unless they are universally recognized.

Good naming improves readability without requiring additional documentation.

---

# Variable Naming

Variables should describe the data they represent.

Guidelines:

- Use camelCase.
- Use descriptive nouns.
- Avoid abbreviations.
- Avoid generic names such as `data`, `temp`, or `obj`.

Examples:

✅ Good

```typescript
currentWeather

forecastList

selectedLocation

userPreferences

airQualityIndex
```

❌ Avoid

```typescript
data

temp

x

value

obj
```

---

# Function Naming

Functions should describe the action they perform.

Guidelines:

- Begin with a verb.
- Describe one responsibility.
- Keep names concise but meaningful.

Examples:

```typescript
fetchWeather()

calculateUVRisk()

normalizeWeatherData()

generateRecommendations()

saveUserPreferences()

convertTemperature()
```

Good function names explain behavior without reading the implementation.

---

# Class Naming

Classes should represent entities or responsibilities.

Guidelines:

- Use PascalCase.
- Use nouns.
- Avoid unnecessary suffixes.

Examples:

```typescript
WeatherService

RecommendationEngine

LocationManager

ForecastAnalyzer

CacheProvider
```

---

# Interface Naming

Interfaces define contracts.

Guidelines:

- Use PascalCase.
- Avoid unnecessary prefixes unless required by team standards.
- Describe capability or structure.

Examples:

```typescript
WeatherData

Location

ForecastResponse

Recommendation

UserPreferences
```

---

# Type Naming

Custom types should clearly describe the represented data.

Examples:

```typescript
TemperatureUnit

ForecastType

WeatherCondition

AirQualityLevel

RecommendationPriority
```

Types should reflect business concepts rather than implementation details.

---

# Enum Naming

Enums represent fixed sets of values.

Guidelines:

- Use PascalCase for enum names.
- Use PascalCase for members.

Examples:

```typescript
enum WeatherCondition

Sunny

Cloudy

Rainy

Stormy
```

```typescript
enum RecommendationPriority

Low

Medium

High

Critical
```

---

# Component Naming

React components represent user interface elements.

Guidelines:

- Use PascalCase.
- Use nouns.
- One component per file.

Examples:

```typescript
WeatherCard

ForecastSection

SearchBar

LocationSelector

AirQualityCard

RecommendationPanel
```

Component names should reflect what users see.

---

# Custom Hook Naming

Custom hooks must begin with **use**.

Examples:

```typescript
useWeather()

useForecast()

useLocation()

useTheme()

useRecommendations()

useSearchHistory()
```

Hook names should communicate reusable behavior.

---

# Context Naming

Contexts provide shared application state.

Naming:

```typescript
WeatherContext

ThemeContext

LocationContext

AuthenticationContext
```

Providers:

```typescript
WeatherProvider

ThemeProvider

LocationProvider
```

---

# Service Naming

Services contain business logic and external communication.

Examples:

```typescript
WeatherService

ForecastService

RecommendationService

LocationService

NotificationService

AuthenticationService
```

Services should represent business domains.

---

# Controller Naming

Controllers coordinate HTTP requests.

Examples:

```typescript
WeatherController

ForecastController

LocationController

RecommendationController
```

Controllers should remain lightweight.

---

# Middleware Naming

Middleware should describe its responsibility.

Examples:

```typescript
AuthenticationMiddleware

ErrorHandlerMiddleware

ValidationMiddleware

LoggingMiddleware

RateLimitMiddleware
```

---

# API Naming

API endpoints should be resource-oriented.

Good examples:

```text
GET /weather

GET /forecast

GET /air-quality

POST /favorites

PUT /preferences

DELETE /favorites/:id
```

Avoid action-based endpoints.

Prefer resources instead of verbs.

---

# Database Naming

Collections should use plural nouns.

Examples:

```text
users

locations

weather_records

favorites

notifications

preferences
```

Field names should remain descriptive.

Examples:

```text
createdAt

updatedAt

locationName

temperature

weatherCondition
```

---

# File Naming

File names should clearly describe their responsibility.

Examples:

```text
weatherService.ts

forecastCard.tsx

locationContext.tsx

recommendationEngine.ts

temperatureConverter.ts
```

Avoid generic names.

---

# Folder Naming

Folders should group related functionality.

Examples:

```text
components

hooks

services

contexts

utils

features

types

constants
```

Use lowercase with hyphens only when necessary.

---

# Constants

Constant names should use uppercase with underscores.

Examples:

```typescript
DEFAULT_CITY

MAX_SEARCH_RESULTS

API_TIMEOUT

CACHE_DURATION

DEFAULT_LANGUAGE
```

Constants should eliminate magic values.

---

# Environment Variables

Environment variables should be uppercase.

Examples:

```text
OPENWEATHER_API_KEY

MONGODB_URI

JWT_SECRET

REDIS_URL

NODE_ENV
```

Sensitive information must never be committed to source control.

---

# Asset Naming

Assets should describe their purpose.

Examples:

```text
logo.svg

hero-background.webp

weather-icon-rain.svg

forecast-placeholder.png

loading-spinner.svg
```

Avoid version numbers in filenames.

---

# Git Branch Naming

Branch names should communicate engineering intent.

Examples:

```text
feature/weather-dashboard

feature/asksky-intelligence

feature/search

fix/weather-cache

hotfix/login-error

docs/engineering

release/v1.0.0

experiment/ai-recommendations
```

Use lowercase and hyphens.

---

# AskSky Intelligence Naming

All intelligence modules should remain consistent.

Examples:

```text
RecommendationEngine

DecisionEngine

RuleEngine

WeatherEngine

ContextEngine

PersonalizationEngine

NotificationEngine
```

Rules:

```text
HealthRules

TravelRules

FoodRules

PhotographyRules

FitnessRules

StudentRules

OfficeRules
```

This naming convention keeps the intelligence layer organized and scalable.

---

# Naming Examples

Poor naming:

```typescript
const temp = 35;

function calc(){}

const data = {};

class Service {}

function getData(){}
```

Improved naming:

```typescript
const currentTemperature = 35;

function calculateHeatIndex(){}

const normalizedWeatherData = {};

class WeatherService {}

function fetchCurrentWeather(){}
```

Meaningful names reduce the need for comments and improve long-term maintainability.

---

# Naming Decision Checklist

Before introducing a new name, ask:

- Does it clearly communicate purpose?
- Is it consistent with existing names?
- Is it easy to understand?
- Is it searchable?
- Will another engineer understand it immediately?
- Will it still make sense one year from now?

If the answer to any question is "No", reconsider the name before implementation.

---

# Expected Outcomes

Following these naming conventions enables:

- Self-documenting code.
- Faster code reviews.
- Easier onboarding.
- Consistent architecture.
- Reduced misunderstandings.
- Improved maintainability.
- Higher engineering quality.

Consistent naming is one of the simplest and most effective ways to improve software quality.

---

# End of Part 2
---

# Part 3 — Naming Governance

Meaningful naming is a long-term engineering investment.

As AskSky grows, consistent naming becomes essential for maintaining readability, reducing cognitive load, and ensuring effective collaboration across contributors and future versions of the product.

This section defines the governance model that preserves naming consistency throughout the software development lifecycle.

---

# Naming Usage Rules

Every contributor should follow these naming standards before introducing new identifiers into the codebase.

## Rule 1 — Names Must Express Intent

Every name should clearly communicate its responsibility.

Engineers should understand **what something represents** without reading its implementation.

Purpose should always be obvious.

---

## Rule 2 — Consistency Over Creativity

Naming should follow established project conventions rather than individual preferences.

If similar concepts already exist, new names should remain consistent with the existing terminology.

Consistency improves navigation and reduces confusion.

---

## Rule 3 — Use Domain Language

Names should reflect the language used throughout AskSky.

Engineering terminology should match product terminology whenever possible.

Examples:

- Weather Forecast
- Air Quality
- Recommendation
- Location
- Weather Alert
- AskSky Intelligence™

A shared vocabulary improves communication between engineering, design, and product teams.

---

## Rule 4 — Avoid Abbreviations

Avoid shortened names unless they are universally recognized.

Prefer:

```
forecastTemperature
```

Instead of:

```
fcTemp
```

Readable names reduce cognitive effort.

---

## Rule 5 — One Concept, One Name

The same concept should always use the same name throughout the project.

For example:

Use:

```
location
```

everywhere.

Avoid mixing:

```
city

place

destination

region
```

for the same concept.

Consistency improves searchability and understanding.

---

## Rule 6 — Rename When Understanding Improves

Better understanding often leads to better names.

Renaming for improved clarity is encouraged when it increases readability without changing behavior.

---

# Naming Anti-Patterns

The following naming practices are prohibited within AskSky.

---

## ❌ Generic Names

Avoid names such as:

```
data

temp

value

item

obj

info
```

These communicate very little.

---

## ❌ Single Letter Variables

Examples:

```
x

a

b

t
```

These reduce readability unless used in well-understood contexts such as short loops or mathematical formulas.

---

## ❌ Misleading Names

Names should accurately represent responsibility.

Avoid names that suggest functionality different from the actual implementation.

---

## ❌ Inconsistent Terminology

Using different words for the same concept increases confusion.

Standard terminology should remain consistent throughout the project.

---

## ❌ Technology-Centric Names

Avoid exposing implementation details in names.

Prefer:

```
WeatherService
```

instead of

```
AxiosWeatherService
```

Implementation details may change over time.

Business terminology remains stable.

---

## ❌ Redundant Words

Avoid unnecessary repetition.

Example:

```
WeatherForecastDataModelObject
```

Prefer:

```
WeatherForecast
```

Simple names are easier to understand.

---

## ❌ Future-Proof Guessing

Avoid names based on assumptions about future functionality.

Names should represent current responsibility.

Future evolution should be handled through refactoring.

---

# Naming Review Workflow

Every newly introduced name should pass through the following review process.

```text
Create Name

↓

Self Review

↓

Architecture Check

↓

Code Review

↓

Consistency Check

↓

Approval

↓

Merge
```

Naming quality should receive the same attention as implementation quality.

---

# Naming Consistency Checklist

Before introducing a new identifier, verify:

✅ Clearly communicates purpose.

✅ Uses project terminology.

✅ Matches existing naming conventions.

✅ Easy to pronounce.

✅ Easy to search.

✅ Avoids unnecessary abbreviations.

✅ Represents one responsibility.

✅ Remains understandable without additional explanation.

If any answer is "No", reconsider the name.

---

# Refactoring Strategy

Improving names is a valuable engineering activity.

Renaming should occur when:

- Business understanding improves.
- Responsibilities become clearer.
- Ambiguity is removed.
- Consistency increases.
- Readability improves.

Refactoring names should never change observable system behavior.

---

# Naming Scalability Guidelines

As AskSky evolves, naming conventions should continue supporting:

- Additional engineering teams.
- AI-powered recommendation modules.
- New APIs.
- Mobile applications.
- Internationalization.
- Enterprise integrations.
- Future microservices.

A scalable naming system supports scalable software architecture.

---

# Continuous Naming Improvement

Naming conventions should evolve through:

- Code reviews.
- Architecture reviews.
- Engineering discussions.
- Product terminology updates.
- User feedback.
- Domain knowledge improvements.

Names should improve as understanding improves.

---

# Versioning

Naming Conventions follow Semantic Versioning.

| Version | Description |
|----------|-------------|
| **1.x** | Clarifications and documentation improvements |
| **2.x** | New naming standards and engineering terminology |
| **3.x** | Major naming governance revisions |

Version history preserves engineering consistency over time.

---

# Related Documents

This document should be read together with:

- 00_Engineering_Manifesto.md
- 01_Engineering_Principles.md
- 02_Code_Standards.md
- 03_Git_Workflow.md
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

This document establishes the official naming conventions for AskSky.

Every contributor is expected to follow these conventions throughout the software development lifecycle.

Whenever personal naming preferences conflict with project consistency, readability, maintainability, or engineering clarity, the standards defined in this document take precedence.

Clear naming is one of the simplest and most effective ways to improve software quality.

---

# Closing Statement

> **"Good names make software easier to understand. Great names make software easier to evolve. Every identifier should communicate intent clearly, consistently, and confidently—because the best code often begins with the right name."**

---

# Version History

| Version | Date | Description |
|----------|------|-------------|
| **1.0.0** | July 2026 | Initial release establishing the official naming conventions, governance model, review workflow, scalability guidelines, and engineering terminology for AskSky. |

---

# End of Document

The AskSky Naming Conventions establish a shared engineering language that enables contributors to build software that is readable, maintainable, searchable, and consistent across the entire product lifecycle.

By following these standards, every identifier becomes a form of documentation that improves collaboration, reduces ambiguity, and supports long-term engineering excellence.