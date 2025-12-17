# Chapter 3: ROS 2 Architecture

The Robot Operating System (ROS) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robotic platforms. ROS 2 is the second major version of ROS, redesigned from the ground up to address the needs of modern robotics, including multi-robot systems, real-time control, and production environments.

At its core, ROS 2 is a distributed system that enables anonymous, message-based communication between different software components, known as **nodes**.

### Key Concepts in ROS 2

Understanding the following concepts is essential to working with ROS 2:

- **Nodes:** A node is the smallest unit of computation in ROS 2. It is typically a single, self-contained program that performs a specific task, such as controlling a motor, reading a sensor, or planning a path.

- **Topics:** Nodes communicate with each other by publishing and subscribing to **topics**. A topic is a named bus over which messages are sent. For example, a camera node might publish images to an `/image_raw` topic, while a computer vision node subscribes to that same topic to receive the images for processing. This publish/subscribe model decouples nodes from one another.

- **Services:** For request/response interactions, ROS 2 provides **services**. A service consists of a pair of messages: a request and a response. One node acts as a service server, and another acts as a service client. Unlike topics, services are synchronous.

- **Actions:** For long-running tasks that provide feedback, ROS 2 uses **actions**. An action consists of a goal, feedback, and a result. A client sends a goal to an action server (e.g., "move to a target location"), and the server provides regular feedback (e.g., "current distance to target") until the goal is completed and a final result is sent.

- **DDS (Data Distribution Service):** Underneath the hood, ROS 2 uses DDS as its default middleware. DDS is an industry standard for real-time, scalable, and reliable data exchange, which brings significant improvements in performance and flexibility compared to the custom middleware of ROS 1.

This chapter will explore how these components fit together to form a robust and scalable architecture for complex robotic systems.