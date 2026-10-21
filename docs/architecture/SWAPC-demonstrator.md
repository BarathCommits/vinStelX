# Demonstrator SWaP-C / thermal worksheet

**Status:** Illustrative planning envelope (not flight-qualified)  
**Target:** 2027 orbital demonstrator compute module  
**Validate in:** 2026 architecture validation (TVAC, radiation, power profiles)

| Parameter | Target range | Notes |
|-----------|--------------|-------|
| Dry mass (compute module) | 12–25 kg | Excl. partner bus structure |
| Volume | 12–20 U equiv. | Modular blade enclosure |
| Peak electrical (compute) | 60–120 W | GPU + CPU + FPGA + memory |
| Sustained sunlit compute | 40–80 W | After thermal derate |
| Eclipse compute target | 10–25 W | Throttle / idle policy |
| Solar margin (bus share) | ≥1.3× peak | Partner bus allocation TBD |
| Battery DoD (compute ops) | ≤30% | Eclipse bridging only |
| Radiator area (module) | 0.15–0.4 m² | Cold-plate to bus radiator |
| Radiator T (coolant) | 290–330 K | COTS GPU compatible |
| TID design goal (LEO 5y) | ≥20–40 krad(Si) | Shield + derate COTS |
| Storage (usable) | 2–8 TB NVMe | ECC + scrubbing |
| Downlink class (demo) | X/Ka or partner | Insights-first QoS |

## Power modes

| Mode | Compute budget | Behavior |
|------|----------------|----------|
| Sunlit — max | 100% | Full inference batch |
| Sunlit — nominal | 60–80% | Steady EO pipeline |
| Eclipse — bridge | 15–30% | Alerts only / queued jobs |
| Safe mode | ≤10% | Supervisor + radios only |

## Indicative peak power split (sunlit max)

| Subsystem | Share |
|-----------|-------|
| GPU / accelerator | 45% |
| CPU + memory | 25% |
| FPGA ingest / IO | 15% |
| Storage + misc | 10% |
| Margin | 5% |

## Thermal checklist

- Cold plate on GPU/CPU → heat pipe / loop → bus radiator
- Model solar loading + Earth IR + albedo on radiator view
- PCM buffer optional for short GPU bursts
- Overtemp → scheduler preempts tenants before hardware trip
- Eclipse: do not size battery for full GPU; size for alerts + recover
