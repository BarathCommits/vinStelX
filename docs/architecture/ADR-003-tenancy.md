# ADR-003: Tenancy

- **Status:** Proposed
- **Date:** 2026-10-16

## Context

Single-tenant custom missions limit product leverage. Shared orbital edge platforms (e.g. Trabant-style multi-tenant OEC) enable SaaS economics for constellation operators.

## Decision

**Multi-tenant platform from day one**, with single-tenant acceptable only on the demonstrator.

## Consequences

- Hard isolation, resource quotas, and policy-controlled egress before commercial pilots.
- Security threat model and tenancy spike required in 2026 validation.
- Metering (compute-seconds, downlink GB) designed into the orchestrator.
