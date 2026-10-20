# vinStelX — In-Orbit Data Centre Architecture

**Product:** In-Orbit Data Centres (IODC)  
**Platform:** Vinsta Compute  
**Document type:** System architecture + engineering specs (research-backed)  
**Version:** 0.1 · October 2026  
**Sources:** Industry flight demos (Kepler, Sidus, Axiom, Loft, Aethero), SDA OCT standards, CCSDS DTN, NVIDIA Jetson radiation studies, IAC 2026 landscape survey (Kulu), LEO thermal/power literature

---

## 1. Strategic positioning (from market research)

### What we are building

A **shared orbital edge compute facility** — not a GPU co-processor glued to one sensor, and not a megawatt orbital cloud for training terrestrial AI (economics still unproven per IAC 2026 survey of ~70 programmes).

| Classification (Kulu / IAC 2026) | vinStelX fit |
|----------------------------------|--------------|
| Onboard processing (own payload only) | Too narrow — we serve multiple users |
| **Shared orbital computing / ODC node** | **Primary** — multi-tenant compute + storage in LEO |
| Orbital cloud for Earth AI training | Out of scope near-term |
| Monolithic GW-class assembled platform | 2030+ vision only |

**CEO thesis:** Own the *compute layer* for constellation operators. Enable 90% downlink reduction, sub-second inference, and sovereign processing — monetize nodes + orchestration SaaS + model packs.

### Competitive landscape (demonstrated / flying)

| Player | What they showed | Implication for vinStelX |
|--------|------------------|--------------------------|
| **Kepler** (Mar 2026) | 40× NVIDIA Jetson Orin across 10 sats + optical mesh | Optical + distributed Orin is the commercial baseline |
| **Sidus FeatherEdge Gen-2** | Orin NX ~100 TOPS flight-proven on LizzieSat-3 | Orin NX is a credible flight SoM |
| **Axiom ODC** | AxDCU-1 on ISS; LEO nodes with Kepler optical | Containerized edge (Red Hat Device Edge) pattern |
| **Loft Orbital** | Hosted CPU/GPU + Ultimate Edge ground twin | Container replica on ground is table-stakes |
| **Aethero + EnduroSat Titan** (Oct 2026) | Kubernetes cluster claim, Thor-class modules, multi-kW | Ambitious power/thermal; watch for flight data |
| **Starcloud / Google Suncatcher** | Large-scale / TPU experiments | Different bet (Earth AI in orbit); not our wedge |
| **Thales IMAGIN-e** | 12+ months ISS AI edge | Validates long-duration onboard AI ops |

**Near-term opportunity:** Incremental **edge / shared ODC nodes** for EO, defense, SSA, IoT — not ASCEND-scale GW facilities.

---

## 2. Reference architecture

```
┌──────────────────────────────────────────────────────────────────────────┐
│                         CUSTOMER CONSTELLATION                           │
│   EO / SAR / RF / IoT payloads ──ingest──► Optical/RF crosslink or bus   │
└───────────────────────────────┬──────────────────────────────────────────┘
                                │
┌───────────────────────────────▼──────────────────────────────────────────┐
│                    IODC NODE (Vinsta Compute)                            │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐  ┌────────────────┐ │
│  │ Ingest       │  │ Compute pool │  │ Storage     │  │ Secure egress  │ │
│  │ gateway      │→ │ CPU/GPU/NPU  │→ │ tiered NVMe │→ │ policy filter  │ │
│  │ (bus/ISL)    │  │ + runtime    │  │ + buffer    │  │ encrypt+QoS    │ │
│  └─────────────┘  └──────────────┘  └─────────────┘  └────────┬───────┘ │
│         ▲                 │                                     │         │
│         │         fault mgr / watchdog / radiation scrub         │         │
└─────────┼─────────────────┼─────────────────────────────────────┼─────────┘
          │                 │                                     │
          │        Optical mesh (Vinsta Mesh)                     │
          │         SDA OCT-compatible OISL                       │
          │                 │                                     │
┌─────────▼─────────────────▼─────────────────────────────────────▼─────────┐
│                         GROUND SEGMENT                                    │
│  Vinsta Orchestrator · Mission ops · Model registry · Billing · Keys      │
│  Downlink: insights / alerts / selective archives → customer cloud        │
└───────────────────────────────────────────────────────────────────────────┘
```

