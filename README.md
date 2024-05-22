## CRUD Tasks API Documentation

### Overview
The CRUD Tasks API is a web application designed for managing tasks with user authentication. The API supports user signup, login, and logout functionalities, along with CRUD operations for tasks. Each task is associated with a user, ensuring data isolation and security. The application leverages JWT for session management and MongoDB as the database.

### Prerequisites
- Node.js (v14.x or later)
- MongoDB (local or Atlas)

### Installation and Running the App

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configuration**
   Create a `.env` file in the root directory and add the following configurations:
   ```sh
   DBURL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-db-name?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=3600000  # Set to session duration in milliseconds (1 hour here)
   ```

4. **Run the server**
   ```sh
   npm start
   ```
   The server will start and listen on port 3000.

### Design Decisions

1. **JWT for Authentication**: JWT (JSON Web Tokens) is used for user authentication and session management as required. JWTs are signed with a secret key and have an expiration time set to match the session duration.

2. **MongoDB with Mongoose**: MongoDB is used as the database, as required, for its scalability and flexibility in handling JSON-like documents. Mongoose provides a schema-based solution to model application data, ensuring data consistency and easy querying.

3. **MVC Architecture**: The application follows the MVC (Model-View-Controller) architecture to separate concerns. Models handle data and business logic, Controllers process incoming requests and return responses, and Routes define the endpoints.

4. **Error Handling**: Error handling is centralized to provide clear and consistent error messages to the client.

5. **Middleware for Authentication**: Middleware is used to protect routes and ensure that only authenticated users can access certain endpoints.

### Endpoints

#### Auth Routes

- **Signup**
  - `POST /signup`
  - Request body: `{ email: String, password: String }`
  - Response: `{ user: userId }` and sets a JWT cookie

- **Login**
  - `POST /login`
  - Request body: `{ email: String, password: String }`
  - Response: `{ user: userId }` and sets a JWT cookie

- **Logout**
  - `POST /logout`
  - Clears the JWT cookie

#### Task Routes (Protected)

- **Create Task**
  - `POST /tasks/create`
  - Request body: `{ title: String, description: String, completed: Boolean }`
  - Response: `{ message: "Task created successfully" }`

- **Get All Tasks**
  - `GET /tasks`
  - Query parameters: `page` (default=1), `limit` (default=10)
  - Response: `{ tasks: [...], totalPages: Number, currentPage: Number }`

- **Get Task by ID**
  - `GET /tasks/:id`
  - Response: `{ title: String, description: String, completed: Boolean, user: userId }`

- **Update Task**
  - `PUT /tasks/update/:id`
  - Request body: `{ title: String, description: String, completed: Boolean }`
  - Response: updated task object

- **Delete Task**
  - `DELETE /tasks/delete/:id`
  - Response: `{ message: "Task successfully deleted" }`

### Example .env File
```
DBURL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-db-name?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600000  # 1 hour in milliseconds
```

### Running Tests
Tests are not included in this initial setup because of the time frame. However, adding test coverage using frameworks such as Mocha or Jest is recommended to ensure the reliability and correctness of the application.

### Future Improvements
- **Role-based access control**: Differentiate between user roles and permissions.
- **Refresh tokens**: Implement refresh tokens to enhance security and improve the user experience.
- **Advanced logging**: Integrate advanced logging for better monitoring and debugging.

These features would be added to the future versions of the application before deployment. For detailed instructions on how to run the application, please see the "Testing Guide" documentation.

By following this documentation, you can set up, run, and understand the CRUD Tasks API. The design decisions focus on security, scalability, and maintainability to provide a robust foundation for further development.