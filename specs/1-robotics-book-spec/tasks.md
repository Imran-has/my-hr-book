---
description: "Task list for the 'Physical AI & Humanoid Robotics' book."
---

# Tasks: Physical AI & Humanoid Robotics Book

**Input**: Design documents from `/specs/1-robotics-book-spec/`

## Phase 1: Setup

**Purpose**: Initialize the Docusaurus project and set up the basic structure for the book.

- [x] T001 Initialize Docusaurus project in `my-hr-book/`.
- [x] T002 Configure Docusaurus sidebars in `my-hr-book/sidebars.ts` for all book parts and chapters.
- [x] T003 Create the project structure for the embedded projects in `my-hr-book/src/projects/`.
- [x] T004 Create the initial markdown files for all chapters and appendices in `my-hr-book/docs/`.

---

## Phase 2: Part I — FOUNDATIONS OF PHYSICAL AI

**Goal**: Write the foundational chapters of the book.
**Independent Test**: Part I can be read and understood on its own.

- [ ] T005 [P] [Part I] Write Chapter 1: Introduction to Physical AI in `my-hr-book/docs/part-i/chapter-1.md`.
- [ ] T006 [P] [Part I] Write Chapter 2: Humanoid Robotics Landscape in `my-hr-book/docs/part-i/chapter-2.md`.

---

## Phase 3: Part II — MODULE 1: THE ROBOTIC NERVOUS SYSTEM (ROS 2)

**Goal**: Write the chapters on ROS 2.
**Independent Test**: Part II can be read and the examples can be run independently.

- [ ] T007 [P] [Part II] Write Chapter 3: ROS 2 Architecture in `my-hr-book/docs/part-ii/chapter-3.md`.
- [ ] T008 [P] [Part II] Write Chapter 4: Building ROS 2 Packages (Python) in `my-hr-book/docs/part-ii/chapter-4.md`.
- [ ] T009 [P] [Part II] Write Chapter 5: URDF & Humanoid Robot Description in `my-hr-book/docs/part-ii/chapter-5.md`.

---

## Phase 4: Part III — MODULE 2: THE DIGITAL TWIN (GAZEBO & UNITY)

**Goal**: Write the chapters on simulation.
**Independent Test**: Part III can be read and the examples can be run independently.

- [ ] T010 [P] [Part III] Write Chapter 6: Gazebo Simulation Fundamentals in `my-hr-book/docs/part-iii/chapter-6.md`.
- [ ] T011 [P] [Part III] Write Chapter 7: Unity Robotics Integration in `my-hr-book/docs/part-iii/chapter-7.md`.
- [ ] T012 [P] [Part III] Write Chapter 8: Building the Digital Twin in `my-hr-book/docs/part-iii/chapter-8.md`.

---

## Phase 5: Part IV — MODULE 3: THE AI-ROBOT BRAIN (NVIDIA ISAAC)

**Goal**: Write the chapters on NVIDIA Isaac.
**Independent Test**: Part IV can be read and the examples can be run independently.

- [ ] T013 [P] [Part IV] Write Chapter 9: NVIDIA Isaac Sim in `my-hr-book/docs/part-iv/chapter-9.md`.
- [ ] T014 [P] [Part IV] Write Chapter 10: Isaac ROS & Perception in `my-hr-book/docs/part-iv/chapter-10.md`.
- [ ] T015 [P] [Part IV] Write Chapter 11: Navigation & Bipedal Planning in `my-hr-book/docs/part-iv/chapter-11.md`.

---

## Phase 6: Part V — MODULE 4: VISION-LANGUAGE-ACTION (VLA)

**Goal**: Write the chapters on VLA.
**Independent Test**: Part V can be read and the examples can be run independently.

- [ ] T016 [P] [Part V] Write Chapter 12: Voice-to-Action Systems in `my-hr-book/docs/part-v/chapter-12.md`.
- [ ] T017 [P] [Part V] Write Chapter 13: Cognitive Planning with LLMs in `my-hr-book/docs/part-v/chapter-13.md`.
- [ ] T018 [P] [Part V] Write Chapter 14: Embodied VLA Models in `my-hr-book/docs/part-v/chapter-14.md`.

---

## Phase 7: Part VI — RAG-POWERED BOOK CHATBOT (Major Project)

