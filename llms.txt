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
- Email: maheratharilyas@gmail.com

## About

I've automated everything from crypto trading bots in college, to development workflows and manual audit processes with AI at work, to my own daily routines. I work across the full pipeline, from system design and AI integration to the user experience of what gets shipped, and I iterate with users and POCs until a solution actually delivers. I care more about whether something solves the problem cleanly than what stack it's built on.

Working on an automation or AI problem? Let's talk.

## Projects

### Life OS (2025 to now)

Personal analytics MCP server and reporting agent. Normalizes calendar, habits, finance and wearable health data into scored daily records.

- Result: Weekly and monthly reviews written automatically by agent skills.
- Stack: MCP · Cloudflare Workers
- A production MCP server on Cloudflare Workers exposes calendar time logs, habit tracking, finance exports and Garmin health data (sleep, HRV, body battery, stress, training readiness) as typed tools.
- A serverless ETL layer turns the four sources into one scored record per day, with deterministic scoring and overlap resolution, so weeks and months are directly comparable.
- Modular agent skills: calendar, habit and finance analysis feed the review skills, which define the scoring formulas and page templates.
- Weekly and monthly reviews land in Notion with no manual data entry.

### WePrep (2024)

AI interview coach. LLM-generated questions, asked by a lip-synced synthetic interviewer, with every answer scored.

