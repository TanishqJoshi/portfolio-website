import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "larynx-function-prediction",
    title: "Larynx Function Prediction Model",
    summary: "ML pipeline classifying larynx function from surface EMG signals, published in Procedia Computer Science.",
    description: "Published research at RTIP2R-2024. Built a Machine Learning pipeline classifying larynx function from surface EMG signals using Tunable-Q Wavelet Transform feature extraction and W-KNN with 5-fold cross-validation. The approach successfully surpassed 4 out of 8 State-of-the-Art (SOTA) benchmarks on the classification task.",
    techStack: ["Python", "MATLAB", "Machine Learning", "Signal Processing"],
    liveUrl: "https://www.sciencedirect.com/science/article/pii/S1877050925010026",
    featured: true,
    metrics: ["Published Paper", "Beat 4 SOTA Benchmarks"]
  },
  {
    id: "llm-sql-qna",
    title: "LLM-Powered SQL Q&A System",
    summary: "Retrieval-Augmented Generation system translating natural language questions into executable SQL queries.",
    description: "Developed an intuitive RAG system using LangChain and ChromaDB to translate natural language questions into executable SQL queries against a live MySQL database. By applying few-shot prompting and semantic embedding retrieval, the system achieved 92% NL-to-SQL accuracy on a 500-query evaluation set, responding in under one second.",
    techStack: ["Python", "LangChain", "ChromaDB", "MySQL", "Streamlit"],
    githubUrl: "https://github.com/TanishqJoshi/LLM-powered-QnA-System-with-SQL-Integration",
    featured: true,
    metrics: ["92% NL-to-SQL Accuracy", "<1s Query Response"]
  }
];
