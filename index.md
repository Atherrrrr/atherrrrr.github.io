# Maher Athar Ilyas

Applied AI Engineer building LLM inference platforms and AI automation.
Location: Germany

> If something can be automated, I'll find a way.

## Key figures

| Value | Detail |
|---|---|
| 5+ yrs | building production software, 3+ in applied AI |
| Sole architect | of the LLM platform behind every AI feature in a commercial QA product |
| #1 | most W3C accessibility test rules covered of any automated tool, automated with LLM and vision models |

## Links

- CV: https://atherrrrr.github.io/cv/Maher-Athar-Ilyas-CV.pdf
- LinkedIn: https://www.linkedin.com/in/athar-ilyas
- GitHub: https://github.com/atherrrrr
- Email: maheratharilyas@gmail.com

## About

I've automated everything from crypto trading bots in college, to development workflows and manual audit processes with AI at work, to my own daily routines. I work across the full pipeline, from system design and AI integration to the user experience of what gets shipped, and I iterate with users and POCs until a solution actually delivers. I care more about whether something solves the problem cleanly than what stack it's built on.

Working on an automation or AI problem? Let's talk.

## Projects

### Life OS (2025 to now)

Personal analytics MCP server and reporting agent. Normalizes calendar, habits, finance and wearable health data into scored daily records.

- Result: Weekly and monthly reviews written automatically by agent skills.
- Stack: MCP · Cloudflare Workers
- Four sources in one schema: calendar time logs, habit tracking, finance exports and wearable health data.
- Each day becomes one scored record, so weeks and months are directly comparable.
- Agent skills query the MCP tools and write the weekly and monthly reviews without manual work.

### WePrep (2024)

AI interview coach. LLM-generated questions, asked by a lip-synced synthetic interviewer, with every answer scored.

- Result: 1st place, Bilkentpreneurs Challenge 2024 · Best Data Science Project.
- Stack: FastAPI · Next.js · MongoDB
- An LLM generates the interview questions.
- A lip-synced synthetic interviewer asks them on screen.
- CNN-based models score emotion and body language while the candidate answers.
- An LLM evaluates the content of each answer.

### School management system (2026 to now)

CampusPilot, the system a four-branch school runs on: admissions, fees, attendance, exams, payroll and a parent app.

- Result: In production since June 2026 with 1,235 active students across 4 branches.
- Stack: Spring Boot · PostgreSQL · Next.js · Docker
- Migrated 17 years of records from a legacy Oracle database: 4,688 students, 120,000+ fee challans and 189,000+ result entries.
- Monthly fee challans generated per branch and class as print-ready PDFs; 3,730 so far.
- Since go-live, staff have recorded 44,000+ attendance marks, 11,900+ results and 5,500+ payments.
- Six roles and 116 permissions keep each staff member to their own branch and tasks.

### SkillSprint (2024)

Serverless micro-learning platform. LLM-generated skill roadmaps, then daily quizzes and flashcards to work through them.

- Result: Runner-up in the AWS University Engagement program, across 3 universities.
- Stack: AWS Lambda · DynamoDB · SageMaker · Next.js
- An LLM generates a roadmap for the skill the learner picks.
- Daily quizzes and flashcards keep sessions short and frequent.
- Fully serverless on AWS Lambda and DynamoDB, with SageMaker and a Next.js front end.

### More projects

- **Blitz** (2026): Fast multiple-choice drill app for learning German. Tap, see the answer, next. Stack: TypeScript · Vite · PWA · Cloudflare Workers.
- **Schwa** (2026): Accent and articulation practice app with a step-by-step roadmap of sound fixes. Stack: Flutter · FastAPI · Supabase · Azure Speech.

## Experience

### Applied AI Engineer, TestFabrik AG
`2023.07 to now` · Saarbrücken, Germany · remote contractor until 2025.03

