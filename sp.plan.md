Title: Physical AI & Humanoid Robotics  
Subtitle: From Digital Intelligence to Embodied Machines

-----------------------------------------------------
📘 PART I — FOUNDATIONS OF PHYSICAL AI
-----------------------------------------------------

Chapter 1 — Introduction to Physical AI  
- What is Physical AI?  
- Embodied Intelligence vs. Digital Intelligence  
- Why humanoid robots?  
- Physical laws, perception, and motor grounding  
- Overview of the course architecture: ROS 2, Gazebo, Unity, Isaac, VLA, RAG  

Chapter 2 — Humanoid Robotics Landscape  
- Tesla Optimus, Figure 01, Atlas, Unitree H1/G1  
- Current industry challenges  
- Embodied foundation models  
- Sim-to-Real gap  

-----------------------------------------------------
📘 PART II — MODULE 1: THE ROBOTIC NERVOUS SYSTEM (ROS 2)
-----------------------------------------------------

Chapter 3 — ROS 2 Architecture  
- Nodes, topics, services, actions  
- DDS communication  
- ROS 2 workspace setup  
- Python rclpy vs. C++ overview  

Chapter 4 — Building ROS 2 Packages (Python)  
- Colcon workspace  
- ROS 2 launch files  
- Parameter servers  
- Lifecycle nodes  
- Logging & debugging robotic controllers  

Chapter 5 — URDF & Humanoid Robot Description  
- URDF structure  
- Joints, links, inertia  
- Loading URDF into RViz2  
- Creating a humanoid model skeleton  

-----------------------------------------------------
📘 PART III — MODULE 2: THE DIGITAL TWIN (GAZEBO & UNITY)
-----------------------------------------------------

Chapter 6 — Gazebo Simulation Fundamentals  
- SDF vs. URDF  
- Physics simulation (ODE, Bullet, DART)  
- Sensors: LiDAR, Depth Camera, IMU  
- Collision, friction, dynamics tuning  

Chapter 7 — Unity Robotics Integration  
- Unity environment setup  
- Human-in-the-loop simulation  
- High-fidelity rendering for perception  
- Humanoid interaction scenes  

Chapter 8 — Building the Digital Twin  
- Synchronizing ROS 2 with Gazebo  
- Importing humanoid models  
- Testing locomotion in simulation  
- Sensor validation pipeline  

-----------------------------------------------------
📘 PART IV — MODULE 3: THE AI-ROBOT BRAIN (NVIDIA ISAAC)
-----------------------------------------------------

Chapter 9 — NVIDIA Isaac Sim  
- USD scenes  
- RTX simulation  
- Domain randomization  
- Synthetic data pipelines  

Chapter 10 — Isaac ROS & Perception  
- VSLAM (Visual SLAM)  
- Stereo + Depth processing  
- Visual Odometry  
- Isaac ROS GEMs  

Chapter 11 — Navigation & Bipedal Planning  
- Nav2 stack for humanoid movement  
- Footstep planning  
- Obstacle avoidance  
- Reinforcement learning control loops  

-----------------------------------------------------
📘 PART V — MODULE 4: VISION-LANGUAGE-ACTION (VLA)
-----------------------------------------------------

Chapter 12 — Voice-to-Action Systems  
- OpenAI Whisper for command recognition  
- Turning speech → semantic intentions  
- Safety & validation  

Chapter 13 — Cognitive Planning with LLMs  
- Natural language → ROS 2 tasks  
- Symbol grounding  
- Long-horizon robotic behavior  
- Examples: “Clean the room”, “Pick the bottle”  

Chapter 14 — Embodied VLA Models  
- Vision + Language + Robotics fusion  
- Using LLMs inside robotic control loops  
- Constraint-based planning  
- Integration with perception stack  

-----------------------------------------------------
📘 PART VI — RAG-POWERED BOOK CHATBOT (Major Project)
-----------------------------------------------------

Chapter 15 — Building the RAG Chatbot Backend  
- FastAPI  
- OpenAI Agents/ChatKit SDK  
- Embedding generation  
- Qdrant Cloud vector store  
- Neon Postgres metadata store  

Chapter 16 — Docusaurus Chatbot Integration  
- Chatbot frontend widget  
- Text selection → context injection  
- Grounded Q&A system  
- Deployment to GitHub Pages  

-----------------------------------------------------
📘 PART VII — HUMANOID ROBOT ENGINEERING
-----------------------------------------------------

Chapter 17 — Humanoid Kinematics & Dynamics  
- Forward/Inverse Kinematics  
- Bipedal balance  
- ZMP (Zero Moment Point)  
- Inertia, torque, COM management  

Chapter 18 — Manipulation & Dexterous Hands  
- Grasp types  
- End-effector planning  
- Force control  
- Visual servo control  

Chapter 19 — Natural Human–Robot Interaction  
- Speech  
- Gesture  
- Emotion-aware responses  
- Safety layers for humans  

-----------------------------------------------------
📘 PART VIII — CAPSTONE PROJECT (THE AUTONOMOUS HUMANOID)
-----------------------------------------------------

Chapter 20 — The Final System  
- Voice command → reasoning → motion  
- Navigation with obstacles  
- Object identification  
- Manipulation & placement  
- VLA + ROS 2 + Isaac + Gazebo pipeline  

Chapter 21 — Sim-to-Real Deployment  
- Jetson Orin deployment  
- RealSense & IMU calibration  
- Connecting sensors to locomotion  
- Minimizing domain gap  

-----------------------------------------------------
📘 PART IX — APPENDICES
-----------------------------------------------------

Appendix A — Hardware Requirements  
Appendix B — Cloud vs. On-premise robotics lab  
Appendix C — Jetson Edge Kit Setup  
Appendix D — Docusaurus + GitHub Pages deployment  
Appendix E — ROS 2 cheat sheets  
Appendix F — Safety protocols for humanoids  
