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
      "Built internal Java utilities to segregate embedded JavaScript and CSS from JSP and Thymeleaf templates, improving frontend maintainability and application performance.",
      "Contributed to a Java-native Git internals implementation covering blob/tree hashing, directory structuring, and object entry I/O",
      "Improved release quality by analyzing and resolving failing ATDD scenarios across multiple application modules, reducing regression defects and increasing test suite reliability."
    ],
    tech: ["Spring Boot", "Hibernate", "MySQL", "Java 17", "Selenium", "Cucumber"],
  },
  {
    role: "Assistant Software Engineer",
    company: "Nucleus Software Exports",
    period: "2023 - 2023 (Trainee)",
    type: "Trainee · Fintech",
    highlights: [
      " Developed full-stack enterprise applications using Java, Spring Boot, Spring MVC, Hibernate, JSP, and frontend technologies for scalable business workflows",
      "Contributed to a microservices-based maker-checker workflow enabling asynchronous approval processing, reducing operational turnaround time by 40%.",
    ],
    tech: ["Spring Boot", "Hibernate", "MySQL", "Java 17"],
  },
];