- Sole architect of the central LLM inference layer that every AI feature on the webMate QA platform runs through: tool calling, persisted conversations with compaction, async RabbitMQ transport, tenant rate limiting, cost tracking and EU-hosted Azure OpenAI with per-customer provider selection.
- Built an LLM and vision based accessibility analysis service from scratch, reaching the highest automated coverage of any tool in the W3C ACT implementation report (https://www.w3.org/WAI/standards-guidelines/act/implementations/webmate-accessibility-workbench/) (53 of 87 WCAG 2.2 rules); 45+ W3C test rules authored.
- Made self-hosted LLM inference 1.64x faster (single-stream) and raised KV-cache capacity 1.7x on vLLM through quantization, a prefix-cache fix and async scheduling, with 0 of 1,173 high-confidence predictions changed.
- Built a benchmarking harness that scores candidate LLMs on accuracy, latency and cost against ground-truth accessibility cases on 100+ websites, and used it to evaluate the move from OpenAI to self-hosted models.
- Cut model cost roughly 3x across a model migration through input preprocessing, request chunking and inference tuning, re-validated against ACT test cases.
- Built a chatbot testing framework end to end in Scala, modelled on DeepEval and promptfoo: LLM-as-a-judge scoring on custom rubrics, red teaming, test datasets and regression testing.
- Extended AI-generated findings to German and French, and rolled out the AI microservices on Kubernetes: deployment configuration, pod management, monitoring and debugging.
- Lead AI feature development through planning, task delegation and code review, owning decisions on model selection, inference providers and GPU infrastructure; directed proofs of concept with local LLMs, including fine-tuning and custom datasets.
- Lead TestFabrik's side of the LowBarrier (https://lowbarrier.de/) research consortium with DFKI, Fraunhofer IESE and WSC, shaping roadmap, requirements and architecture for WCAG 3.0 conformance.
- Ran a client proof of concept for webMate, from requirements meetings to a live demo on the client's own product, and worked with product management on beta releases, use cases and UX.

### Full-Stack Developer, LAYERMARK
`2022.06 to 2023.07` · Washington, D.C., then remote

- Rebuilt Java Spring backend services with cache management, cutting response times by 60%.
- Rebuilt the UI as reusable React components on Ant Design and DevExtreme, cutting front-end development time by 70%.
- Introduced a Drools rules engine, so product offerings could be configured without code changes.
- Built REST API collections in Spring with the matching front-end pages on PostgreSQL, following SOLID practices.

### Automated Trading Systems Developer, Freelance
`2021.09 to 2024.04` · Fiverr and Upwork

- Designed and deployed 75+ crypto trading bots for international clients at a 5/5 rating.
- Integrated Binance, KuCoin, Telegram, Discord and CoinMarketCap through their APIs, websockets and web scraping.
- Built portfolio synchronisation, smart notifications and real-time technical analysis on live market data.
- Back-tested strategies on historical candle data and delivered PnL reports with optimisation plans.

### Graphic Designer and Social Media Manager, Al-Huda Educational Institute
`2018.01 to 2020.08` · Alongside school

- Illustrated 72 workbooks and school magazines for primary classes in CorelDraw.
- Designed flyers, posters and video ads for school events and campaigns.
- Planned and ran a social media campaign that grew the school's Facebook page to 2.1k+ followers.

### Intern and peer tutor, Earlier roles
`School years` · Internships and tutoring

- Marketing and management intern, Shaukat Khanum Memorial Cancer Hospital: convinced the management of 200+ shops to host donation boxes.
- Curriculum development intern, Care Foundation: revised the annual curriculum for underprivileged middle-school students; Best Intern Award in a cohort of 25.
- Peer tutor, Beaconhouse School System: organised study sessions for AS-Level Physics and Computer Science and matched tutors to students.

## Skills

- AI & ML: LLMs, LLM evaluation, LLM-as-a-judge, red teaming, RAG, embeddings and vector search, MCP, agentic workflows, function calling, prompt and context engineering, fine-tuning (LoRA), quantization, vLLM, llama.cpp, Hugging Face Transformers, PyTorch, TensorFlow, CNNs, computer vision, NLP
- Backend & Data: Python, FastAPI, Django, Java, Spring Boot, Scala, PostgreSQL, MySQL, MongoDB, DynamoDB, Elasticsearch, RabbitMQ, Celery, Liquibase, Drools, C++
- Cloud & DevOps: AWS (Lambda, DynamoDB, SageMaker, Bedrock), Azure (OpenAI Service, AI Foundry), Docker, Kubernetes, Ansible, CI/CD, Grafana, Cloudflare Workers
- Frontend: React, Next.js, Angular, TypeScript, Ant Design, DevExtreme, Tailwind CSS, Figma, Flutter
- Testing & QA: Playwright, Selenium, Appium, OpenSTF, WCAG and ACT accessibility testing
- Design & media: CorelDraw, Adobe Premiere Pro, social media campaigns

## Education

- B.Sc. Computer Engineering, Bilkent University, 2020 to 2024. CGPA 3.69, Magna Cum Laude, Full merit scholarship, High Honor Roll in all 8 semesters. Coursework: Algorithms, Object-Oriented Software Engineering, Database Systems, Programming Languages, Computer Organization, Cloud Computing, Software Validation and Verification, Probability and Statistics, Engineering Management
- Exchange semester, Saarland University, 2023. Computer science. Coursework: Machine Learning, High-Level Computer Vision, Foundations of Web Security, Ethics for Nerds
- A-Levels, Beaconhouse School System, 2018 to 2020. Valedictorian, 4.0 GPA at AS and A-Level, Highest Achiever Award for 4 A*

## Honors

- Bilkentpreneurs Challenge, 100,000 TL prize (2024, 1st place)
- Best Data Science Project (2024, Award)
- AWS University Engagement, 3 universities (2024, Runner-up)
- BusinessPoint'22, 700+ participants, judged by PepsiCo, P&G, EY, Armut and Audi (2022, 2nd runner-up)
- High Honor Roll in all 8 semesters (2020 to 2024, Bilkent)
- Regional table tennis champion (2019, Gold medal)
- Outstanding Learners Award, regional distinction in O-Level Computer Science (2018, Cambridge)
- National Best of Category for "Earth Battery", electricity from mud (School, Intel ISEF)
- National English contest winner, 1st in Pakistan (School, GSEA)

## Leadership

- Table tennis team; runners-up at Angora Cup 2021 (2022 to 2024, Captain)
- Ran orientation week for 100+ international exchange students (2023 to 2024, ESN Bilkent)
- Bilkent United: tournaments and screenings for 200+ participants, a team of 20 (2021 to 2023, Vice-president)
- Trials and tournaments for 80+ students in high school (2019 to 2020, House captain)

## Languages

English (C2), Urdu (C2), Turkish (A2), German (A2)

## Outside work

Table tennis (2019 regional champion) and kickboxing.