### Six layers

| Layer | Name | Responsibility |
|-------|------|----------------|
| L0 | **Spacecraft bus integration** | Power, thermal, ADCS interfaces, mechanical, harness |
| L1 | **IODC hardware** | Compute SoMs, storage, power conditioning, shielding |
| L2 | **Connectivity** | Optical ISL + RF TT&C / data; DTN for disrupted links |
| L3 | **Runtime platform** | Linux + containers; workload scheduler; telemetry |
| L4 | **Workloads & models** | Vertical AI packs, customer containers, APIs |
| L5 | **Ground orchestration** | Deploy, policy, monitor, bill, key management |

---

## 3. Data plane CONOPS

Aligned to product “three steps”:

1. **Ingest** — Payload sensors and inter-satellite crosslinks feed the orbital node (Ethernet/SpaceWire/custom bus + ISL).
2. **Process & store** — Containerized workloads run inference, filter, compress, tier to on-orbit storage.
3. **Selective downlink** — Policy engine releases only cleared insights/alerts/archives; raw retained or discarded per SLA.

### Latency budget (targets)

| Path | Target | Notes |
|------|--------|-------|
| Sensor → on-node inference | **&lt;50 ms** | Marketing KPI; workload-dependent |
| Node → peer node (optical) | 1–15 ms terminal + RTT | SDA OCT receive/transmit latency ≤15 ms each side |
| Insight → ground (LEO pass) | Seconds–minutes | vs hours for full raw archive |
| Denied-link autonomous mode | Hours–days | DTN store-and-forward |

---

## 4. Hardware architecture — IODC node SKUs

### 4.1 Demonstrator / pilot SKUs (2026–2027)

| SKU | Role | Compute baseline | Node power envelope (compute) |
|-----|------|------------------|-------------------------------|
| **IODC-V** Vision | EO / change detect / vessel ID | 1–2× Jetson Orin NX 16GB | 25–60 W peak |
| **IODC-E** Edge | IoT aggregate / telemetry | 1× Orin NX 8GB or CPU-first | 10–25 W |
| **IODC-S** Sovereign | Defense / air-gap options | Dual Orin + rad-tolerant supervisor | 40–80 W |
| **IODC-A** Archive | Storage-heavy science/climate | Light GPU + multi-TB NVMe | 20–50 W |
| **IODC-M** Mesh | Routing-optimized | Compute + dual OCT interfaces | 30–70 W + OCT budget |

### 4.2 Compute module specs (research baseline)

**Primary flight SoM class: NVIDIA Jetson Orin NX** (flight heritage: Sidus, Kepler class)

| Parameter | Orin NX 16GB | Orin NX 8GB | Source |
|-----------|--------------|-------------|--------|
| AI performance | Up to **100 sparse / 50 dense INT8 TOPS** | 70 / 35 INT8 TOPS | NVIDIA datasheet |
| Power modes | **10 / 15 / 25 W** | 10 / 15 / 20 W | NVIDIA |
| Input voltage | 5–20 V | 5–20 V | NVIDIA |
| CPU | Arm Cortex-A78AE clusters | Similar, fewer cores | NVIDIA |
| GPU | Ampere architecture | Ampere | NVIDIA |
| Memory | 16 GB LPDDR5 | 8 GB | NVIDIA |
| TID resilience (lab) | Survived **&gt;36.2 krad(Si)** | Same family | IEEE SCC 2024 |
| SEE | SEFI / GPU stops / PCIe reboot risk | Needs watchdog + scrub | Proton SEE papers 2024 |
| LEO annual dose (shielded) | ~**150 rad(Si)/yr** behind ~10 mm Al-eq (SSO example) | Google Trillium context | aiinleo / Google 2025 |

**Supervisor / safety computer (required):** Rad-tolerant MCU/FPGA (LEON / Microchip PolarFire / similar) for:

- Power sequencing and latch-up crowbar  
- Watchdog reboot of COTS SoMs  
- Safe-mode when SEE storms or thermal limits hit  
- Independent TT&C health beacon  

### 4.3 Storage

