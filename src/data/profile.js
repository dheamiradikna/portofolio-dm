// ────────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update the site
// without touching any component/layout code.
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: "Dhea Putri Miradikna",
  role: "Software Developer • Data & AI Enthusiast",
  location: "Tembalang, Semarang, Indonesia",
  email: "dheamiradikna@gmail.com",
  phone: "+62 895-6326-28435",
  linkedin: "https://linkedin.com/in/dhea-miradikna-153b8324b",
  github: "https://github.com/dheamiradikna",
  photo: "profile.jpg",
  bio: `Software Developer with hands-on backend engineering experience —
  building an ERP360 platform end to end at PT Nata Connexindo (VB.NET,
  ASP.NET WebForms, SQL Server) and supporting technical documentation and
  procurement workflows at GAOTek Inc. Beyond client work, actively builds
  and ships side projects spanning machine learning, data engineering, and
  full-stack ERP systems — from a cost-sensitive fraud-detection dashboard to
  enterprise-grade ERPs with double-entry accounting and role-based access
  control, all published on GitHub. Comfortable across Python, PHP, VB.NET,
  Java, Kotlin, and SQL, with a growing focus on data and AI through
  continuous training in machine learning, data engineering, and generative
  AI (RevoU, MySkill, Dicoding). A fast learner who enjoys solving technical
  problems independently and in a team — see the project list below, or the
  full breakdown in the CV.`,
  funFact: "Never give a hater a stage to stand on.",
};

export const experience = [
  {
    role: "IT Backend Developer",
    company: "PT Nata Connexindo",
    period: "Oct 2023 – Dec 2023",
    points: [
      "Developed and designed an ERP360 website using VB.NET and ASP.NET WebForms with SQL Server, covering finance, inventory, production, and HR modules.",
      "Built and fixed backend business logic and database structures supporting end-to-end ERP processes.",
      "Maintained the website through regular updates and fixes to keep the system running smoothly.",
    ],
  },
  {
    role: "Technical Support Internship",
    company: "GAOTek Inc",
    period: "Aug 2023 – Oct 2023",
    points: [
      "Created and maintained comprehensive product documentation, including user guides and training materials.",
      "Handled sourcing, evaluation, and procurement of products through the Alibaba e-commerce platform.",
      "Joined a team organizing global-scale online conferences.",
    ],
  },
];

// Matches the 6 pinned repositories on github.com/dheamiradikna, in the same order
// (confirmed against a screenshot of the live "Pinned" section — July 2026).
export const projects = [
  {
    name: "etl-pipeline-fashion-studio",
    description:
      "An automated ETL pipeline built for fashion-industry competitor analysis. Scrapes roughly 1,000 products across 50 pages with requests + BeautifulSoup, cleans and transforms the data — deduplication, USD→IDR conversion, type standardization — with pandas, then loads the result into both CSV and Google Sheets. Runs end to end in about 57 seconds and ships with 163 unit tests at 91% coverage.",
    metrics: ["91% test coverage", "867 products cleaned", "~57s runtime"],
    tags: ["Python", "Web Scraping", "BeautifulSoup", "Pandas", "pytest"],
    lang: "Python",
    url: "https://github.com/dheamiradikna/etl-pipeline-fashion-studio",
  },
  {
    name: "dotnet-issues-ml-classification",
    description:
      "A text-classification pipeline that labels the quality of .NET programming discussions as positive, neutral, or negative, using 3,365 real GitHub Issues collected independently via the GitHub REST API. Combines TF-IDF (title + body, up to trigrams), engagement metrics, and one-hot label/topic features into a sparse matrix, then trains and compares Logistic Regression and LinearSVC across three train/test splits — all scoring above 85% test accuracy, with explicit safeguards against TF-IDF data leakage.",
    metrics: ["85%+ accuracy", "3,365 issues scraped", "3 ML schemes compared"],
    tags: ["Python", "Scikit-learn", "TF-IDF", "Logistic Regression", "LinearSVC"],
    lang: "Jupyter Notebook",
    url: "https://github.com/dheamiradikna/dotnet-issues-ml-classification",
  },
  {
    name: "transformhq-erp",
    description:
      "A full-stack ERP system for service and consulting businesses, built from scratch with ASP.NET Web Forms, VB.NET, and SQL Server 2022. Twelve integrated modules — CRM, Sales, Inventory, Finance, double-entry Accounting, HR & Payroll, and Project Management — share a 15-table relational schema, with cross-module automation such as auto stock-out on sales confirmation and auto-posted accounting journals, all wrapped in explicit SQL transactions for atomicity. About 9,000 lines of code across 131 files, with 3-tier role-based access control and a Tailwind CSS dashboard.",
    metrics: ["12 modules", "~9,000 LOC", "15 tables"],
    tags: ["VB.NET", "ASP.NET Web Forms", "SQL Server", "RBAC", "Tailwind CSS"],
    lang: "Visual Basic .NET",
    url: "https://github.com/dheamiradikna/transformhq-erp",
  },
  {
    name: "bizzflow-erp",
    description:
      "A web-based ERP built with ASP.NET Core 8 MVC and Entity Framework Core, covering six integrated modules — Inventory, Sales, Purchasing, Finance, HR & Payroll, and Administration — for small-to-medium businesses. Features six-role RBAC, two-tier purchase-approval workflows, AR/AP tracking with automatic status transitions, automatic reorder triggers with email alerts via MailKit, a global audit trail built into SaveChangesAsync, and soft-delete through EF Core global query filters. Around 12,000 lines of code across 28 database tables, plus a REST API for external POS integration.",
    metrics: ["6 modules", "~12,000 LOC", "28 tables"],
    tags: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "REST API"],
    lang: "C#",
    url: "https://github.com/dheamiradikna/bizzflow-erp",
  },
  {
    name: "fraud-dashboard",
    description:
      "A credit-card fraud detection dashboard designed around real business cost, not just model accuracy. Since fraud makes up only ~0.17% of transactions, accuracy is a misleading metric — a model that flags nothing scores 99.8%. This project instead asks which transactions are actually worth an analyst's time, using an unsupervised Isolation Forest model (no labeled fraud data required) paired with cost-sensitive threshold optimization that simulates different review-cost and fraud-loss scenarios to pick the cheapest cutoff rather than the statistically 'best' one. Ships as an interactive Streamlit dashboard with per-transaction SHAP explanations, live filtering, and a persisted analyst review workflow, fully configurable via .env and containerized with Docker. In simulation, tuning the cost parameters cut estimated operating cost by over 10x in one scenario (~$894 → ~$59) while holding the fraud-detection rate steady.",
    metrics: ["10x cost reduction", "$894 → $59", "Unsupervised model"],
    tags: ["Python", "Scikit-learn", "Isolation Forest", "SHAP", "Streamlit", "Docker"],
    lang: "Python",
    url: "https://github.com/dheamiradikna/fraud-dashboard",
  },
  {
    name: "CNN-Beans-Classification",
    description:
      "A convolutional neural network trained on the Beans Disease dataset to classify bean-leaf images into three categories — angular leaf spot, bean rust, and healthy — demonstrating an end-to-end image classification workflow from data loading through model evaluation.",
    tags: ["Python", "TensorFlow/Keras", "CNN", "Image Classification"],
    lang: "Jupyter Notebook",
    url: "https://github.com/dheamiradikna/CNN-Beans-Classification",
  },
];

