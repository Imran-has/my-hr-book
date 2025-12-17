# Chapter 4: Building ROS 2 Packages (Python)

In ROS 2, code is organized into **packages**. A package is a directory containing your source code, launch files, configuration files, and a `package.xml` file. The `package.xml` file contains metadata about the package, such as its name, version, author, and dependencies.

This chapter will walk you through the process of creating and building a simple ROS 2 package using Python.

### The ROS 2 Workspace

A **workspace** is a directory that contains one or more ROS 2 packages. The typical structure of a workspace is:

```
ros2_ws/
├── src/      <-- Source space: where your package source code goes
├── build/    <-- Build space: where intermediate build files are generated
├── install/  <-- Install space: where the final package files are installed
└── log/      <-- Log space: where log files from building are stored
```

### Creating a Python Package

ROS 2 uses `colcon` as its build tool and `ament` as its underlying build system. To create a new Python package, you can use the `ros2 pkg create` command.

1.  **Navigate to your source space:**
    ```bash
    cd ~/ros2_ws/src
    ```

2.  **Run the create command:**
    ```bash
    ros2 pkg create --build-type ament_python my_first_package --dependencies rclpy
    ```
    This command creates a new directory named `my_first_package` with the following key files:
    - `package.xml`: Contains package metadata and dependencies.
    - `setup.py`: The Python setup script used by `colcon` to build and install your package.
    - `setup.cfg`: Configuration for the setup script.
    - `resource/`: A folder to hold the package name.
    - `my_first_package/`: The Python package itself, where your `.py` files will go.

### Building the Workspace

Once you have created your package and added your source code, you can build the entire workspace using `colcon`.

1.  **Navigate to the root of your workspace:**
    ```bash
    cd ~/ros2_ws
    ```

2.  **Run the build command:**
    ```bash
    colcon build
    ```
    `colcon` will automatically find all the packages in the `src` directory, resolve their dependencies, and build them.

### Sourcing the Workspace

After a successful build, the output is placed in the `install` directory. To make your new package and its executables available in your terminal session, you need to **source** the workspace's setup file.

```bash
source ~/ros2_ws/install/setup.bash
```

Once sourced, you can run your nodes using `ros2 run`:

```bash
ros2 run my_first_package my_node_name
```

This chapter will provide hands-on examples of creating a simple publisher and subscriber node within this package structure.