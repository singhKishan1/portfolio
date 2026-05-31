import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Engineer — Java Backend",
    company: "Nucleus Software Exports",
    period: "2023 — Present",
    type: "Full-time · Fintech",
    highlights: [
      "Implemented Content Security Policy across the core lending platform — eliminated XSS attack surface and passed external security audit",
      "Built a runtime code injection module enabling dynamic business rule execution without service redeployments",
      "Designed a Spring Boot multi-step page redirection system handling complex form submission flows with full state recovery",
      "Contributed to a Java-native Git internals implementation covering blob/tree hashing, directory structuring, and object entry I/O",
    ],
    tech: ["Spring Boot", "Hibernate", "MySQL", "Java 17", "C++"],
  },
];
