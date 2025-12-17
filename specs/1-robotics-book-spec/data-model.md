# Data Model for RAG-Powered Book Chatbot

This document defines the data model for the RAG (Retrieval-Augmented Generation) chatbot, which is a major project in the "Physical AI & Humanoid Robotics" book.

## 1. Overview

The chatbot uses a vector store to find relevant sections of the book and a metadata store to hold information about the book's structure and user interactions.

## 2. Vector Store (Qdrant)

The vector store will contain embeddings of the book's content.

**Collection**: `hr-book-chunks`

**Vector Parameters**:
- **Size**: [NEEDS CLARIFICATION: Depends on the embedding model, e.g., 1536 for OpenAI's `text-embedding-ada-002`]
- **Distance Metric**: Cosine

**Payload**: Each vector will have the following payload:
- `chunk_id` (string, UUID): A unique identifier for the text chunk.
- `chapter` (integer): The chapter number from which the chunk was extracted.
- `section` (string): The section title from which the chunk was extracted.
- `text` (string): The actual text chunk.

## 3. Metadata Store (Neon Postgres)

The metadata store will hold information that doesn't belong in the vector store.

### `chapters` table

Stores information about each chapter.

| Column      | Type    | Description                               |
|-------------|---------|-------------------------------------------|
| `id`        | integer | PRIMARY KEY, The chapter number.          |
| `title`     | text    | The title of the chapter.                 |
| `part`      | integer | The part of the book the chapter is in.   |

### `chunks` table

Stores the text chunks and their relationship to chapters.

| Column      | Type    | Description                                  |
|-------------|---------|----------------------------------------------|
| `id`        | uuid    | PRIMARY KEY, A unique identifier.            |
| `chapter_id`| integer | FOREIGN KEY to `chapters.id`.                |
| `content`   | text    | The text content of the chunk.               |
| `token_count`| integer| The number of tokens in the content.         |

### `chat_sessions` table

Stores information about each chat session.

| Column      | Type      | Description                               |
|-------------|-----------|-------------------------------------------|
| `id`        | uuid      | PRIMARY KEY, A unique identifier.         |
| `created_at`| timestamp | The time the session was created.         |

### `chat_messages` table

Stores each message in a chat session.

| Column        | Type      | Description                                     |
|---------------|-----------|-------------------------------------------------|
| `id`          | uuid      | PRIMARY KEY, A unique identifier.               |
| `session_id`  | uuid      | FOREIGN KEY to `chat_sessions.id`.              |
| `role`        | text      | The role of the message author ('user' or 'bot').|
| `content`     | text      | The content of the message.                     |
| `created_at`  | timestamp | The time the message was created.               |

## 4. State Transitions

The chatbot will have the following states:
- `idle`: Waiting for user input.
- `retrieving`: Retrieving relevant chunks from the vector store.
- `generating`: Generating a response using the LLM.
- `streaming`: Streaming the response back to the user.