**Goal**: Develop the RAG-powered chatbot.
**Independent Test**: The chatbot can be built and run independently.

- [ ] T019 [Part VI] Set up the FastAPI backend for the chatbot in `my-hr-book/src/projects/part-vi-rag-chatbot/backend/`.
- [ ] T020 [Part VI] Implement the chat API endpoint based on `contracts/openapi.yaml`.
- [ ] T021 [Part VI] Implement the vector store integration with Qdrant.
- [ ] T022 [Part VI] Implement the metadata store integration with Neon Postgres.
- [ ] T023 [Part VI] Implement the RAG pipeline for retrieving and generating answers.
- [ ] T024 [Part VI] Develop the Docusaurus frontend widget for the chatbot in `my-hr-book/src/theme/Chatbot/`.
- [ ] T025 [P] [Part VI] Write Chapter 15: Building the RAG Chatbot Backend in `my-hr-book/docs/part-vi/chapter-15.md`.
- [ ] T026 [P] [Part VI] Write Chapter 16: Docusaurus Chatbot Integration in `my-hr-book/docs/part-vi/chapter-16.md`.

---

## Phase 8: Part VII — HUMANOID ROBOT ENGINEERING

**Goal**: Write the chapters on humanoid robot engineering.
**Independent Test**: Part VII can be read and understood independently.

- [ ] T027 [P] [Part VII] Write Chapter 17: Humanoid Kinematics & Dynamics in `my-hr-book/docs/part-vii/chapter-17.md`.
- [ ] T028 [P] [Part VII] Write Chapter 18: Manipulation & Dexterous Hands in `my-hr-book/docs/part-vii/chapter-18.md`.
- [ ] T029 [P] [Part VII] Write Chapter 19: Natural Human–Robot Interaction in `my-hr-book/docs/part-vii/chapter-19.md`.

---

## Phase 9: Part VIII — CAPSTONE PROJECT (THE AUTONOMOUS HUMANOID)

**Goal**: Develop the capstone project.
**Independent Test**: The capstone project can be built and run independently.

- [ ] T030 [Part VIII] Set up the project structure for the capstone project in `my-hr-book/src/projects/part-viii-capstone/`.
- [ ] T031 [Part VIII] Implement the full VLA + ROS 2 + Isaac + Gazebo pipeline.
- [ ] T032 [Part VIII] Implement the sim-to-real deployment on the Jetson Orin.
- [ ] T033 [P] [Part VIII] Write Chapter 20: The Final System in `my-hr-book/docs/part-viii/chapter-20.md`.
- [ ] T034 [P] [Part VIII] Write Chapter 21: Sim-to-Real Deployment in `my-hr-book/docs/part-viii/chapter-21.md`.

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Finalize the book and write the appendices.

- [ ] T035 [P] [Polish] Write Appendix A: Hardware Requirements in `my-hr-book/docs/appendices/a-hardware.md`.
- [ ] T036 [P] [Polish] Write Appendix B: Cloud vs. On-premise robotics lab in `my-hr-book/docs/appendices/b-cloud-vs-on-premise.md`.
- [ ] T037 [P] [Polish] Write Appendix C: Jetson Edge Kit Setup in `my-hr-book/docs/appendices/c-jetson-setup.md`.
- [ ] T038 [P] [Polish] Write Appendix D: Docusaurus + GitHub Pages deployment in `my--hr-book/docs/appendices/d-docusaurus-deployment.md`.
- [ ] T039 [P] [Polish] Write Appendix E: ROS 2 cheat sheets in `my-hr-book/docs/appendices/e-ros2-cheatsheets.md`.
- [ ] T040 [P] [Polish] Write Appendix F: Safety protocols for humanoids in `my-hr-book/docs/appendices/f-safety.md`.
- [ ] T041 [Polish] Perform a full review of the book for consistency, clarity, and accuracy.
- [ ] T042 [Polish] Validate all code examples and projects.
- [ ] T043 [Polish] Generate the final PDF and web versions of the book.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** must be completed first.
- **Phases 2-6 and 8** (Parts I-V and VII) can be worked on in parallel, as they are mostly independent text chapters.
- **Phase 7 (RAG Chatbot)** depends on Phase 1.
- **Phase 9 (Capstone Project)** depends on the completion of all other technical chapters (Parts II, III, IV, V, VII).
- **Phase 10 (Polish)** should be done last.
