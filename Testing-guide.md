## Testing the CRUD Tasks API Using Postman

To test the CRUD Tasks API using Postman, follow these steps:

### Prerequisites

- Ensure the API server is running on `http://localhost:3000`.
- Download and install [Postman](https://www.postman.com/downloads/).

### Step-by-Step Guide

1. **Open Postman**: Launch the Postman application.

2. **Signup a New User**

   - **Endpoint**: `POST http://localhost:3000/signup`
   - **Headers**: `Content-Type: application/json`
   - **Body** (JSON):
     ```json
     {
       "email": "test@example.com",
       "password": "password123"
     }
     ```
   - **Action**: Click "Send"
   - **Expected Response**: `{ "user": "userId" }` and a `Set-Cookie` header with the JWT token.

3. **Login an Existing User**

   - **Endpoint**: `POST http://localhost:3000/login`
   - **Headers**: `Content-Type: application/json`
   - **Body** (JSON):
     ```json
     {
       "email": "test@example.com",
       "password": "password123"
     }
     ```
   - **Action**: Click "Send"
   - **Expected Response**: `{ "user": "userId" }` and a `Set-Cookie` header with the JWT token.

4. **Create a New Task**

   - **Endpoint**: `POST http://localhost:3000/tasks/`
   - **Headers**:
     - `Content-Type: application/json`
     - `Cookie`: Paste the `jwt` token from the `Set-Cookie` header of the login/signup response.
   - **Body** (JSON):
     ```json
     {
       "title": "New Task",
       "description": "This is a new task",
       "completed": false
     }
     ```
   - **Action**: Click "Send"
   - **Expected Response**: `{ "message": "Task created successfully" }`

5. **Get All Tasks**

   - **Endpoint**: `GET http://localhost:3000/tasks`
   - **Headers**:
     - `Content-Type: application/json`
     - `Cookie`: Paste the `jwt` token from the `Set-Cookie` header of the login/signup response.
   - **Query Parameters**:
     - `page`: `1` (default)
     - `limit`: `10` (default)
   - **Action**: Click "Send"
   - **Expected Response**: A JSON object containing tasks, total pages, and the current page.

6. **Get a Task by ID**

   - **Endpoint**: `GET http://localhost:3000/tasks/:id`
   - **Headers**:
     - `Content-Type: application/json`
     - `Cookie`: Paste the `jwt` token from the `Set-Cookie` header of the login/signup response.
   - **Params**: Replace `:id` with the actual task ID.
   - **Action**: Click "Send"
   - **Expected Response**: A JSON object containing the task details.

7. **Update a Task**

   - **Endpoint**: `PUT http://localhost:3000/tasks/update/:id`
   - **Headers**:
     - `Content-Type: application/json`
     - `Cookie`: Paste the `jwt` token from the `Set-Cookie` header of the login/signup response.
   - **Params**: Replace `:id` with the actual task ID.
   - **Body** (JSON):
     ```json
     {
       "title": "Updated Task",
       "description": "This is an updated task",
       "completed": true
     }
     ```
   - **Action**: Click "Send"
   - **Expected Response**: A JSON object containing the updated task details.

8. **Delete a Task**

   - **Endpoint**: `DELETE http://localhost:3000/tasks/delete/:id`
   - **Headers**:
     - `Content-Type: application/json`
     - `Cookie`: Paste the `jwt` token from the `Set-Cookie` header of the login/signup response.
   - **Params**: Replace `:id` with the actual task ID.
   - **Action**: Click "Send"
   - **Expected Response**: `{ "message": "Task successfully deleted" }`

9. **Logout a User**

   - **Endpoint**: `POST http://localhost:3000/logout`
   - **Action**: Click "Send"
   - **Expected Response**: Redirects to the homepage and clears the JWT cookie.

### Summary

- **Headers**: Always set `Content-Type` to `application/json` for POST, PUT, and DELETE requests.
- **Authentication**: Use the `jwt` token from the `Set-Cookie` header for authenticated routes.
- **Endpoints**: Test all CRUD operations for tasks, along with user authentication routes.

By following this guide, you can thoroughly test the CRUD Tasks API using Postman, ensuring all functionalities are working as expected.