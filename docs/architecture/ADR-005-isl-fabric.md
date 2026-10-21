# ADR-005: ISL fabric

- **Status:** Proposed
- **Date:** 2026-10-16

## Context

Optical ISLs provide high bandwidth for mesh compute but add pointing/PAT complexity. RF crosslinks are available sooner for a demonstrator.

## Decision

**RF ISL / crosslink for the demonstrator**; **optical backbone on the production roadmap**.

## Consequences

- Network stack is DTN-capable regardless of physical layer.
- Optical adds attitude/pointing requirements on dedicated nodes.
- Mesh job failover designed against RF latency/bandwidth first.
