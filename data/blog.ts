import type { BlogPost } from "@/types";

export const BLOG_DATA: BlogPost[] = [
  {
    title: "Redis Cache Stampede: How We Protected 10K TPS at Peak Load",
    date: "May 2025",
    read: "6 min",
    tags: ["Redis", "Performance"],
  },
  {
    title: "JWT vs Sessions: The Real Architecture Tradeoffs Nobody Discusses",
    date: "Apr 2025",
    read: "8 min",
    tags: ["Auth", "Architecture"],
  },
  {
    title:
      "PostgreSQL at Scale: Partitioning and Index Strategy That Actually Works",
    date: "Mar 2025",
    read: "10 min",
    tags: ["PostgreSQL", "DB Design"],
  },
];