| Tier | Media | Capacity (IODC-1 target) | Use |
|------|-------|--------------------------|-----|
| Hot | ECC DRAM / SoM RAM | 8–16 GB | Active tensors / buffers |
| Warm | Industrial NVMe (RAID-1 optional) | **1–4 TB** | Scene buffers, model store |
| Cold | Additional NVMe / TLC | **4–16 TB** (IODC-A) | Archive pending downlink |
| Integrity | Periodic scrub + checksums | — | SEU mitigation |

### 4.4 Power & thermal (physics constraints)

From LEO orbital-AI literature (ACM 2026 environmental limits):

| Constraint | Rule of thumb | Design implication |
|------------|---------------|--------------------|
| Heat rejection | ~**3 m² radiator / kW**; ~**30 kg radiator / kW** | Keep node compute ≤100–200 W early; multi-kW needs bus class (ESPA+) |
| Solar + eclipse | Battery mass ∝ eclipse fraction | Prefer high-β SSO or duty-cycle throttling |
| Orin thermal | SoC slowdown ~99°C; TJ −25–105°C | Cold plate + heat pipes to radiator; PCM buffer for peaks |
| Mission power share | Compute must leave margin for bus, OCT, payloads | Negotiate **dedicated power rail** with bus partner |

**IODC-1 demonstrator target envelope**

| Item | Spec |
|------|------|
| Orbit | LEO **400–600 km** (product baseline) |
| Compute draw | **≤40 W** average, **≤60 W** peak |
| Total payload power (w/ storage, gateway) | **≤80–100 W** negotiated |
| Mass (compute payload only) | **8–15 kg** target (excl. OCT if bus-provided) |
| Volume | ESPA / CubeSat-compatible variants; Frame-15 class for multi-node |
| Design life | **3–5 years** LEO |
| Shielding | ≥**5–10 mm Al-eq** around SoMs + critical memory |

### 4.5 Connectivity

| Link | Spec target | Standard / note |
|------|-------------|-----------------|
| Optical ISL | **0.1–2.5 Gbps** class | **SDA OCT v3.2** (C-band 1530–1565 nm; up to 2.5 Gbps Ethernet; ≤15 ms RX/TX latency) |
| Legacy OISL | 100 Mbps–1 Gbps | SDA OISL v2.x heritage |
| RF S-band / X-band | TT&C + backup data | Bus / ground station network |
| Onboard fabric | 1–10 GbE between SoMs | Dual-homed switches |
| Disruption handling | **DTN Bundle Protocol (BPv7)** + LTP/CFDP | CCSDS; ESA/NASA flight demos |

---

## 5. Software architecture

### 5.1 On-orbit runtime (Vinsta Runtime)

```
┌─────────────────────────────────────────────┐
│ Customer containers (OCI)                   │
│  ChangeDetect · VesselDetect · Custom       │
├─────────────────────────────────────────────┤
│ Vinsta Runtime                              │
│  · containerd / k3s-lite or nomad-like      │
│  · CUDA / TensorRT / ONNX Runtime           │
│  · Resource quotas (CPU, GPU, RAM, NVMe)    │
│  · Workload admission + signing verify      │
├─────────────────────────────────────────────┤
│ Platform services                           │
│  · Telemetry agent · Log shipper            │
│  · Policy / downlink classifier             │
│  · Key agent (HSM / secure element)         │
│  · Fault manager (scrub, checkpoint, reboot)│
├─────────────────────────────────────────────┤
│ Linux (Yocto/Buildroot hardened)            │
│  + rad-tolerant supervisor firmware         │
└─────────────────────────────────────────────┘
```

**Design choices (industry-aligned)**

| Choice | Rationale |
|--------|-----------|
| OCI containers | Axiom/Red Hat Device Edge, Loft Ultimate Edge pattern |
| Ground twin identical to flight | Loft model — develop once, deploy to orbit |
| Signed images only | Supply-chain + sovereign control |
| Checkpoint / restart | SEE recovery without full mission abort |
| Optional k3s for multi-SoM | Aethero Kubernetes narrative; start with single-node swarm |

### 5.2 Ground — Vinsta Orchestrator

