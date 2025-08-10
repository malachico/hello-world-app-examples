# Hello World Client-Server Application

This directory contains a simple client-server application demonstrating a basic "Hello World" interaction.

## Components:

-   `server.js`: A Node.js HTTP server that listens on port `3000` and responds with "Hello World from Server!". It includes basic CORS headers to allow cross-origin requests from the client.
-   `client.html`: A simple HTML page with embedded JavaScript. When opened in a browser, it fetches the message from `http://localhost:3000` and displays it.

## How to Run:

1.  **Start the Server:**
    Navigate to the `hello-world-app` directory in your terminal and run:
    ```bash
    node server.js
    ```
    You should see a message indicating the server is running on `http://0.0.0.0:3000/`.

2.  **Open the Client:**
    Open the `client.html` file directly in your web browser. You can do this by navigating to the file path (e.g., `file:///path/to/hello-world-app/client.html`) or by serving it via a simple HTTP server (e.g., `python3 -m http.server` in the `hello-world-app` directory and then accessing `http://localhost:8000/client.html`).

3.  **Observe the Output:**
    The `client.html` page should display the message "Hello World from Server!". Check your browser's developer console for any errors if the message doesn't appear.

This setup provides a minimal, functional example of a client-server interaction.
