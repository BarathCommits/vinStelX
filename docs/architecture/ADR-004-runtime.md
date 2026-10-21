# ADR-004: Runtime

- **Status:** Proposed
- **Date:** 2026-10-16

## Context

Containers match terrestrial ML tooling. Serverless FaaS with state replication (e.g. Komet) eases service migration under LEO orbital motion.

## Decision

**Containers (OCI) for MVP**; path to **FaaS** for elastic migration in the pilot constellation phase.

## Consequences

- MVP: container images, cgroups, GPU sandbox, OTA rollback.
- 2028: function runtime + ISL state replication.
- Simulation harness must cover both packaging models.
