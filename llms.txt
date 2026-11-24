# Maher Athar Ilyas

Applied AI Engineer building LLM inference platforms and AI automation.
Location: Germany

> If something can be automated, I'll find a way.

## Key figures

| Value | Detail |
|---|---|
| 5+ yrs | building production software, 3+ in applied AI |
| Sole architect | of the LLM platform behind every AI feature in a commercial QA product |
| #1 | highest automated coverage of any tool in the W3C ACT implementation report, built with LLM and vision models |

## Links

- CV: https://atherrrrr.github.io/cv/Maher-Athar-Ilyas-CV.pdf
- LinkedIn: https://www.linkedin.com/in/athar-ilyas
- GitHub: https://github.com/atherrrrr
- Contact: via LinkedIn (https://www.linkedin.com/in/athar-ilyas)

## About

I've automated everything from crypto trading bots in college, to development workflows and manual audit processes with AI at work, to my own daily routines. I work across the full pipeline, from system design and AI integration to the user experience of what gets shipped, and I iterate with users and POCs until a solution actually delivers. I care more about whether something solves the problem cleanly than what stack it's built on.

Working on an automation or AI problem? Let's talk.

## Experience

### Applied AI Engineer, TestFabrik AG
`2023.07 to now` · Saarbrücken, Germany · hybrid

- Sole architect of the central LLM inference layer that every AI feature on the webMate QA platform runs through: async RabbitMQ transport, multi-provider adapters with per-customer selection, tool calling, persisted conversations, tenant rate limiting, and token and cost tracking.
- Built an LLM and vision based accessibility analysis service from scratch, giving webMate the highest automated coverage of any tool in the W3C ACT implementation report (https://www.w3.org/WAI/standards-guidelines/act/implementations/webmate-accessibility-workbench/). Separately, I automated 53 of the 87 WCAG 2.2 rules myself (45 fully, 8 partially).
- Made self-hosted LLM inference 1.64x faster (single-stream) and raised KV-cache capacity 1.7x on vLLM through quantization, a prefix-cache fix and async scheduling, validated against the full-precision model.
- Built a benchmarking harness that scores candidate LLMs on accuracy, latency and cost against ground-truth accessibility cases on 100+ websites, and used it to evaluate the move from OpenAI to self-hosted models.
- Built a chatbot testing framework end to end in Scala: LLM-as-a-judge scoring on custom rubrics, red teaming with prompt-injection attacks, and regression testing on test datasets.
- Plan and scope AI features end to end and make the technical calls on models, inference providers and GPU hosting.
- Represent TestFabrik in the LowBarrier research consortium with DFKI and Fraunhofer IESE on WCAG 3.0 accessibility for mobile apps.

### Full-Stack Developer, LAYERMARK
`2022.06 to 2023.07` · Washington, D.C., then remote

- Rebuilt Java Spring backend services with cache management, cutting response times by 60%.
- Rebuilt the UI as reusable React components on Ant Design and DevExtreme, cutting front-end development time by 70%.
- Introduced a Drools rules engine, so product offerings could be configured without code changes.

### Automated Trading Systems Developer, Freelance
`2021.09 to 2024.04` · Fiverr and Upwork

- Designed and deployed 75+ crypto trading bots for international clients at a 5/5 rating.
- Integrated Binance, KuCoin, Telegram, Discord and CoinMarketCap through their APIs, websockets and web scraping.

## Projects

### Life OS (2025 to now)

Personal analytics MCP server and reporting agent. Normalizes calendar, habits, finance and wearable health data into scored daily records.

- Result: Weekly and monthly reviews written automatically by agent skills.
- Stack: MCP · Cloudflare Workers
- A production MCP server on Cloudflare Workers exposes calendar time logs, habit tracking, finance exports and Garmin health data (sleep, HRV, body battery, stress, training readiness) as typed tools.
- A serverless ETL layer turns the four sources into one scored record per day, with deterministic scoring and overlap resolution, so weeks and months are directly comparable.
- Modular agent skills: calendar, habit and finance analysis feed the review skills, which define the scoring formulas and page templates.
- Weekly and monthly reviews land in Notion with no manual data entry.

### School management system (2026 to now)

CampusPilot, the system a four-branch school runs on: admissions, fees, attendance, exams, payroll and a parent app.

- Result: In production since June 2026 with 1,235 active students across 4 branches.
- Stack: Spring Boot · PostgreSQL · Next.js · Docker
- Migrated 17 years of records from a legacy Oracle database: 4,688 students, 120,000+ fee challans and 189,000+ result entries.
- Monthly fee challans generated per branch and class as print-ready PDFs; 3,730 so far.
- Since go-live, staff have recorded 44,000+ attendance marks, 11,900+ results and 5,500+ payments.
- Six roles and 116 permissions keep each staff member to their own branch and tasks.

### WePrep (2024)

AI interview coach. LLM-generated questions, asked by a lip-synced synthetic interviewer, with every answer scored.

- Result: 1st place, Bilkentpreneurs Challenge 2024, winning a 100,000 TL prize.
- Result: Best Data Science Project award, across about 200 graduating students.
- Stack: FastAPI · Next.js · MongoDB
- Final-year senior project, built by a team of five.
- An LLM generates the interview questions.
- A lip-synced synthetic interviewer asks them on screen.
- CNN-based models score emotion and body language while the candidate answers.
- An LLM evaluates the content of each answer, with speech-to-text and OCR in the pipeline.
- Study resources are scraped for the candidate's weakest areas.
- The Bilkentpreneurs win was covered by Bilkent News (https://bilkentnews.bilkent.edu.tr/?p=6972).

### SkillSprint (2024)

Serverless micro-learning platform. LLM-generated skill roadmaps, then daily quizzes and flashcards to work through them.

- Result: Runner-up in the AWS University Engagement program, across 3 universities.
- Stack: AWS Lambda · DynamoDB · SageMaker · Next.js
- Built by a team of two over 3 months in the AWS University Engagement program, mentored by two senior AWS professionals.
- An LLM generates a personalized roadmap for the skill the learner picks.
- Curated sources are web-scraped and turned into daily quizzes and flashcard infobits, with gamification to keep sessions short and frequent.
- Fully serverless on AWS Lambda and DynamoDB, with SageMaker and a Next.js front end.

## More projects

- **Blitz** (2026): Fast multiple-choice drill app for learning German, built for one tap per answer with no animations in the way. Stack: TypeScript · Vite · PWA · Cloudflare Workers.
- **Schwa** (2026): Accent and articulation practice app with a step-by-step roadmap of sound fixes. Stack: Flutter · FastAPI · Supabase · Azure Speech.

## Skills

- AI & ML: LLMs, LLM evaluation, agentic workflows, MCP, RAG, vLLM, quantization, fine-tuning (LoRA), PyTorch, computer vision
- Backend & Data: Python, Java, Scala, FastAPI, Spring Boot, PostgreSQL, MongoDB, Elasticsearch, RabbitMQ
- Cloud & DevOps: AWS (Lambda, DynamoDB, SageMaker, Bedrock), Azure (OpenAI Service, AI Foundry), Docker, Kubernetes, CI/CD, Cloudflare Workers, Grafana, Ansible
- Frontend & Testing: React, Next.js, TypeScript, Angular, Flutter, Tailwind CSS, Playwright, Selenium, Appium, WCAG and ACT accessibility testing

## Education

- B.Sc. Computer Engineering, Bilkent University, 2020 to 2024. CGPA 3.69, Magna Cum Laude, Full merit scholarship as an international student, High Honor Roll in all 8 semesters (3.88 as a freshman)
- Exchange semester, Saarland University, 2023. Computer science, April to September

## Honors

- Bilkentpreneurs Challenge, 100,000 TL prize (2024 · 1st place)
- Best Data Science Project, across a cohort of about 200 (2024 · Award)
- Best Project, AWS University Engagement, against teams from 3 universities (2024 · Runner-up)
- BusinessPoint'22, 700+ participants, judged by PepsiCo, P&G, EY, Armut and Audi (2022 · 2nd runner-up)

## Leadership

Table tennis team captain at Bilkent (2022 to 2024) and ESN Bilkent orientation organizer for 100+ exchange students.

## Languages

English (C2), Urdu (C2), Turkish (A2), German (A2)

## Outside work

Table tennis (2019 regional champion) and kickboxing.
