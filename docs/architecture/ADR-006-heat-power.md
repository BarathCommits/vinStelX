# ADR-006: Heat / power strategy

- **Status:** Proposed
- **Date:** 2026-10-16

## Context

Space microdatacenter TCO is dominated by power and thermal rejection. Oversizing batteries for full GPU load in eclipse rarely pays off. COTS GPUs need radiator loops near ~290–330 K.

## Decision

**Throttle compute in eclipse**; size radiators for **peak sunlit sustained load**, not continuous full GPU through eclipse.

## Consequences

- Scheduler sheds/preempts tenants on power and thermal budgets.
- Customer SLAs must include duty-cycle / availability windows.
- Battery sized for alerts + recovery, not full inference.
