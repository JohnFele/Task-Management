### Task Manager API - Setup and Testing Guide

This guide provides detailed instructions on how to set up and test the Task Manager API using Postman for API testing. Follow these steps to run the app locally and perform various API operations.

---

### 1. Prerequisites

Before getting started, ensure you have the following installed on your system:

- Node.js (version 12.x or higher)
- MongoDB (Community Edition)
- Postman (for API testing)

### 2. Installation

1. Clone the Task Manager API repository from GitHub:

   ```
   git clone https://github.com/JohnFele/Task-Management.git
   ```

2. Navigate to the project directory:

   ```
   cd Task-management
   ```

3. Install dependencies using npm:

   ```
   npm install
   ```

### 3. Configuration

Place the provided `.env` file in the project root directory.


### 4. Running the App

Run the Task Manager API application:

   ```
   npm start
   ```

   The API will be running at `http://localhost:3000`.

### 5. Testing with Postman

1. Open Postman and create a new request collection for Task Manager API.

2. Create a new environment in Postman and add the following variables:

   - `base_url`: `http://localhost:3000`

3. Create and execute requests for different API endpoints:

   - **Authentication Endpoints**:
     - Signup: `POST {{base_url}}/signup`
     - Login: `POST {{base_url}}/login`
     - Logout: `GET {{base_url}}/logout`

   - **Task Endpoints**:
     - Create Task: `POST {{base_url}}/tasks`
     - Get All Tasks: `GET {{base_url}}/tasks`
     - Get Task by ID: `GET {{base_url}}/tasks/:id`
     - Update Task: `PUT {{base_url}}/tasks/:id`
     - Delete Task: `DELETE {{base_url}}/tasks/:id`

   Ensure to include necessary request headers and body parameters as per API documentation.

### 6. Testing Scenarios

- **User Authentication**:
  - Create a new user account using the signup endpoint.
  - Log in with the newly created user credentials and obtain a JWT token.
  - Use the token for subsequent authenticated requests.

- **Task Management**:
  - Create tasks using the create task endpoint.
  - Retrieve tasks using the get all tasks endpoint.
  - Update and delete tasks using their respective endpoints.

### 7. Handling Responses

- Check the response status codes and body content for each request.
- Verify that error responses include meaningful error messages for debugging.

### 8. Cleanup

After testing, remember to log out or clear the JWT token from Postman cookies.

---

You have successfully set up the Task Manager API and tested its functionality using Postman. Explore different endpoints and scenarios to ensure all features work as expected. If you encounter any issues, refer to the API documentation or the error messages for troubleshooting.