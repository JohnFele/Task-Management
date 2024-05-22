### Task Manager API Design Documentation

This documentation outlines the design decisions made for the Task Manager API, including architectural choices, security measures, and implementation details.

---

### 1. Architecture

The Task Manager API follows a RESTful architecture, adhering to standard HTTP methods for CRUD (Create, Read, Update, Delete) operations on tasks. The API is designed to be stateless, with each request containing all necessary information for processing.

### 2. Technology Stack

- **Node.js**: Chosen for its event-driven, non-blocking I/O model, making it well-suited for handling asynchronous tasks.
- **Express.js**: Provides a minimal and flexible web application framework for building APIs with Node.js.
- **MongoDB**: Selected as the database to store task and user data due to its flexible document-based structure, which aligns well with the dynamic nature of task data.

### 3. Security

- **JWT (JSON Web Tokens)**: Used for user authentication and authorization. JWT tokens are securely generated upon user login/signup and are used to authenticate subsequent API requests. JWT tokens are signed with a secret key and have an expiration time to enhance security.
- **Bcrypt**: Employed for password hashing during user registration and login to securely store user passwords in the database.

### 4. Middleware

- **Cookie Parser**: Middleware utilized for parsing cookies included in incoming requests, essential for handling JWT tokens sent by the client.
- **Error Handling Middleware**: Implemented to catch and handle errors gracefully, providing informative error messages in the API responses.

### 5. Route Structure

- **Authentication Routes**: Responsible for user authentication-related endpoints such as signup, login, and logout.
- **Task Routes**: Handle CRUD operations for tasks, including creating, retrieving, updating, and deleting tasks. These routes are protected and require authentication using JWT tokens.

### 6. Model Structure

- **Task Model**: Defines the schema for task objects, including properties such as title, description, completion status, and user association. Timestamps are automatically managed by MongoDB for each task.
- **User Model**: Represents user objects with properties for email and password. Passwords are securely hashed before being stored in the database.

### 7. Error Handling

- **Centralized Error Handling**: Errors are handled centrally using Express middleware, ensuring consistent error responses across all API endpoints. Error messages are informative and include details about the nature of the error to aid in debugging.

### 8. Environmental Configuration

- **Environment Variables**: Configuration values such as database connection URLs, JWT secret keys, and expiration times are stored as environment variables to keep sensitive information secure and facilitate easy configuration across different environments.

---

This design documentation outlines the key architectural decisions, security measures, middleware usage, route and model structures, error handling strategies, and environmental configuration practices implemented in the Task Manager API. These decisions were made with scalability, security, and maintainability in mind to ensure the robustness and reliability of the API.