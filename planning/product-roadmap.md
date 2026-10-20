# vinStelX — Product Roadmap

**North-star product:** In-Orbit Data Centres  
**Platform:** Vinsta Compute  
**Horizon:** 2025 – 2028+  
**Aligned to:** Public roadmap on vinStelX website

---

## Product vision

vinStelX builds **in-orbit data centres** — modular orbital edge infrastructure that ingests satellite data, processes and stores it on-board, runs AI inference, and downlinks only what operators need.

We are not a constellation operator. We are the **compute layer** that makes every constellation faster, cheaper, and more sovereign.

---

## Product hierarchy

```
In-Orbit Data Centre (category / customer-facing product)
└── Vinsta Compute (platform)
    ├── Orbital Node (hardware — compute + storage in LEO)
    ├── Vinsta Orchestrator (ground software)
    ├── Vinsta Models (on-orbit AI workload packs)
    └── Vinsta Mesh (future — inter-satellite orchestration)
```

---

## Roadmap overview

| Year | Phase | Product milestone | Customer milestone |
|------|-------|-------------------|-------------------|
| 2025 | Architecture validation | Node design, rad testing, ground integration | Technical validation complete |
| 2026 | Orbital demonstrator | **First in-orbit data centre in LEO** | 2 anchor design partners |
| 2027 | Pilot constellation | Multi-node deployment | 5–8 paying operator pilots |
| 2028 | Production scale | Commercial orbital compute service | 20+ constellation integrations |

---

## 2025 — Architecture validation ✅ Complete

### Delivered
- Orbital node architecture (compute, storage, connectivity, power budget)
- Radiation testing and LEO qualification path
- Ground segment integration design
- Open workload API specification
- Security model: encryption, policy-controlled downlink, key management

### Exit criteria (met)
- [x] Node design frozen for demonstrator build
- [x] Ground orchestration prototype operational in lab
- [x] Radiation test campaign completed

---

## 2026 — Orbital demonstrator 🔄 In progress

**Theme:** Prove the in-orbit data centre works in LEO with real workloads.

### Product deliverables

#### P0 — Must ship

| Deliverable | Description | Target |
|-------------|-------------|--------|
| **IODC-1** (In-Orbit Data Centre Node 1) | First flight unit: CPU + AI accelerator, in-orbit storage, optical/RF crosslink interfaces | Launch + ops |
| **Vinsta Orchestrator v0.1** | Ground workload deployment, telemetry, policy rules, container runtime | Design partner ready |
| **Integration kit** | Bus interface docs, EMI/EMC qualification package, ops runbook | 2 partners integrated |
| **Demonstrator workloads** | 1 partner-specific workload + 1 reference workload live on orbit | Measured KPIs published |

#### P1 — Should ship

| Deliverable | Description | Target |
|-------------|-------------|--------|
| **Vinsta Models: ChangeDetect v0** | On-orbit change detection for EO partners | EO anchor partner |
| **Vinsta Models: ConjunctionScreen v0** | Basic conjunction screening for SSA partner | SSA anchor partner |
| **Secure downlink v1** | Encrypted, policy-controlled downlink to operator cloud | Sovereign-ready |

### Technical KPIs

| Metric | Target |
|--------|--------|
| On-orbit inference latency | <50ms |
| Downlink volume reduction | ≥70% (demonstrator); path to 90% |
| Node availability | ≥99% over demonstrator mission life |
| Workload deployment | Containerized update from ground without bus power cycle |

### Customer / GTM milestones

- [ ] Sign anchor partner #1 (EO constellation operator)
- [ ] Sign anchor partner #2 (defense or SSA operator)
- [ ] Complete bus integration (target: York Space or equivalent)
- [ ] Publish case study: ground vs orbit latency and downlink economics

### Revenue
- Engineering pilots: **$2–4M** (2 design partners)

---

## 2027 — Pilot constellation 📋 Planned

**Theme:** Multi-node in-orbit data centres with production-minded operators.

### Product deliverables

#### P0 — Must ship

| Deliverable | Description |
|-------------|-------------|
| **IODC-2 node** | Production-pilot hardware revision (cost, volume, reliability) |
| **Multi-node orchestration** | Workload placement, failover, cross-node storage tiering |
| **Vinsta Orchestrator v1.0** | Multi-tenant, SLA monitoring, billing hooks, API GA |
| **Vinsta Models catalog v1** | ChangeDetect · VesselDetect · ConjunctionScreen · MethanePlume |

#### P1 — Should ship

| Deliverable | Description |
|-------------|-------------|
| **Vinsta Sovereign** | Air-gapped mode, national-key management, cleared-downlink policies |
| **Vinsta Store** | Tiered on-orbit archive with retention policies |
| **Optical mesh beta** | Inter-satellite data routing between 3+ nodes (Vinsta Mesh preview) |

### Deployment targets

| Configuration | Nodes | Operators |
|---------------|-------|-----------|
| Single-operator pilot | 3–5 nodes | 2 EO or defense operators |
| Multi-operator shared | 5–8 nodes | Mixed verticals (EO + SSA + IoT) |

### Technical KPIs

| Metric | Target |
|--------|--------|
| Downlink reduction | ≥85% across pilot workloads |
| Multi-node failover | <30s workload recovery |
| Model pack time-to-deploy | <48h from ground to on-orbit inference |
| Pilot node MTBF | Meets operator mission requirements |

### Customer / GTM milestones

