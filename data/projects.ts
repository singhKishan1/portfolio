import { Layers, Activity, Database, Globe, Box, Shield, Lock} from "lucide-react";
import type {Project} from "@/types";

export const PROJECTS: Project[] = [
    {
    id: 1, name: "FintechCore", category: "Distributed Systems",
    tagline: "Event-driven payment processing at 10,000 TPS",
    tech: ["Spring Boot 3", "Kafka", "PostgreSQL 15", "Redis 7", "Docker", "AWS EKS"],
    metrics: [{ l: "Throughput", v: "10K TPS" }, { l: "P95 Latency", v: "<8ms" }, { l: "Uptime", v: "99.99%" }],
    details: [
      { icon: Layers,    label: "Architecture",   body: "Event-driven microservices with CQRS. Kafka-backed event store with PostgreSQL read replicas. Redis L1 cache delivers sub-5ms p95 on all hot paths." },
      { icon: Activity,  label: "Scalability",    body: "Horizontal autoscaling via Kubernetes HPA. Stateless services share Redis session store. Resilience4j circuit breakers on every downstream call." },
      { icon: Database,  label: "Database",       body: "Normalized PostgreSQL with promoted read replicas. Optimistic locking for concurrent transactions. Hash-partitioned audit log tables." },
      { icon: Globe,     label: "API Strategy",   body: "REST/HTTPS with JWT auth. Gateway-level rate limiting (100 req/s per tenant). OpenAPI 3.0 spec with consumer-driven contract tests." },
      { icon: Box,       label: "Deployment",     body: "Docker on AWS EKS. GitHub Actions CI/CD with blue-green deploys. Prometheus + Grafana observability. Full distributed tracing via Jaeger." }
    ]
  },
  {
    id: 2, name: "AuthGuard", category: "Security Infrastructure",
    tagline: "Zero-trust auth service with sub-2ms token validation",
    tech: ["Spring Security", "JWT", "Redis", "PostgreSQL", "OAuth2", "Docker"],
    metrics: [{ l: "Auth Latency", v: "<2ms" }, { l: "Token Store", v: "Redis" }, { l: "Model", v: "Zero-trust" }],
    details: [
      { icon: Shield,   label: "Architecture",   body: "Stateless JWT with refresh token rotation. Redis blacklist enables instant revocation without DB round-trips on the auth hot path." },
      { icon: Activity, label: "Scalability",    body: "Stateless design allows unlimited horizontal scaling. 98% of token validations resolved from Redis — zero DB hits for active sessions." },
      { icon: Database, label: "Database",       body: "PostgreSQL user store with bcrypt (cost=12). Redis blacklist with TTL-expiry. Indexes on email + OAuth provider for sub-ms lookups." },
      { icon: Lock,     label: "Security",       body: "Refresh token rotation on every use. Per-device token tracking. Revocation broadcast via Redis pub/sub to all service instances in <50ms." },
      { icon: Box,      label: "Deployment",     body: "Standalone Docker service injectable as a sidecar. AWS Secrets Manager for credential rotation. Zero-downtime key rotation supported." }
    ]
  },
  {
    id: 3, name: "CacheLayer", category: "Infrastructure",
    tagline: "Multi-tier intelligent caching framework with >94% hit rate",
    tech: ["Redis Cluster", "Caffeine", "Spring Boot", "Prometheus", "Java 17"],
    metrics: [{ l: "L1 Hit", v: "~0.1ms" }, { l: "L2 Hit", v: "~1ms" }, { l: "Hit Rate", v: ">94%" }],
    details: [
      { icon: Layers,   label: "Architecture",   body: "L1 in-process Caffeine + L2 Redis Cluster + L3 DB fallback. Write-through and write-behind strategies selectable per keyspace at runtime." },
      { icon: Activity, label: "Scalability",    body: "Redis Cluster with 6 nodes (3 primary, 3 replica). Consistent hashing for key distribution. Auto-rebalancing on topology changes." },
      { icon: Database, label: "Persistence",    body: "Redis 7.x with RDB + AOF. Keyspace notifications drive event-based cache invalidation across all subscribed services simultaneously." },
      { icon: Globe,    label: "API",            body: "Annotation-driven (@Cacheable, @CacheEvict, @CachePut) with a programmatic fallback. Stampede protection via probabilistic early expiration." },
      { icon: Box,      label: "Observability",  body: "Redis Sentinel HA with <30s automated failover. Cache metrics (hit/miss/eviction) exported to Prometheus with pre-built Grafana dashboards." }
    ]
  }
]