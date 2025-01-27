# E-commerce-follow-alone


Milestone 1 

This project is a mentor-led session to build a full-fledged e-commerce application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It aims to provide hands-on experience in building real-world web applications with scalable and secure features.

The **MERN stack** is a popular technology stack used for building full-stack web applications. It is favored for its **JavaScript-only approach**, which allows developers to use a single programming language (JavaScript) across the entire application, both on the frontend and backend. This approach simplifies development and is particularly beginner-friendly

The MERN stack includes:
- **MongoDB** 
- **Express.js**
- **React.js**
- **Node.js**

A **REST API** (Representational State Transfer) is an architectural style for building web services that enables communication between a client and a server using standard HTTP methods like GET, POST, PUT, and DELETE. 

1. **User Authentication**
   - Register new users.
   - Log in existing users securely.
   
2. **Product Management**
   - Add new products.
   - Update product details.
   - Retrieve product data.

3. **Order Handling**
   - Manage customer orders.
   - Provide structured data responses (typically in JSON format).


## Basics of Database Schema Design

In **MongoDB**, schema design is the process of defining the structure and relationships of data stored in the database. This involves:
- Identifying key entities (e.g., Users, Products, Orders).
- Defining fields and their data types.
- Establishing relationships between collections (e.g., linking orders to users).

Good schema design ensures the database is:
- Efficient in handling queries.
- Scalable as the application grows.


## Role of Authentication in Web Applications

Authentication is the process of verifying the identity of a user before granting access to specific resources or functionalities. In our e-commerce application:
- Users will authenticate themselves through secure login mechanisms.
- Only authenticated users can make purchases or access sensitive information like order history.

Key goals of authentication:
- Protect user data.
- Prevent unauthorized access.
- Enable a personalized user experience.



**Milestone 2: Project Setup and Login Page**


In this milestone, we focused on setting up the initial front-end structure and implementing the login page for the application. Key achievements include:

Front-End Framework:
Set up the React framework with Vite for a fast and modern development experience.
Folder Structure:
Organized the src folder to include separate directories for components, pages, and assets to improve scalability and maintainability.
Login Page Implementation:
Developed a basic login page (Login.jsx) that includes a user interface for email and password input.
Incorporated validation logic to ensure proper user input.
Routing:
Implemented React Router for navigation and created routes for the login and signup pages.
Styling:
Added basic styling using CSS (App.css) to ensure a clean and user-friendly design.
Git Integration:
Added the new files to version control and committed progress to the GitHub repository.
This milestone lays the groundwork for creating the front-end interface and interaction logic for the application.

## Milestone 3: Project Setup for Backend

### Objectives
In this milestone, we focused on setting up the backend structure, initializing a Node.js server, connecting the application to MongoDB, and implementing basic error handling.

### Achievements

#### 1. Backend Folder Structure
We created a structured hierarchy for organizing backend code effectively:
- **routes/**: Contains route files to define API endpoints.
- **controllers/**: Handles the business logic for API requests.
- **models/**: Contains MongoDB schemas and models.
- **middleware/**: Includes middleware functions for tasks like authentication or logging.
- **utils/**: Stores utility functions for reusable logic (to be expanded later).
- **config/**: Contains configuration files like database connection settings.
- **app.js**: Main application file for configuring the server.
- **server.js**: Entry point for starting the Node.js server.

#### 2. Server Setup
- Initialized a Node.js server using Express.
- Configured the server to listen on a designated port (e.g., `http://localhost:5000`).

#### 3. Database Connection
- Connected the server to MongoDB using the Mongoose library.
- Verified the connection between the server and MongoDB.

#### 4. Basic Error Handling
- Implemented middleware to handle errors and provide clear error messages for better debugging.
- Ensured the server does not crash on unexpected errors.