export const skills = {
  "Programming Languages": [
    "Python", "PHP", "VB.NET", "Java", "Kotlin", "HTML", "CSS", "SQL",
  ],
  "Databases & Data Tools": [
    "MySQL", "PostgreSQL", "Google Colab", "Looker Studio",
  ],
  "Office & Graphic Design": [
    "Microsoft Office", "Adobe Photoshop", "CorelDRAW",
  ],
  "Networking & Security": [
    "CISCO Networking Fundamentals", "Cybersecurity Essentials",
  ],
};

export const trainings = [
  {
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    org: "Dicoding Indonesia",
    year: "2026",
    points: [
      "Exploratory Data Analysis (EDA): loading data into notebooks, handling missing data, and visualization.",
      "Data preprocessing with Data Wrangler; ML model training and tracking with MLflow on Microsoft Fabric.",
      "Model deployment and batch prediction, including saving results to Delta tables.",
    ],
  },
  {
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    org: "Dicoding Indonesia",
    year: "2026",
    points: [
      "Built and deployed Generative AI applications using Azure AI Foundry, including Azure OpenAI integration.",
      "Implemented RAG (Retrieval Augmented Generation) patterns with Azure AI Search and Prompt Flow.",
      "Built and deployed an interactive chat application using the Azure AI Foundry SDK.",
    ],
  },
  {
    title: "AI Mini Camp",
    org: "Dicoding Indonesia",
    year: "2026",
    points: [
      "Completed classes on Practical AI for Productivity and Generative AI through a beginner scholarship program.",
      "Attended Online Instructor-Led Training sessions with experienced AI practitioners.",
    ],
  },
  {
    title: "Data Analyst Bootcamp Batch 9",
    org: "MySkill",
    year: "2023",
    points: [
      "Data processing with Python (Google Colab), PostgreSQL, and visualization with Looker Studio.",
      "Core formulas, IF/ELSE logic, data formatting & cleansing, VLOOKUP, and Pivot Tables.",
    ],
  },
  {
    title: "Data Analytics Mini Course",
    org: "RevoU",
    year: "2022",
    points: [
      "Data analysis fundamentals: formulas, conditionals, data cleaning, VLOOKUP, and Pivot Tables.",
      "Introduction to Python in Google Colab and MySQL for data management.",
    ],
  },
];

export const certifications = [
  { name: "CISCO CCNA Routing and Switching", year: "2019" },
  { name: "Oracle Academy Java Fundamentals", year: "2019" },
  { name: "CISCO Cybersecurity Essentials", year: "2020" },
  { name: "CISCO Introduction to Cybersecurity", year: "2020" },
  { name: "RevoU Mini Course – Data Analytics Program", year: "2022" },
  { name: "MySkill – Data Analyst Bootcamp", year: "2023" },
  { name: "Dicoding – AI Mini Camp", year: "2026" },
  { name: "Dicoding – Belajar Penerapan Data Science dengan Microsoft Fabric", year: "2026" },
  { name: "Dicoding – Membangun Aplikasi Gen AI dengan Microsoft Azure", year: "2026" },
];

export const certificatesLink = "https://bit.ly/allCertificatesDM";
