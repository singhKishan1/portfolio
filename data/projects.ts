import {
  Layers,
  Activity,
  Database,
  Globe,
  Box,
  Shield,
  Lock,
} from "lucide-react";
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "JarPatch",
    category: "Developer Tools",
    tagline: "Automated JAR patch deployment with REST APIs",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring MVC",
      "REST API",
      "Maven",
      "Jackson",
    ],
    metrics: [
      { l: "Deployment", v: "API Driven" },
      { l: "Architecture", v: "Modular" },
      { l: "Automation", v: "100%" },
    ],
    details: [
      {
        icon: Layers,
        label: "Architecture",
        body: "Designed a modular Spring Boot application that automates JAR patch deployment through REST APIs. Separation of controllers, services, and utilities enables maintainable and extensible patch workflows.",
      },
      {
        icon: Activity,
        label: "Patch Workflow",
        body: "Implements an end-to-end patch execution pipeline including request validation, patch extraction, replacement, and status reporting, eliminating repetitive manual deployment tasks.",
      },
      {
        icon: Database,
        label: "File Management",
        body: "Handles JAR archive processing, file replacement, and directory management while preserving application structure and ensuring consistent patch application.",
      },
      {
        icon: Globe,
        label: "API Strategy",
        body: "Exposes RESTful endpoints for initiating and monitoring patch operations. JSON-based request and response models simplify integration with deployment pipelines and external tools.",
      },
      {
        icon: Box,
        label: "Deployment",
        body: "Built as a standalone Spring Boot service with Maven, allowing easy execution in local environments or integration into CI/CD pipelines for automated application maintenance.",
      },
    ],
  },
  {
    id: 3,
    name: "CacheLayer",
    category: "Infrastructure",
    tagline: "Multi-tier intelligent caching framework with >94% hit rate",
    tech: ["Redis Cluster", "Caffeine", "Spring Boot", "Prometheus", "Java 17"],
    metrics: [
      { l: "L1 Hit", v: "~0.1ms" },
      { l: "L2 Hit", v: "~1ms" },
      { l: "Hit Rate", v: ">94%" },
    ],
    details: [
      {
        icon: Layers,
        label: "Architecture",
        body: "L1 in-process Caffeine + L2 Redis Cluster + L3 DB fallback. Write-through and write-behind strategies selectable per keyspace at runtime.",
      },
      {
        icon: Activity,
        label: "Scalability",
        body: "Redis Cluster with 6 nodes (3 primary, 3 replica). Consistent hashing for key distribution. Auto-rebalancing on topology changes.",
      },
      {
        icon: Database,
        label: "Persistence",
        body: "Redis 7.x with RDB + AOF. Keyspace notifications drive event-based cache invalidation across all subscribed services simultaneously.",
      },
      {
        icon: Globe,
        label: "API",
        body: "Annotation-driven (@Cacheable, @CacheEvict, @CachePut) with a programmatic fallback. Stampede protection via probabilistic early expiration.",
      },
      {
        icon: Box,
        label: "Observability",
        body: "Redis Sentinel HA with <30s automated failover. Cache metrics (hit/miss/eviction) exported to Prometheus with pre-built Grafana dashboards.",
      },
    ],
  },

  {
    id: 4,
    name: "Custom HTTP Server",
    category: "Backend Infrastructure",
    tagline: "Multithreaded HTTP server built from scratch using Java sockets",
    tech: ["Java", "TCP/IP", "HTTP", "Multithreading", "Socket Programming"],
    metrics: [
      { l: "Protocol", v: "HTTP/1.1" },
      { l: "Concurrency", v: "Multi-Threaded" },
      { l: "Architecture", v: "Socket-Based" },
    ],

    details: [
      {
        icon: Globe,
        label: "HTTP Processing",
        body: "Implemented HTTP request parsing, header processing, and response generation following HTTP/1.1 fundamentals. Supports GET requests and static resource delivery.",
      },
      {
        icon: Activity,
        label: "Concurrent Handling",
        body: "Designed a multithreaded architecture where each client connection is processed independently, enabling simultaneous request handling without blocking active sessions.",
      },
      {
        icon: Database,
        label: "Content Delivery",
        body: "Serves static HTML, CSS, JavaScript, and media files directly from the file system with proper HTTP status codes and content-type management.",
      },
      {
        icon: Layers,
        label: "Networking",
        body: "Built directly on Java Socket and ServerSocket APIs, demonstrating low-level understanding of TCP/IP communication, connection lifecycle, and network programming.",
      },
      {
        icon: Box,
        label: "System Design",
        body: "Developed core backend server components including request routing, thread management, response handling, and error processing without external frameworks.",
      },
    ],
  },
];