| Module | Function |
|--------|----------|
| Fleet registry | Nodes, health, orbits, power budgets |
| Workload deployer | Push/pull signed containers; canary updates |
| Policy engine | What may leave orbit; classification levels |
| Model registry | Versioned Vinsta Models + customer BYOM |
| Observability | Metrics, traces, anomaly alerts |
| Billing | Per-node + per-TFLOP-hour + per-GB processed |
| Key management | Operator-held keys; vinStelX never sees plaintext mission data (sovereign mode) |

### 5.3 APIs (open workload APIs — product claim)

| API | Purpose |
|-----|---------|
| `Workloads` | Deploy, scale, stop, status |
| `Ingest` | Register data sources / topics |
| `Infer` | Sync/async inference jobs |
| `Store` | Put/get/list with retention policies |
| `Downlink` | Request priority windows; attach classification |
| `Events` | Alerts, conjunctions, health |
| `Mesh` | Route intent between nodes (2027+) |

---

## 6. Security & sovereignty architecture

| Control | Spec |
|---------|------|
| Encryption in transit | TLS 1.3 / IPsec over ISL overlays; CCSDS SDLS where required |
| Encryption at rest | AES-256 on NVMe; per-tenant keys |
| Workload attestation | Signed OCI + measured boot chain |
| Policy-controlled downlink | Default-deny egress; allowlist artifact types |
| Air-gap mode (IODC-S) | No commercial internet path; cleared courier / dedicated ground |
| Key ownership | Customer HSM / national KMS in sovereign SKU |
| Supply chain | SBOM, signed firmware, radiation lot tracking |
| Zero-trust ops | Least privilege ground roles; audited commands |

---

## 7. Fault tolerance & radiation engineering

| Threat | Mitigation |
|--------|------------|
| SEU bit flips | ECC memory where available; application checksums; periodic DRAM scrub |
| SEFI / GPU hang | Hardware watchdog; GPU job timeout; SoM power cycle |
| Latch-up | Current monitoring; crowbar; power rail isolation |
| TID | Shielding; Orin TID margin ≫ 5-year LEO dose at ~150 rad/yr |
| Thermal runaway | Throttle → migrate workload → safe mode |
| Node loss | Mesh rebalance (multi-node); ground re-task |
| Link outage | DTN custody; local queue; priority aging |

**Availability targets**

| Phase | Target |
|-------|--------|
| Demonstrator 2026 | ≥99% node duty during experiment windows |
| Pilot 2027 | ≥99.5% with graceful degradation |
| Production 2028 | SLA tiers; multi-node failover &lt;30 s |

---

## 8. Full specifications checklist

### 8.1 Mission & orbit

- [ ] LEO altitude band: 400–600 km  
- [ ] Inclination options: SSO preferred for EO; customer-driven  
- [ ] Design life: 3–5 years  
- [ ] Debris / conjunction: onboard screening pack + ground SSA feed  

### 8.2 Mechanical / SWaP

- [ ] Mass, volume, CG, first modes per bus ICD  
- [ ] Random vibe / shock / thermal vacuum qualification plan  
- [ ] EMI/EMC with OCT and payload radios  

### 8.3 Electrical

- [ ] Voltage rails, inrush, peak vs average power  
- [ ] Latch-up protection thresholds  
- [ ] Battery / EPS interface during eclipse  

### 8.4 Thermal

- [ ] Dissipation map at 10/15/25 W SoM modes  
- [ ] Radiator area budget vs bus  
- [ ] Hot/cold case margins  

### 8.5 Compute performance

- [ ] Sustained INT8 TOPS at flight power mode  
- [ ] Images/sec for ChangeDetect reference model  
- [ ] Concurrent container limits  

### 8.6 Storage & data

- [ ] Usable TB after RAID/FS overhead  
- [ ] Write endurance (DWPD) for LEO thermal cycling  
- [ ] Retention policies / encryption  

### 8.7 Networking

- [ ] OCT compliance level (SDA v3.2 target)  
- [ ] RF fallback rates  
- [ ] DTN BP endpoints  

### 8.8 Software

- [ ] OS image build reproducibility  
- [ ] Container runtime version pin  
- [ ] OTA update dual-bank firmware  

### 8.9 Security

- [ ] Key ceremony process  
- [ ] Classification labels for downlink  
- [ ] Audit log retention  

### 8.10 Ground segment

