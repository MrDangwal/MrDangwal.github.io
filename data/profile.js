// ============================================================
// All site content lives here. Edit this file, not the components.
// NOTE: replace the project `repo` links below with the exact repo
// URLs from github.com/MrDangwal — they currently point to your
// profile so nothing 404s while you fill them in.
// ============================================================

export const profile = {
  name: 'Abhishek Dangwal',
  role: 'Lead Data Scientist — AI/ML',
  tagline:
    'I build production AI systems — agentic pipelines, RAG, fine-tuned LLMs/VLMs — that ship to real users in high-stakes financial workflows.',
  email: 'dangwalabhishek5@gmail.com',
  phone: '+91 8218006460',
  github: 'https://github.com/MrDangwal',
  linkedin: 'https://www.linkedin.com/in/mrdangwal',
  location: 'India',
  resume: '/Abhishek_Dangwal_Resume.pdf',
};

// headline numbers pulled straight from the resume
export const metrics = [
  { value: '85%', label: 'per-call cost cut on loan decisioning (₹70 → <₹10)' },
  { value: '93%', label: 'macro-F1 across 100+ languages (XLM-RoBERTa)' },
  { value: '~1M', label: 'sentences/hour NLP throughput (T5 pipeline)' },
  { value: '50+', label: 'risk patterns detected by hybrid ML+LLM engine' },
];

export const about = [
  `Lead Data Scientist with a track record across fintech, SaaS analytics, and applied
   GenAI. I currently lead AI/ML at Freecharge, where my team replaced third-party
   decisioning APIs with an in-house agentic system built on OCR + LLM/VLM pipelines.`,
  `My work spans the full stack of modern AI: fine-tuning transformers with LoRA/QLoRA,
   architecting multi-agent systems (planner–executor–critic) with memory and state,
   building hybrid retrieval pipelines, and running the LLMOps that keeps it all honest —
   evaluation with Ragas and DeepEval, prompt versioning, hallucination tracking,
   and cost-aware model routing.`,
];

