# Chapter 16: Docusaurus Chatbot Integration

With a powerful RAG backend in place, the next step is to build a user interface for it and integrate it seamlessly into our Docusaurus site. This chapter covers how to create a floating chatbot component using React and integrate it into every page of the site.

### The Chatbot as a React Component

The chatbot is built as a self-contained React component (`Chatbot.tsx`). This component is responsible for:

-   **State Management:** It uses React hooks (`useState`, `useEffect`, `useRef`) to manage all its internal state, including:
    -   `isOpen`: A boolean to control whether the chat window is visible.
    -   `messages`: An array of chat message objects, each with a `text` and `isBot` flag.
    -   `input`: The current text in the user's input field.
    -   `isLoading`: A boolean to show a loading indicator while waiting for the backend.
-   **UI Rendering:** It renders the floating button, the chat window, the list of messages, and the input form.
-   **API Communication:** It contains the `handleSend` function, which uses the browser's `fetch` API to make a `POST` request to our FastAPI backend's `/chat` endpoint. It also includes logic to handle successful responses and errors (like the `429 Too Many Requests` error for API quotas).

### Creating a Floating UI

To make the chatbot accessible everywhere without being intrusive, we use a floating popup design. This is achieved with CSS:

-   **Floating Button:** A button is styled with `position: fixed` to place it in the bottom-right corner of the viewport. It has a high `z-index` to ensure it appears above other page content. Clicking this button toggles the `isOpen` state.
-   **Chat Window:** The main chat container is also styled with `position: fixed` and a high `z-index`. Its visibility is toggled by adding or removing a `.hidden` class based on the `isOpen` state. This provides a clean user experience.

### Global Site Integration via Swizzling

To make the chatbot appear on every page, including the homepage, we need to place it in a component that wraps the entire site. Docusaurus provides a powerful mechanism for this called **swizzling**.

1.  **Swizzle the `Layout` Component:** We run the command `npm run swizzle @docusaurus/theme-classic Layout -- --danger`. This ejects the default `Layout` component from the theme into our project's `src/theme` directory, allowing us to modify it.

2.  **Import and Render the Chatbot:** Inside the newly created `src/theme/Layout/index.tsx` file, we add two lines:
    -   An `import` statement at the top to import our `Chatbot` component.
    -   We render the `<Chatbot />` component just before the closing tag of the main `LayoutProvider`.

By placing the component here, we ensure that it is part of the base layout for every single page on the Docusaurus site, making our AI assistant universally accessible. This approach is powerful because it keeps our chatbot logic separate from our page content and integrates it cleanly into the site's lifecycle.