### Task Manager API Documentation

Welcome to the Task Manager API documentation! This API allows you to manage tasks and user authentication.

---

### Base URL

The base URL for all API endpoints is `http://localhost:3000`.

---

### Authentication Endpoints

#### Signup
- **URL**: `/signup`
- **Method**: `POST`
- **Description**: Creates a new user account.
- **Request Body**:
  ```json
  {
    "email": "example@example.com",
    "password": "password"
  }
  ```
- **Response**:
  - Status: `201 Created`
  - Body: `{ "message": "User <email> created" }`

#### Login
- **URL**: `/login`
- **Method**: `POST`
- **Description**: Logs in an existing user.
- **Request Body**:
  ```json
  {
    "email": "example@example.com",
    "password": "password"
  }
  ```
- **Response**:
  - Status: `200 OK`
  - Body: `{ "message": "User <email> logged in" }`
- **Cookies**: JWT token set for authentication.

#### Logout
- **URL**: `/logout`
- **Method**: `GET`
- **Description**: Logs out the current user.
- **Response**:
  - Status: `200 OK`
  - Body: `{ "message": "Logged out" }`
- **Cookies**: JWT token cleared.

---

### Task Endpoints

#### Create Task
- **URL**: `/tasks`
- **Method**: `POST`
- **Description**: Creates a new task.
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```
- **Response**:
  - Status: `201 Created`
  - Body: `{ "message": "Task created successfully", "task": { ... } }`

#### Get All Tasks
- **URL**: `/tasks`
- **Method**: `GET`
- **Description**: Retrieves all tasks.
- **Authentication**: Required
- **Query Parameters**:
  - `page` (optional): Page number for pagination (default: 1)
  - `limit` (optional): Number of tasks per page (default: 10)
  - `sortBy` (optional): Field to sort by (default: createdAt)
  - `sortOrder` (optional): Sort order (asc or desc, default: desc)
  - `filterBy` (optional): Additional filter criteria (default: {})
- **Response**:
  - Status: `200 OK`
  - Body: `{ "tasks": [ ... ], "totalTasks": <total>, "totalPages": <pages>, "currentPage": <page>, "sortBy": <field>, "sortOrder": <asc/desc>, "filterBy": { ... } }`

#### Get Task by ID
- **URL**: `/tasks/:id`
- **Method**: `GET`
- **Description**: Retrieves a task by ID.
- **Authentication**: Required
- **Response**:
  - Status: `200 OK`
  - Body: `{ ... }` (Task object)

#### Update Task
- **URL**: `/tasks/:id`
- **Method**: `PUT`
- **Description**: Updates a task by ID.
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Task Description"
  }
  ```
- **Response**:
  - Status: `200 OK`
  - Body: `{ ... }` (Updated task object)

#### Delete Task
- **URL**: `/tasks/:id`
- **Method**: `DELETE`
- **Description**: Deletes a task by ID.
- **Authentication**: Required
- **Response**:
  - Status: `200 OK`
  - Body: `{ "message": "Task successfully deleted" }`

---

### Error Handling

In case of errors, the API will respond with an appropriate HTTP status code and a JSON body containing an error message.

---

Thank you for using the Task Manager API! If you have any questions or need further assistance, please refer to the documentation or contact John Fele; fele476@gmail.com.