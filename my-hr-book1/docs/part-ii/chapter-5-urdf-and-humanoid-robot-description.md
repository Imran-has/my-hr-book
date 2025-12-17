# Chapter 5: URDF & Humanoid Robot Description

To work with a robot in a simulator or use tools like RViz for visualization, ROS needs a detailed model of the robot's physical structure. The **Unified Robot Description Format (URDF)** is an XML format used in ROS to describe all the physical elements of a robot.

A URDF file describes the robot as a tree of **links** connected by **joints**.

### Core URDF Components

- **`<link>`:** A link represents a rigid part of the robot, such as a limb segment or a sensor housing. Each link has physical properties like mass and inertia, as well as visual and collision properties.
    - **`<visual>`:** Defines how the link looks. This can be a simple geometric shape (like a box, cylinder, or sphere) or a reference to a 3D mesh file (e.g., `.stl` or `.dae`).
    - **`<collision>`:** Defines the geometry of the link for the purposes of collision detection in a physics simulator. This is often a simpler version of the visual geometry to improve performance.
    - **`<inertial>`:** Defines the dynamic properties of the link, including its mass and inertia tensor.

- **`<joint>`:** A joint connects two links together and defines how one link can move relative to the other.
    - **`type`:** The most common joint types are:
        - `revolute`: A rotational joint with defined limits (e.g., an elbow).
        - `continuous`: A rotational joint that can spin freely (e.g., a wheel).
        - `prismatic`: A sliding joint with defined limits (e.g., a piston).
        - `fixed`: A rigid connection between two links that does not allow any movement.
    - **`<parent>` and `<child>`:** These tags define the two links that the joint connects.
    - **`<origin>`:** Specifies the pose (position and orientation) of the joint relative to the parent link's origin.
    - **`<axis>`:** Defines the axis of rotation or translation for `revolute` and `prismatic` joints.

### Example: A Simple Two-Link Arm

```xml
<robot name="simple_arm">
  <!-- Base Link -->
  <link name="base_link">
    <visual>
      <geometry><box size="0.1 0.1 0.1" /></geometry>
    </visual>
  </link>

  <!-- Arm Link -->
  <link name="arm_link">
    <visual>
      <geometry><box size="0.5 0.05 0.05" /></geometry>
    </visual>
  </link>

  <!-- Joint connecting base to arm -->
  <joint name="base_to_arm_joint" type="revolute">
    <parent link="base_link"/>
    <child link="arm_link"/>
    <origin xyz="0 0 0.05" />
    <axis xyz="0 1 0" />
    <limit lower="-3.14" upper="3.14" effort="10" velocity="1.0"/>
  </joint>
</robot>
```

### From URDF to Xacro

For complex robots like humanoids, writing a single, monolithic URDF file is cumbersome and difficult to maintain. **Xacro (XML Macros)** is a macro language that allows you to create more modular and reusable URDF files. With Xacro, you can:

- Define constants and properties.
- Create macros for repeating structures (like an arm or a leg).
- Include other Xacro or URDF files.

This chapter will guide you through creating a URDF for a simple robot and then converting it to a more powerful Xacro representation, laying the foundation for describing a full humanoid robot.