- [ ] Orchestrator HA  
- [ ] Multi-cloud egress (AWS/Azure/GCP/sovereign)  
- [ ] SOC2 / FedRAMP path (later)  

### 8.11 Operations

- [ ] NOC runbooks  
- [ ] Anomaly response &lt;X minutes  
- [ ] On-orbit software rollback  

### 8.12 Compliance / export

- [ ] ITAR / EAR classification of node  
- [ ] Country-of-origin SoM policy  
- [ ] Customer data residency  

---

## 9. Interface control — external ICDs

| Interface | Partner | Content |
|-----------|---------|---------|
| Bus power/data | York / Terran / EnduroSat / OHB | Voltage, connectors, pinouts, timing |
| Optical terminal | OCT vendor | SDA OCT profiles, pointing, Ethernet handoff |
| Payload ingest | EO/SAR/RF customer | Formats, rates, time sync |
| Ground stations | KSAT / AWS Ground Station / etc. | Pass plans, protocols |
| Customer cloud | AWS/Azure/GCP | Object store, queues, VPC |

---

## 10. Phased build (aligned to vinStelX roadmap)

| Year | Architecture milestone | Spec freeze |
|------|------------------------|-------------|
| **2026** | IODC-1 single node + Orchestrator v0.1 + 2 model packs | Power ≤60 W peak; Orin NX; 1–2 TB; RF primary, optical optional |
| **2027** | Multi-node mesh beta; Sovereign SKU; k3s multi-SoM | Optical ISL; IODC-2 cost-down; ≥85% downlink reduction proven |
| **2028** | Production SKUs (E/V/S/A/M); Edge API marketplace | 50+ nodes; SLA catalog; OEM bus modules |

---

## 11. Open engineering decisions (brainstorm → resolve)

| Decision | Options | Recommendation |
|----------|---------|----------------|
| SoM primary | Orin NX vs AGX Orin vs Thor | **Orin NX** for IODC-1 (heritage + 10–25 W); Thor watch for 2027 |
| Bus strategy | Own sat vs hosted payload | **Hosted** for demonstrator; ESPA-class for pilot |
| Optical | Buy OCT vs partner Kepler-like | **Partner** first; SDA OCT compliance as requirement |
| Orchestrator | Build vs fork edge K8s | **Build thin control plane** on open container runtime |
| Multi-tenancy | Strong isolation vs single-tenant nodes | Start **single-tenant / dedicated node** for pilots; multi-tenant later |
| Downlink economics | Sell insight SaaS vs capacity | **Hybrid**: node lease + usage |

---

## 12. Research bibliography (selected)

1. Erik Kulu & Jared Bottoms — *Space Data Centres vs Edge Computing*, IAC-26.E6.1.11 (2026)  
2. Kepler Communications — NVIDIA Jetson Orin constellation compute (Mar 2026)  
3. Sidus Space — FeatherEdge Gen-2 / Orin NX on-orbit (May 2025)  
4. Axiom Space — Orbital Data Centers / AxDCU-1 / Snowcone heritage  
5. Aethero & EnduroSat — Titan / NxA-ECM (2026)  
6. Loft Orbital — On-Orbit AI / Ultimate Edge  
7. SDA — Optical Communications Terminal Standard v3.2.0  
8. CCSDS — Bundle Protocol / DTN / CFDP  
9. NVIDIA — Jetson Orin NX datasheet (TOPS, power modes)  
10. IEEE — TID testing Jetson Orin NX (&gt;36 krad)  
11. ACM — *Dark Clouds Rising in LEO* (radiator ~3 m²/kW)  
12. Google / aiinleo — Trillium radiation & LEO dose context  

---

## 13. Next engineering artifacts to produce

1. **IODC-1 ICD draft** with chosen bus partner  
2. **Power & thermal spreadsheet** (SoM modes × eclipse)  
3. **Radiation test plan** (SEE + TID + latch-up)  
4. **Reference model pack** performance cards (ChangeDetect, ConjunctionScreen)  
5. **Threat model** (STRIDE) for sovereign SKU  
6. **BOM v0** and cost-down roadmap to IODC-2  

---

*This architecture intentionally targets shared LEO edge data-centre nodes for constellation operators. Hyperscale orbital AI training infrastructure is tracked as a watch item, not a 2026–2027 delivery commitment.*
