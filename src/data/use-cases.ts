export type UseCaseArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  summary: string;
  benefits: string[];
  applications: string[];
};

export const useCaseArticles: UseCaseArticle[] = [
  {
    slug: "earth-observation",
    title: "Earth Observation: From Raw Imagery to Actionable Insight",
    category: "Earth observation",
    date: "2026-01-15",
    readTime: "4 min",
    excerpt:
      "How in-orbit data centres transform satellite imaging by processing scenes in space before they ever reach the ground.",
    summary:
      "Earth observation satellites capture petabytes of imagery daily. Downlinking full-resolution data is slow, expensive, and often too late for time-sensitive decisions. In-orbit data centres run change detection, object classification, and anomaly alerts on-board — sending only what operators need to act on.",
    benefits: [
      "Reduce downlink volume by up to 90% through on-orbit filtering",
      "Deliver change alerts within seconds of capture",
      "Prioritise high-value scenes during limited ground-station windows",
      "Enable persistent monitoring without ground-station bottlenecks",
    ],
    applications: [
      "Agricultural crop health and yield forecasting",
      "Urban expansion and infrastructure monitoring",
      "Deforestation and environmental compliance",
      "Maritime vessel detection and tracking",
    ],
  },
  {
    slug: "defense-intelligence",
    title: "Defense & Intelligence: Sovereign Processing in Orbit",
    category: "Defense & intelligence",
    date: "2026-01-22",
    readTime: "5 min",
    excerpt:
      "Mission-critical data processed in orbit stays under operator control — with latency measured in milliseconds, not ground-pass schedules.",
    summary:
      "Defense and intelligence missions cannot afford to wait for the next ground pass or route sensitive data through third-party infrastructure. In-orbit data centres provide sovereign, low-latency processing for SIGINT, IMINT, and multi-source fusion directly on the constellation edge.",
    benefits: [
      "Sub-50ms processing latency for time-critical missions",
      "Full data sovereignty — sensitive payloads never leave the constellation",
      "Autonomous operation when ground links are unavailable or denied",
      "Policy-controlled downlink of only cleared insights",
    ],
    applications: [
      "Signals intelligence preprocessing and triage",
      "Theatre situational awareness and tip-and-cue",
      "Border and maritime domain awareness",
      "Multi-sensor fusion across distributed orbital assets",
    ],
  },
  {
    slug: "telecom-iot",
    title: "Telecom & IoT: Edge Routing at Constellation Scale",
    category: "Telecom & IoT",
    date: "2026-02-03",
    readTime: "4 min",
    excerpt:
      "Filter, aggregate, and route billions of IoT events in orbit — before they congest your ground network.",
    summary:
      "LEO broadband and IoT constellations generate continuous streams of small packets from millions of endpoints. In-orbit data centres act as edge routers and aggregators — processing telemetry, applying business logic, and downlinking summaries instead of raw event floods.",
    benefits: [
      "Aggregate millions of IoT events into actionable summaries",
      "Apply routing and QoS policies at the constellation edge",
      "Reduce ground-segment bandwidth and storage requirements",
      "Support real-time services independent of ground-station coverage",
    ],
    applications: [
      "Global IoT sensor network aggregation",
      "Fleet and asset tracking at scale",
      "LEO broadband traffic optimisation",
      "Edge caching and content pre-positioning",
    ],
  },
  {
    slug: "science-research",
    title: "Science & Research: Real-Time Analysis Beyond Ground Passes",
    category: "Science & research",
    date: "2026-02-10",
    readTime: "4 min",
    excerpt:
      "Run experiments and analyse instrument data in orbit — without waiting hours for the next downlink window.",
    summary:
      "Scientific missions lose critical observation windows when data must queue for ground passes. In-orbit data centres enable real-time instrument processing, onboard experiment adaptation, and immediate anomaly detection — accelerating discovery across astrophysics, heliophysics, and Earth science.",
    benefits: [
      "Analyse instrument data in real time during observation windows",
      "Trigger adaptive sampling based on onboard detection",
      "Compress and prioritise scientifically significant events",
      "Extend mission value when ground contact is intermittent",
    ],
    applications: [
      "Space weather and solar observation missions",
      "Atmospheric chemistry and climate instrument processing",
      "Astrophysics transient event detection",
      "On-orbit calibration and instrument health monitoring",
    ],
  },
  {
    slug: "disaster-response",
    title: "Disaster Response: When Every Minute Counts",
    category: "Disaster response",
    date: "2026-02-18",
    readTime: "3 min",
    excerpt:
      "Detect floods, fires, and earthquakes from orbit and alert response teams before full imagery reaches the ground.",
    summary:
      "Natural disasters demand immediate situational awareness. In-orbit data centres run rapid damage assessment, flood mapping, and fire perimeter detection on-board — pushing alerts to emergency coordinators while full-resolution archives are selectively downlinked.",
    benefits: [
      "Accelerate disaster alerts by eliminating ground-processing delay",
      "Continuous monitoring even when ground stations are overwhelmed",
      "Prioritise affected regions for emergency downlink",
      "Fuse optical and SAR data for all-weather assessment",
    ],
    applications: [
      "Wildfire detection and spread modelling",
      "Flood extent mapping and population exposure",
      "Earthquake damage assessment",
      "Hurricane tracking and impact prediction",
    ],
  },
  {
    slug: "climate-monitoring",
    title: "Climate Monitoring: Persistent Analytics in Orbit",
    category: "Climate monitoring",
    date: "2026-02-25",
    readTime: "4 min",
    excerpt:
      "Track emissions, ice loss, and ocean health with continuous on-orbit analytics across global constellations.",
    summary:
      "Climate monitoring requires long-term, consistent measurement — not episodic snapshots when ground stations are available. In-orbit data centres maintain rolling analytics, trend detection, and threshold alerting across distributed sensor networks.",
    benefits: [
      "Maintain continuous climate trend analytics in orbit",
      "Detect threshold breaches and anomalies without ground delay",
      "Reduce data loss from missed ground-station passes",
      "Enable cross-constellation data fusion for global coverage",
    ],
    applications: [
      "Greenhouse gas and methane plume detection",
      "Polar ice and glacier retreat monitoring",
      "Ocean temperature and current analysis",
      "Carbon credit verification and MRV compliance",
    ],
  },
  {
    slug: "space-situational-awareness",
    title: "Space Situational Awareness: Processing the Crowded Orbit",
    category: "Space situational awareness",
    date: "2026-03-05",
    readTime: "4 min",
    excerpt:
      "Track debris, predict conjunctions, and characterise objects — processed on-orbit for immediate collision avoidance.",
    summary:
      "With tens of thousands of objects in LEO, space situational awareness demands real-time processing of tracking data. In-orbit data centres correlate observations, update orbital parameters, and flag conjunction risks without routing raw sensor data through congested ground links.",
    benefits: [
      "Real-time conjunction assessment and collision avoidance",
      "On-orbit correlation of multi-source tracking data",
      "Reduced latency for manoeuvre decision support",
      "Scalable processing as constellation density increases",
    ],
    applications: [
      "Debris tracking and catalogue maintenance",
      "Conjunction warning and manoeuvre planning",
      "Rendezvous and proximity operations support",
      "Launch and early-orbit phase monitoring",
    ],
  },
  {
    slug: "autonomous-constellations",
    title: "Autonomous Constellations: Self-Managing Orbital Networks",
    category: "Autonomous operations",
    date: "2026-03-12",
    readTime: "5 min",
    excerpt:
      "Enable constellations that route data, rebalance workloads, and heal themselves — without constant ground intervention.",
    summary:
      "Large constellations cannot be operated manually at scale. In-orbit data centres provide the compute layer for autonomous tasking, inter-satellite load balancing, and distributed decision-making — turning constellations into self-managing orbital networks.",
    benefits: [
      "Distributed task scheduling across orbital nodes",
      "Autonomous workload rebalancing during node failures",
      "Inter-satellite data routing without ground relay",
      "Reduced operations cost at constellation scale",
    ],
    applications: [
      "Autonomous formation flying and station-keeping",
      "Dynamic tasking based on regional demand",
      "On-orbit software updates and workload migration",
      "Mesh network management for LEO broadband",
    ],
  },
];

export function getArticle(slug: string) {
  return useCaseArticles.find((article) => article.slug === slug);
}
