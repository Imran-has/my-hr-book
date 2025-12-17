# Chapter 12: Voice-to-Action Systems

The ultimate goal of a general-purpose robot is to be a helpful assistant that can be commanded as easily as a person. Natural language, particularly spoken language, is the most intuitive interface for humans. A **Voice-to-Action** system is the bridge that connects a user's spoken command to a robot's physical action.

This is a complex, multi-stage process that involves converting sound into text, understanding the intent behind that text, and translating that intent into a sequence of executable robot behaviors.

### The Voice-to-Action Pipeline

A typical voice-to-action system can be broken down into three main stages:

1.  **Automatic Speech Recognition (ASR):**
    -   **Task:** Convert raw audio from a microphone into a text transcript.
    -   **How it works:** Modern ASR systems use deep neural networks (like Whisper from OpenAI) trained on vast amounts of audio data. The system listens for a wake-word (e.g., "Hey, Robot") and then begins transcribing the subsequent speech.
    -   **Output:** A string of text, such as `"bring me the red ball from the table"`.

2.  **Natural Language Understanding (NLU):**
    -   **Task:** Extract the user's intent and the key parameters from the transcribed text. This is about understanding *meaning*.
    -   **How it works:** This stage often employs a Large Language Model (LLM). The LLM is given the text transcript and a prompt that asks it to identify the core action and the relevant entities.
    -   **Output:** A structured representation of the command, often in JSON format. For the example above, the output might be:
        ```json
        {
          "action": "fetch",
          "object": {
            "name": "ball",
            "attributes": ["red"]
          },
          "source_location": "table"
        }
        ```

3.  **Task Planning and Execution:**
    -   **Task:** Convert the structured command into a sequence of robot actions and execute them.
    -   **How it works:** This stage involves a task planner that maps the abstract action (`"fetch"`) to a concrete sequence of behaviors, such as `NavigateTo(table)`, `DetectObject(ball, red)`, `Grasp(object)`, `NavigateTo(user)`.
    -   **Output:** A series of commands sent to the robot's controllers (navigation, manipulation, etc.) and, ultimately, a physical action performed by the robot.

### Challenges and Considerations

- **Ambiguity:** Natural language is often ambiguous. Does "the table" mean the one in the kitchen or the living room? The NLU and task planning stages must have strategies for resolving ambiguity, such as asking clarifying questions ("Which table do you mean?").
- **Grounding:** The system must "ground" language in the real world. It needs to connect the word "ball" to the actual pixels in a camera feed that represent the ball. This is a core challenge in robotics known as the **symbol grounding problem**.

This chapter will guide you through building a simple voice-to-action system using off-the-shelf ASR services and an LLM for NLU, and integrating it with the ROS 2 action servers that control your robot.