- Result: 1st place, Bilkentpreneurs Challenge 2024 · Best Data Science Project.
- Stack: FastAPI · Next.js · MongoDB
- Final-year senior project, built by a team of five; Best Data Science Project across a cohort of about 200.
- An LLM generates the interview questions.
- A lip-synced synthetic interviewer asks them on screen.
- CNN-based models score emotion and body language while the candidate answers.
- An LLM evaluates the content of each answer, with speech-to-text and OCR in the pipeline.
- Study resources are scraped for the candidate's weakest areas.
- Won 1st place and a 100,000 TL prize at the Bilkentpreneurs Challenge, covered by Bilkent News (https://bilkentnews.bilkent.edu.tr/?p=6972).

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
- Built by a team of two over 3 months in the AWS University Engagement program, mentored by two senior AWS professionals.
- An LLM generates a personalized roadmap for the skill the learner picks.
- Curated sources are web-scraped and turned into daily quizzes and flashcard infobits, with gamification to keep sessions short and frequent.
- Fully serverless on AWS Lambda and DynamoDB, with SageMaker and a Next.js front end.

## More projects

### Blitz (2026)

Fast multiple-choice drill app for learning German. Tap, see the answer, next. No animations in the way.

- Stack: TypeScript · Vite · PWA · Cloudflare Workers
- Drills for articles, Dativ vs Akkusativ and word meaning in both directions.
- Answer options are reshuffled every time, so you learn the word, not the button position.
- Separate decks, so each session targets one set.
- Word lists sync from a notes database occasionally; it is never a live dependency.

### Schwa (2026)

Accent and articulation practice app with a step-by-step roadmap of sound fixes.

- Stack: Flutter · FastAPI · Supabase · Azure Speech

## Experience

### Applied AI Engineer, TestFabrik AG
`2023.07 to now` · Saarbrücken, Germany · remote contractor until 2025.03

#### Inference platform

- Sole architect of the central LLM inference layer that every AI feature on the webMate QA platform runs through, replacing provider-specific OpenAI calls: tool calling, persisted conversations with compaction, tenant rate limiting, token and cost tracking, and provider adapters.
- Evaluated HTTP against message queues and chose async RabbitMQ transport, tested the interface from Python and Scala clients, and moved existing NLP and embedding generation onto the platform.
- Provisioned EU-hosted Azure OpenAI dev and prod resources as a second provider, with a default provider per instance, per-customer provider selection and a config UI for operators.

#### Self-hosted models

- Made self-hosted LLM inference 1.64x faster (single-stream) and raised KV-cache capacity 1.7x on vLLM through quantization, a prefix-cache fix and async scheduling, with 0 of 1,173 high-confidence predictions changed.
- Traced zero prefix-cache hits to the model's forced attention block size; the fix took cache hits on multi-turn chats from 0% to 46%. Rejected a 2.12x faster 4-bit quantization because it failed a vision task and gave no end-to-end gain.
- Deployed the in-house vLLM server as a hybrid cloud and on-prem alternative to hosted providers, evaluated GPU hosting with Hetzner and other European providers, and rolled out the AI microservices on Kubernetes and OKD.

#### Evaluation and cost

- Built a benchmarking harness that scores candidate LLMs on accuracy, latency and cost against ground-truth accessibility cases on 100+ websites, and used it to evaluate the move from OpenAI to self-hosted models.
- Cut model cost roughly 3x across a model migration through input preprocessing, request chunking and inference tuning, re-validated against ACT test cases.
- Built a chatbot testing framework end to end in Scala, modelled on DeepEval and promptfoo concepts: simulated conversations scored by an LLM judge on custom rubrics, red teaming with prompt-injection attacks on system prompts, test datasets and regression testing.

#### Accessibility

- Built an LLM and vision based accessibility analysis service from scratch, giving webMate the highest automated coverage of any tool in the W3C ACT implementation report (https://www.w3.org/WAI/standards-guidelines/act/implementations/webmate-accessibility-workbench/). Separately, I automated 53 of the 87 WCAG 2.2 rules myself (45 fully, 8 partially).
- Checks cover headings, labels, form instructions, links in context, language, readability and DOM relationships, run in parallel, in several languages and only against the requirements that apply.
- Localized axe-core results and AI-generated findings into German and French: locale-aware prompts and a Maven-based resource build replacing legacy locale handling.
- Researched native mobile accessibility testing, then shipped the Mobile Automation Run and Workbench plugin for Android and iOS on an OpenSTF device farm: native screenshots, scrolling and accessibility rectangles across viewports.
- Built the Jira integration that turns test findings into issues, with aggregation that collapses repetitive findings into triageable ones, plus automated test scripts in Playwright and Selenium.

#### Leadership and clients

- Lead AI feature development through planning, scoping, task delegation and code review: I direct one engineer full time, bring in DevOps and other engineers when the work needs them, and own decisions on model selection, inference providers and GPU infrastructure.
- Lead TestFabrik's side of the LowBarrier (https://lowbarrier.de/) research consortium with DFKI, Fraunhofer IESE and WSC on WCAG 3.0 accessibility for mobile apps: roadmap, requirements, architecture, user stories and WCAG evaluation matrices.
- Ran a client proof of concept for webMate, from requirements meetings to a live demo on the client's own product, and worked with product management on beta releases, use cases and UX.
- Directed proofs of concept with local LLMs, including fine-tuning and custom datasets, and onboarded part-time engineers and interns.
- Built a Raspberry Pi captcha solver for a robotic hand, combining hardware control with AI recognition.

### Full-Stack Developer, LAYERMARK
`2022.06 to 2023.07` · Washington, D.C., then remote

- Rebuilt Java Spring backend services with cache management, cutting response times by 60%.
- Rebuilt the UI as reusable React components on Ant Design and DevExtreme, cutting front-end development time by 70%.
- Introduced a Drools rules engine, so product offerings could be configured without code changes.
- Built REST API collections in Spring with the matching front-end pages on PostgreSQL.

### Automated Trading Systems Developer, Freelance
`2021.09 to 2024.04` · Fiverr and Upwork

- Designed and deployed 75+ crypto trading bots for international clients at a 5/5 rating.
- Integrated Binance, KuCoin, Telegram, Discord and CoinMarketCap through their APIs, websockets and web scraping.
- Built the Python sync and state layer behind them: concurrent price feeds, order execution and portfolio tracking across exchanges, with smart notifications and real-time technical analysis.
- Back-tested strategies on historical candle data and delivered PnL reports with optimisation plans.

### Graphic Designer and Social Media Manager, Al-Huda Educational Institute
`2018.01 to 2020.08` · Alongside school

- Illustrated 72 workbooks and school magazines for primary classes in CorelDraw.
- Designed flyers, posters and video ads for school events and campaigns.
- Planned and ran the school's social media, growing its YouTube channel to 17k+ subscribers and its Facebook page to 2.1k+ followers.

### Intern, tutor and events lead, Earlier roles
`2016 to 2020` · Internships, tutoring and events

- Head of Events, Beaconhouse School System (2018 to 2020): ran table tennis tournaments for 100+ participants.
- Curriculum development intern, CARE Foundation (summer 2019): revised the annual curriculum for underprivileged middle-school students; Best Intern Award in a cohort of 25.
- Peer tutor, Beaconhouse School System (2018 to 2019): organised study sessions for AS-Level Physics and Computer Science and matched tutors to students.
- Marketing and management intern, Shaukat Khanum Memorial Cancer Hospital (summer 2016): convinced the management of 200+ shops to host donation boxes.

## Skills

- AI & ML: LLMs, LLM evaluation, LLM-as-a-judge, red teaming, harness engineering, RAG, embeddings and vector search, MCP, agentic workflows, function calling, prompt and context engineering, fine-tuning (LoRA), quantization, vLLM, llama.cpp, Hugging Face Transformers, PyTorch, TensorFlow, CNNs, computer vision, NLP, speech-to-text, OCR
- Backend & Data: Python, FastAPI, Django, Java, Spring Boot, Scala, PostgreSQL, MySQL, MongoDB, DynamoDB, Elasticsearch, RabbitMQ, Celery, Liquibase, Drools, Maven, web scraping, C++
- Cloud & DevOps: AWS (Lambda, DynamoDB, SageMaker, Bedrock), Azure (OpenAI Service, AI Foundry), Docker, Kubernetes, OKD, Ansible, CI/CD, Grafana, Cloudflare Workers, GPU servers on Hetzner
- Frontend: React, Next.js, Angular, TypeScript, Ant Design, DevExtreme, Tailwind CSS, Figma, Flutter
- Testing & QA: Playwright, Selenium, Appium, OpenSTF, WCAG and ACT accessibility testing, Android and iOS accessibility testing, Jira integration
- Design & media: CorelDraw, Adobe Premiere Pro, social media campaigns

## Education

- B.Sc. Computer Engineering, Bilkent University, 2020 to 2024. CGPA 3.69, Magna Cum Laude, Full merit scholarship as an international student, High Honor Roll in all 8 semesters (3.88 as a freshman). Coursework: Algorithms, Object-Oriented Software Engineering, Database Systems, Programming Languages, Computer Organization, Cloud Computing, Software Validation and Verification, Probability and Statistics, Engineering Management
- Exchange semester, Saarland University, 2023. Computer science, April to September. Coursework: Machine Learning, High-Level Computer Vision, Foundations of Web Security, Ethics for Nerds
- A-Levels, Beaconhouse School System, 2018 to 2020. Valedictorian, 4.0 GPA at AS and A-Level, Highest Achiever Award for 4 A*
- O-Levels, Beaconhouse School System, 2016 to 2018. Cambridge Outstanding Learners Award for Computer Science

## Honors

- Bilkentpreneurs Challenge, 100,000 TL prize (2024 · 1st place)
- Best Data Science Project, across a cohort of about 200 (2024 · Award)
- Best Project, AWS University Engagement, against teams from 3 universities (2024 · Runner-up)
- Magna Cum Laude, full merit scholarship (2024 · Bilkent)
- BusinessPoint'22, 700+ participants, judged by PepsiCo, P&G, EY, Armut and Audi (2022 · 2nd runner-up)
- High Honor Roll in all 8 semesters (2020 to 2024 · Bilkent)
- A-Level Highest Achiever (2020 · Beaconhouse)
- Best Intern Award, cohort of 25 (2019 · CARE Foundation)
- Regional table tennis champion (2019 · Gold medal)
- Outstanding Learners Award, best O-Level Computer Science result in the region (2018 · Cambridge)
- National Best of Category for "Earth Battery", electricity from mud (School · Intel ISEF)
- National English contest winner, 1st in Pakistan (School · GSEA)

## Leadership

- Table tennis team; runners-up at Angora Cup 2021 (2022 to 2024 · Captain)
- Ran orientation week for 100+ international exchange students (2023 to 2024 · ESN Bilkent)
- Bilkent United: tournaments and screenings for 200+ participants, a team of 20 (2021 to 2023 · Vice-president)
- Trials and tournaments for 80+ students in high school (2019 to 2020 · House captain)

## Languages

English (C2), Urdu (C2), Turkish (A2), German (A2)

## Outside work

Table tennis (2019 regional champion) and kickboxing.
