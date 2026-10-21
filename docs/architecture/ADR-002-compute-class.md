# ADR-002: Compute class

- **Status:** Proposed
- **Date:** 2026-10-16

## Context

Rad-hard-only CPUs cannot meet EO/AI FLOPs/W targets. Industry practice (Sandia HMC, Unibap, DLR Jetson studies) uses a rad-hard control plane with protected COTS accelerators.

## Decision

**Heterogeneous:** rad-hard supervisor (MCU/FPGA) + COTS GPU/NPU blades with ECC, watchdogs, and power-cycle recovery.

## Consequences

- SEE/TID mitigation and thermal design become first-class requirements.
- Flight software must treat accelerator blades as unreliable and restartable.
- Prefer FLOPs/W over FLOPs/$ when selecting silicon.