- [ ] 5–8 signed pilot contracts
- [ ] 1 prime contractor channel agreement (Lockheed, Airbus, or L3Harris)
- [ ] 1 public reference customer
- [ ] First Vinsta Sovereign deployment (government)

### Revenue target
- **$5–15M** (node sales/lease + Orchestrator SaaS + model packs)

---

## 2028 — Production scale 📋 Planned

**Theme:** Commercial in-orbit data centre service across LEO operator networks.

### Product deliverables

#### P0 — Must ship

| Deliverable | Description |
|-------------|-------------|
| **IODC-3 (production node)** | Volume manufacturing; modular SKU line (compute-heavy, storage-heavy, AI-heavy) |
| **Vinsta Compute Service** | Managed orbital compute — vinStelX operates workloads for operators |
| **Vinsta Mesh GA** | Autonomous inter-satellite routing, load balancing, distributed tasking |
| **Vinsta Edge API** | Third-party developer platform for orbital workloads |
| **Vinsta Hosted Payload** | Standardized in-orbit DC module for third-party buses |

#### P1 — Should ship

| Deliverable | Description |
|-------------|-------------|
| **Vinsta Ops** | 24/7 managed mission ops for orbital compute customers |
| **Cross-constellation federation** | Process data across operator boundaries (with policy controls) |
| **Model marketplace** | Third-party AI models certified for on-orbit deployment |

### Deployment targets

| Metric | Target |
|--------|--------|
| Nodes in orbit | 50+ |
| Operator integrations | 20+ |
| Recurring software revenue | ≥50% of total revenue |

### Customer / GTM milestones

- [ ] OEM agreements with 2+ bus manufacturers
- [ ] Enterprise SLA tier for defense and sovereign customers
- [ ] Marketplace launch with 5+ third-party model providers

---

## Product line detail — In-Orbit Data Centre SKUs (2028)

| SKU | Profile | Target customer |
|-----|---------|-----------------|
| **IODC-E** (Edge) | CPU-optimized, light AI | IoT aggregation, telemetry |
| **IODC-V** (Vision) | GPU/AI-heavy | EO, change detection, object ID |
| **IODC-S** (Sovereign) | Hardened security, air-gapped option | Defense, intelligence |
| **IODC-A** (Archive) | Storage-heavy, moderate compute | Science, climate, long-term monitoring |
| **IODC-M** (Mesh) | Crosslink-optimized routing | LEO broadband, large constellations |

---

## Use-case → product mapping

| Use case (from vinStelX site) | Primary SKU | Model pack | Target segment |
|-------------------------------|-------------|------------|----------------|
| Earth observation | IODC-V | ChangeDetect, VesselDetect | EO operators |
| Defense & intelligence | IODC-S | SIGINT-Triage, MultiSensor-Fusion | Primes, agencies |
| Telecom & IoT | IODC-E / IODC-M | IoT-Aggregate, EdgeRoute | Satcom, IoT constellations |
| Science & research | IODC-A | AdaptiveSample, InstrumentHealth | NASA, ESA, academia |
| Disaster response | IODC-V | FireDetect, FloodMap | EO + civil agencies |
| Climate monitoring | IODC-V / IODC-A | MethanePlume, IceTrend | GHGSat, Carbon Mapper |
| Space situational awareness | IODC-V | ConjunctionScreen | LeoLabs, Slingshot |
| Autonomous constellations | IODC-M | MeshScheduler, AutoTask | Large LEO operators |

---

## Build vs buy vs partner

| Layer | Strategy |
|-------|----------|
| Orbital node hardware | **Build** — core IP, rad-hard integration |
| AI model packs | **Build** first 4 packs; **partner** for vertical specialists |
| Bus / launch | **Partner** — York, Terran Orbital, etc. |
| Ground cloud | **Partner** — AWS/Azure/GCP for downlink destination |
| Launch | **Partner** — rideshare or dedicated via operator relationships |

---

## Risk register (product)

| Risk | Mitigation |
|------|------------|
| Demonstrator launch delay | Parallel lab qualification; simulator environment for partners |
| Radiation-induced failures | Redundant nodes in 2027 pilot; graceful degradation modes |
| Operator integration complexity | Standard integration kit; dedicated solutions engineering per anchor |
| Sovereign / ITAR compliance | Vinsta Sovereign SKU; early engagement with defense primes |
| Competing on-board FPGA solutions | Position full data centre stack (compute + storage + AI + mesh + orchestration) |

---

## Success metrics summary

| Metric | 2026 | 2027 | 2028 |
|--------|------|------|------|
| In-orbit data centre nodes deployed | 1 | 8–15 | 50+ |
| Paying operator partners | 2 | 5–8 | 20+ |
| Downlink reduction (proven) | 70%+ | 85%+ | 90%+ |
| Software % of revenue | ~10% | ~30% | ~50%+ |
| Model packs available | 2 | 6+ | 15+ (incl. marketplace) |

---

## Immediate next actions (product team)

1. **Freeze IODC-1 demonstrator spec** — align with anchor partner #1 payload interface
2. **Prioritize 2 model packs** for demonstrator: ChangeDetect (EO) + ConjunctionScreen (SSA)
3. **Ship Orchestrator v0.1** to first design partner for lab integration testing
4. **Define IODC-2 cost-down targets** now to avoid pilot-phase margin collapse
5. **Document "In-Orbit Data Centre"** as primary customer-facing product name; Vinsta Compute remains platform brand
