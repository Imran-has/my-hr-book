# Quickstart Guide: Development Environment Setup

This guide provides instructions for setting up the development environment for the projects in the "Physical AI & Humanoid Robotics" book.

## 1. Core Requirements

- **Operating System**: Ubuntu 22.04 (Jammy Jellyfish). While some components may work on other systems, this is the officially supported OS for the book.
- **Code Editor**: Visual Studio Code is recommended, with the following extensions:
  - `ms-python.python`
  - `ms-vscode.cpptools`
  - `redhat.vscode-yaml`
  - `dotjoshjohnson.xml`

## 2. Robotics Development Environment

### ROS 2 Humble

Follow the official ROS 2 Humble installation instructions:
[https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html)

### Gazebo

Install Gazebo Garden (the version that is compatible with ROS 2 Humble):
```bash
sudo apt-get install ros-humble-gazebo-ros-pkgs
```

### NVIDIA Isaac Sim

1.  **Install NVIDIA Omniverse Launcher**: [https://www.nvidia.com/en-us/omniverse/download/](https://www.nvidia.com/en-us/omniverse/download/)
2.  **Install Isaac Sim**: From the Omniverse Launcher, install Isaac Sim version 4.0 or later.
3.  **Install Isaac Sim ROS 2 Bridge**: Follow the instructions in the Isaac Sim documentation to enable the ROS 2 bridge.

## 3. Chatbot Development Environment

### Python 3.11

Install Python 3.11:
```bash
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update
sudo apt-get install python3.11 python3.11-venv
```

### Poetry

Install Poetry for managing Python dependencies:
```bash
curl -sSL https://install.python-poetry.org | python3 -
```

### Project Dependencies

The dependencies for the chatbot project (FastAPI, Qdrant client, etc.) are listed in the `pyproject.toml` file in the `src/projects/part-vi-rag-chatbot` directory. Install them using Poetry:
```bash
cd src/projects/part-vi-rag-chatbot
poetry install
```

## 4. Hardware

### Jetson Orin Nano

Follow the official NVIDIA instructions for setting up the Jetson Orin Nano Developer Kit:
[https://developer.nvidia.com/embedded/learn/get-started-jetson-orin-nano-devkit](https://developer.nvidia.com/embedded/learn/get-started-jetson-orin-nano-devkit)

### RealSense Camera

Connect the RealSense camera to the Jetson Orin. The necessary drivers and ROS 2 packages will be installed as part of the capstone project in Part VIII.