export const experience = [
  {
    company: 'Freecharge',
    location: 'India',
    role: 'Lead Data Scientist — AI/ML',
    period: 'Feb 2026 — Present',
    points: [
      'Led BSA (Bank Statement Analyser), an end-to-end agentic loan decisioning system processing PDFs/JSONs via OCR + LLM/VLM pipelines — replaced Perfios and cut per-call cost from ₹70 to under ₹10 (85% reduction) using Google ADK, AWS Textract, and custom agent orchestration.',
      'Architected a Financial Compliance Underwriting (FCU) engine detecting 50+ suspicious behavioral and financial risk patterns using hybrid ML + LLM reasoning + rules, with explainable outputs and audit trails.',
      'Built PDF forensic pipelines combining computer vision, signal processing, and transformer-based anomaly detection to catch tampering — metadata inconsistencies, font anomalies, layout shifts, recompression artifacts.',
      'Fine-tuned Vision-Language Models for tampering detection on Indian financial and identity documents (Aadhaar, PAN, bank statements) using LoRA/QLoRA, PEFT, contrastive learning, and layout-aware embeddings.',
      'Designed a secure agentic financial intelligence system for Axis Bank on on-prem SLMs with RAG + memory: semantic transaction categorization, behavioral anomaly detection, predictive budgeting, bill forecasting, and fraud alerts.',
      'Built a multi-modal conversational banking agent (text + vision + speech) in the Axis mobile app: cheque-image beneficiary creation, secure voice/chat payments, and autonomous stateful workflows via tool calling.',
      'Ran LLMOps/MLOps end to end — prompt versioning, Ragas/DeepEval evaluation, hallucination tracking, CI/CD, Prometheus/OpenTelemetry observability — and optimised inference via quantisation, caching, distillation, and SLM-vs-LLM routing.',
    ],
    stack: ['Google ADK', 'AWS Textract', 'Qdrant', 'FAISS', 'LoRA/QLoRA', 'FastAPI', 'Kubernetes', 'Ragas'],
  },
  {
    company: 'Forage',
    location: 'New Jersey, USA',
    role: 'AI Developer',
    period: 'Dec 2024 — Jan 2026',
    points: [
      'Fine-tuned multimodal LLMs/VLMs and SLMs with PyTorch, Hugging Face, LoRA/QLoRA, PEFT, and Vertex AI; optimised serving with quantization, ONNX, and batching.',
      'Architected agentic systems with CrewAI, LangChain, LlamaIndex, and OpenAI Assistants — planner-executor-verifier flows with tool calling, memory, and stateful orchestration.',
      'Built production RAG: hybrid BM25 + dense retrieval, query rewriting, cross-encoder rerankers, metadata filters, contextual chunking, structured outputs.',
      'Owned LLMOps end to end: MLflow/W&B experiments, prompt regression testing, LLM-as-a-Judge evaluation, guardrails, rollback strategies, Grafana observability.',
    ],
    stack: ['PyTorch', 'Hugging Face', 'CrewAI', 'LangChain', 'Vertex AI', 'Ray', 'GKE', 'MLflow'],
  },
  {
    company: 'Clootrack',
    location: 'Bangalore',
    role: 'Data Analyst',
    period: 'Oct 2022 — Dec 2024',
    points: [
      'Built modular NLP pipelines with NLTK, transformers, and Sentence-BERT for sentiment and topic extraction across customer-journey data.',
      'Created interactive Tableau and Power BI dashboards blending BigQuery, Snowflake, and REST/GraphQL sources, with dbt-managed lineage, tests, and docs.',
      'Automated ingestion and ELT with Selenium, Airflow, and dbt Cloud; analysed campaign performance (ROAS, CTR, CPC, CVR) to optimise ad spend.',
    ],
    stack: ['Python', 'dbt', 'Sentence-BERT', 'Tableau', 'BigQuery', 'Airflow'],
  },
  {
    company: 'Benchmark',
    location: 'Gurgaon',
    role: 'Technical Analyst',
    period: 'Oct 2021 — Oct 2022',
    points: [
      'Resolved email-service deliverability issues with SQL, Python, and HTML/CSS QA to improve campaign stability.',
      'Automated audience segmentation, orchestration, and A/B testing via HubSpot, Marketo APIs, and Zapier.',
    ],
    stack: ['SQL', 'Python', 'HubSpot', 'Marketo', 'Looker Studio'],
  },
];

