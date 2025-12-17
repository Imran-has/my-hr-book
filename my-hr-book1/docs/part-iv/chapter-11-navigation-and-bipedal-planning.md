# Chapter 11: Navigation & Bipedal Planning

Navigation is the cornerstone of autonomy. For a mobile robot, it is the fundamental ability to determine its own position and plan a path to a goal location while avoiding obstacles. For a bipedal humanoid robot, this challenge is magnified. The robot must not only decide *where* to go but also *how* to get there by carefully planning each footstep to maintain balance and navigate complex terrain.

This chapter explores the layers of the navigation stack, with a special focus on the unique challenges presented by bipedal locomotion.

### The Standard Navigation Stack (Nav2)

In the ROS ecosystem, the standard for mobile robot navigation is **Nav2**. It is a modular system composed of several key components:

1.  **Localization:** This is the "You are here" part of the map. Using a SLAM or AMCL (Adaptive Monte Carlo Localization) algorithm, the robot determines its position and orientation within a pre-existing map.
2.  **Global Planner:** Given a goal location, the global planner finds an optimal path from the robot's current position to the goal, avoiding known obstacles on the map. It typically uses algorithms like A* or Dijkstra.
3.  **Local Planner / Controller:** The local planner's job is to follow the global path while reacting to immediate, unforeseen obstacles (e.g., a person walking in front of the robot). It generates short-term velocity commands (linear and angular speed) to send to the robot's base.

### Challenges of Bipedal Locomotion

While Nav2 is excellent for wheeled robots, it is not sufficient for a humanoid. The output of Nav2 is a simple velocity command, but a humanoid needs a sequence of discrete footsteps. This requires additional layers of planning:

- **Footstep Planning:** A bipedal planner must take the desired path from the global planner and convert it into a sequence of valid footstep locations. This involves considering the robot's reachability, kinematic constraints, and the terrain (e.g., avoiding stepping on obstacles or uneven surfaces).

- **Whole-Body Trajectory Optimization:** For each footstep, the robot's entire body must move in a way that shifts its center of mass to the new support foot while maintaining balance. This is often solved using trajectory optimization, which generates smooth, dynamically stable motions for all the joints in the body.

- **Zero-Moment Point (ZMP) and Center of Pressure (CoP):** These are key concepts in bipedal stability. The ZMP is the point on the ground where the net moment from gravitational and inertial forces is zero. To remain stable, the robot must keep its ZMP within the support polygon formed by its feet. Planners and controllers for humanoids work tirelessly to manage the ZMP.

This chapter will first provide a hands-on guide to using Nav2 for a wheeled robot in simulation. Then, it will introduce the specialized planners and controllers required for bipedal locomotion, demonstrating how a footstep plan can be generated and executed on a humanoid model in Isaac Sim.