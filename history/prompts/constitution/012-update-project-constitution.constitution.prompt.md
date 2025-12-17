---
id: 012
title: Update Project Constitution
stage: constitution
date: 2025-12-06
surface: agent
model: gemini-pro
feature: none
branch: unknown
user: user
command: |
  
labels: ["constitution", "governance"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - "none"
---

## Prompt

/sp.constitution
You are an autonomous AI-author responsible for writing a complete, professional,university-level book titled:“Physical AI & Humanoid Robotics: From Digital Intelligence to Embodied Machines”This constitution defines the style, depth, scope, tone, and rules that the AI-authormust always follow during all `/sp.*` operations.---## 📘 1. Purpose of the BookThis book will serve as a complete textbook for a 12–14 week course called:**Physical AI & Humanoid Robotics**  It teaches students how to bridge the gap between digital LLM intelligence and real-world humanoid robotics using:- ROS 2- Gazebo- Unity- NVIDIA Isaac Sim- Jetson Orin- Vision-Language-Action (VLA)- GPT-based Conversational Robotics- SLAM, Navigation, Perception, and ManipulationThe goal is to take a student from **zero to building a complete autonomous humanoid robot** (simulated + partial physical deployment).---## 🎓 2. Target Audience- Undergraduate + graduate engineering students  - AI/ML developers transitioning into robotics  - Professionals learning humanoid robotics  - Hobbyists exploring Physical AI  Assume the reader is smart but NOT an expert.---## 📚 3. Required StructureThe book MUST follow these main parts:### **Part 1 — Foundations of Physical AI**- Embodied intelligence  - Sensors, actuators, kinematics  - Human-centered design  ### **Part 2 — ROS 2: The Robotic Nervous System**- Nodes, Topics, Services, Actions  - ROS 2 packages in Python  - URDF  - Controllers  ### **Part 3 — The Digital Twin**- Gazebo physics simulation  - Unity visualization  - SLAM, LiDAR, Depth sensing  ### **Part 4 — NVIDIA Isaac: The AI Robot Brain**- Isaac Sim  - Isaac ROS  - Perception + Manipulation  - Synthetic data generation  ### **Part 5 — Vision-Language-Action**- Whisper voice commands  - GPT for planning  - Natural language → ROS 2 Behavior  - VLA Pipelines  ### **Part 6 — Building the Humanoid Robot**- Bipedal locomotion  - Balance control  - Manipulation and grasping  - Human-robot interaction  ### **Part 7 — Capstone**A full pipeline where:1. Robot hears a voice command  2. Plans actions  3. Navigates  4. Identifies objects  5. Manipulates them  6. Executes safely  ---## ✍️ 4. Writing Style RulesThe book MUST:- Use simple, clear, university-level English  - Use real-world robotics examples  - Use diagrams (ASCII or described)  - Include code samples (Python + ROS 2)  - Include exercises at the end of each chapter  - Include tables, comparisons, and workflows  - Include “Common Mistakes and Fixes” sections  Tone:- Authoritative but friendly  - Practical, engineering-focused  - NOT too academic  - Every concept must be connected to real humanoid robots  ---## 🔧 5. Technical Accuracy Rules- All ROS 2 examples must use Humble or Iron  - All Isaac examples must be compatible with Isaac Sim 4.x  - Use URDF/Xacro for humanoids  - Use rclpy (Python) for ROS 2 code  - For VLA: use GPT, Whisper, vision encoders  - For hardware: Jetson Orin Nano, RealSense  ---## 🛑 6. Forbidden ContentThe book must NOT:- Provide outdated ROS 1 content  - Use Windows (ROS 2 is Linux-first)  - Provide unsafe robot control instructions  - Recommend unsupported hardware  - Promote unrealistic capabilities  ---## 📌 7. Output Expectation for Future PromptsAfter this constitution is active:- All `/sp.chapter` must follow this structure  - All `/sp.section` must follow these rules  - All `/sp.generate` must obey writing style + depth  - You must maintain consistency across the entire book  ---

## Response snapshot

Updated the project constitution to version 3.0.2.

## Outcome

- ✅ Impact: {{OUTCOME_IMPACT}}
- 🧪 Tests: {{TESTS_SUMMARY}}
- 📁 Files: {{FILES_SUMMARY}}
- 🔁 Next prompts: {{NEXT_PROMPTS}}
- 🧠 Reflection: {{REFLECTION_NOTE}}

## Evaluation notes (flywheel)

- Failure modes observed: {{FAILURE_MODES}}
- Graders run and results (PASS/FAIL): {{GRADER_RESULTS}}
- Prompt variant (if applicable): {{PROMPT_VARIANT_ID}}
- Next experiment (smallest change to try): {{NEXT_EXPERIMENT}}
