import { Cpu, Database, Layers, Network, Shield, Zap } from "lucide-react";

export const PHILOSOPHY_ITEMS = [
  {
    Icon: Zap,
    title: "Performance First",
    body: "Every millisecond is a product decision. Redis caching, connection pooling, query plan analysis — built in from day one, not patched in after the incident report.",
  },
  {
    Icon: Shield,
    title: "Security by Default",
    body: "JWT refresh rotation, CSP headers, parameterized queries, least privilege. Not a post-ship checklist — a mindset that shapes every API contract and DB schema.",
  },
  {
    Icon: Layers,
    title: "Clean Architecture",
    body: "Controller → Service → Repository, enforced by code review. Domain models insulated from persistence details. Dependencies injected, never silently coupled.",
  },
  {
    Icon: Database,
    title: "Database as Foundation",
    body: "Schema design precedes API design. Indexes serve query patterns, not afterthoughts. Transactions carry explicit isolation levels. No N+1 surprises in production.",
  },
  {
    Icon: Network,
    title: "Resilient by Design",
    body: "Circuit breakers, idempotent endpoints, exponential backoff retries, graceful degradation. Systems that fail predictably and recover without human intervention.",
  },
  {
    Icon: Cpu,
    title: "Concurrency Discipline",
    body: "Optimistic over pessimistic locking. Async where latency budgets demand it. No shared mutable state without explicit synchronization. Stateless by default.",
  },
];
