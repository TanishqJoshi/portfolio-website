import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "telus-sde1",
    role: "Software Development Engineer I",
    company: "Telus Digital",
    location: "Bengaluru, India",
    startDate: "July 2025",
    endDate: "Present",
    description: [
      "Architected a FastAPI orchestration layer for a RAG-powered AI assistant, integrating a temporal knowledge graph (Amazon Neptune) with hybrid BM25 + vector search.",
      "Overhauled the multi-tenant PostgreSQL data model, migrating from MongoDB to normalized relational schemas with composite indexing.",
      "Implemented an event-driven bulk processing pipeline on RabbitMQ with adaptive batching and fault-tolerant retry logic.",
      "Shipped a configurable model interaction workflow, unlocking $2M in pilot contracts and enabling annotator-driven RLHF correction loops."
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "RabbitMQ", "Amazon Neptune", "MongoDB"]
  },
  {
    id: "telus-sde-intern",
    role: "Software Development Engineer Intern",
    company: "Telus Digital",
    location: "Bengaluru, India",
    startDate: "December 2024",
    endDate: "June 2025",
    description: [
      "Saved $50K+ annually in LLM inference costs by deploying a Go/PostgreSQL state-transition guard enforcing per-workflow retry limits.",
      "Built a quality analytics dashboard in Retool backed by BigQuery materialized views for a $5M pilot, reducing ops reporting overhead by 85%.",
      "Restored on-call signal quality by engineering an API middleware exclusion layer to filter expected errors pre-ingestion into Sentry."
    ],
    techStack: ["Golang", "PostgreSQL", "BigQuery", "Retool", "Sentry"]
  },
  {
    id: "telus-ml-intern",
    role: "Machine Learning Engineering Intern",
    company: "Telus Digital",
    location: "Bengaluru, India",
    startDate: "July 2024",
    endDate: "December 2024",
    description: [
      "Designed a scalable LLM-driven Resume Parser and Profiler pipeline processing 1M+ resumes with 82% structured accuracy.",
      "Engineered an experience calculation algorithm and optimized the backend pipeline, reducing costs by 35%.",
      "Operationalized an automated LLM-based evaluation system, eliminating 90% of manual review hours.",
      "Delivered a data ingestion pipeline on MongoDB and AWS S3; ran analytical queries on a 120-table BigQuery schema."
    ],
    techStack: ["Python", "LLMs", "MongoDB", "AWS S3", "GCP BigQuery"]
  }
];