export const projects = [
  {
    title: 'Language Detection — XLM-RoBERTa',
    kind: 'NLP · Transformers',
    summary:
      'Fine-tuned multilingual XLM-RoBERTa with Optuna tuning to hit 93% macro-F1 across 100+ languages, with scalable inference over multi-GB datasets.',
    points: [
      'Joblib + memory-mapped batch inference pipelines',
      'FastAPI + Docker + Cloud Run microservice with Prometheus/Grafana observability',
    ],
    tags: ['XLM-RoBERTa', 'Optuna', 'FastAPI', 'Cloud Run'],
    repo: 'https://github.com/MrDangwal',
  },
  {
    title: 'Punctuation Restoration & Text Enhancement',
    kind: 'NLP · Seq2Seq',
    summary:
      'Sequence-to-sequence system on T5 with spaCy alignment and rule-based post-processing for ASR text normalization — roughly 1M sentences/hour.',
    points: [
      'torch.multiprocessing parallel throughput optimisation',
      'Modular Python library: YAML config pipelines, pytest, reusable components',
    ],
    tags: ['T5', 'spaCy', 'torch.multiprocessing', 'pytest'],
    repo: 'https://github.com/MrDangwal',
  },
  {
    title: 'Project Contextualizer',
    kind: 'Agentic · Prompt Engineering',
    summary:
      'Agentic prompt-optimization engine: context compression, structured prompting, and prompt compilation for production LLM workflows.',
    points: [
      'Semantic segmentation + summarisation to cut token usage while preserving reasoning',
      'Evaluation layer for token reduction, structure quality, and reasoning retention',
    ],
    tags: ['Agents', 'Prompt Compilation', 'LLM Evaluation'],
    repo: 'https://github.com/MrDangwal',
  },
  {
    title: 'Knowledge Graph Fact Checker',
    kind: 'XAI · Graph Reasoning',
    summary:
      'Fact verification combining knowledge graphs, NLP, and graph traversal for claim validation with traceable, explainable reasoning paths.',
    points: [
      'Entity extraction, relation mapping, structured evidence retrieval',
      'XAI outputs that beat black-box LLM answers on trust',
    ],
    tags: ['Knowledge Graphs', 'XAI', 'NLP'],
    repo: 'https://github.com/MrDangwal',
  },
  {
    title: 'RAG PDF Dashboard',
    kind: 'RAG · Document Intelligence',
    summary:
      'End-to-end RAG platform over document corpora: chunking, semantic indexing, hybrid retrieval, reranking, and an interactive Q&A dashboard.',
    points: [
      'FAISS/Qdrant vector stores with hybrid search',
      'Document Q&A, semantic search, and knowledge extraction UI',
    ],
    tags: ['RAG', 'FAISS', 'Qdrant', 'Hybrid Search'],
    repo: 'https://github.com/MrDangwal',
  },
  {
    title: 'Agentic Classifier Studio',
    kind: 'Agents · Human-in-the-Loop',
    summary:
      'Multi-agent classification framework with LLMs, memory, and tool use — interactive model training with feedback loops and HITL learning.',
    points: [
      'Chain-of-Thought reasoning with human validation loops',
      'Dataset ingestion, prompt versioning, agent state management',
    ],
    tags: ['Multi-Agent', 'HITL', 'CoT'],
    repo: 'https://github.com/MrDangwal',
  },
  {
    title: 'Sales Data AI Agent',
    kind: 'Agents · Analytics',
    summary:
      'Autonomous analytics agent pairing LLMs with Python tool execution for automated EDA, KPI tracking, anomaly detection, and reporting.',
    points: [
      'Natural-language querying over pandas/NumPy pipelines',
      'Multi-step reasoning for decision support and recommendations',
    ],
    tags: ['Agents', 'Automated EDA', 'Tool Calling'],
    repo: 'https://github.com/MrDangwal',
  },
];

export const skills = [
  {
    group: 'Generative & Agentic AI',
    items: ['LLMs / SLMs / VLMs', 'RAG (hybrid BM25+dense)', 'Multi-Agent Orchestration', 'Tool / Function Calling', 'Memory & State Management', 'LoRA / QLoRA / PEFT', 'Prompt Engineering', 'LLM Evaluation (Ragas, DeepEval)'],
  },
  {
    group: 'ML & Deep Learning',
    items: ['PyTorch', 'TensorFlow / Keras', 'Hugging Face Transformers', 'Scikit-learn', 'XGBoost / LightGBM / CatBoost', 'Computer Vision (OpenCV)', 'Time-Series Forecasting', 'SHAP / LIME (XAI)'],
  },
  {
    group: 'Data Engineering & MLOps',
    items: ['Apache Spark / Databricks', 'Airflow', 'Docker / Kubernetes', 'AWS (S3, SageMaker, Glue)', 'GCP (BigQuery, Vertex AI)', 'MLflow / W&B', 'Kafka', 'Terraform / GitHub Actions'],
  },
  {
    group: 'Retrieval & Serving',
    items: ['Qdrant / FAISS', 'vLLM / ONNX Runtime', 'FastAPI', 'SentenceTransformers', 'Quantisation & Distillation', 'Cost-Aware Model Routing'],
  },
  {
    group: 'Languages & Analytics',
    items: ['Python', 'SQL', 'Scala', 'JavaScript', 'R', 'Tableau / Power BI', 'Statistical Analysis & A/B Testing', 'Causal Inference'],
  },
];

export const education = [
  { school: 'Uttarakhand Technical University', degree: 'Bachelor of Technology' },
  { school: 'Subharti University, Meerut', degree: 'Diploma in Engineering' },
];

export const certifications = [
  'British Airways Data Science Job Simulation',
  'KPMG Data Analytics Consulting Virtual Internship',
  'Amazon EC2 Observability',
  'Google Analytics',
  'MySQL',
  'Google Data Analytics (Foundations, Ask Questions, Prepare Data)',
  'Microsoft Excel',
];
