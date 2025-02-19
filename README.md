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

---



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

---

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

---

### Milestone 4: Creating User Model and Controller

- Designed the User model with fields such as name, email, password, and role.
- Implemented user authentication and authorization mechanisms.
- Used bcrypt for password hashing and JWT for authentication.
- Integrated Multer for handling file uploads (e.g., profile images).
- Updated API routes for user management.
- Improved error handling and validation for user-related operations.


---

### Milestone 5: Creating the Signup Page

- Developed a user-friendly signup page using React.
- Integrated form validation to ensure valid user input.
- Connected the frontend with the backend API for user registration.
- Displayed appropriate error and success messages.
- Styled the page using modern UI components for a seamless user experience.



---

## Milestone 6: What Was Achieved

In this milestone, we completed the following:

- Implemented advanced product filtering and search functionality.
- Optimized backend API endpoints for better performance.
- Integrated payment processing using Stripe.
- Enhanced user authentication with JWT expiration handling.
- Improved UI/UX by refining product pages and checkout flows.
- Fixed bugs from previous milestones and improved error handling.
milestone7

----

# Milestone 7: User Login

This milestone focused on implementing a secure user login endpoint. Key achievements include:

* **Secure Password Handling:** Implemented bcrypt hashing for passwords, ensuring they are never stored in plain text.  This protects user credentials even in the event of a database breach.
* **Credential Validation:**  Developed a login endpoint that validates user credentials by comparing the bcrypt hash of the entered password with the stored hash.
* **User Authentication:** Successfully implemented user authentication based on validated credentials.  This allows the system to identify and authorize users.
* **Improved Security:**  Enhanced overall application security by implementing secure password handling practices.
=======
=======

---

# Milestone 8: Product Card Component

## Overview

In this milestone, I have implemented a reusable card component to showcase products dynamically on the homepage. The card component is designed to display product details such as name, image, and price in a structured layout.

## Features

*   **Reusable Card Component:** A dynamic component that accepts product details as props.
*   **Dynamic Rendering:** Uses array mapping to render multiple product cards.
*   **Responsive Layout:** Designed using Flexbox/Grid for a clean and structured display.
*   **Improved User Experience:** Ensures a consistent and visually appealing product showcase.



# Milestone 9: Creating the Product Form
In this milestone, we focused on building a form that allows users to add products, including support for multiple product images. Key achievements include:

* Product Form Implementation: Designed and developed a form to capture essential product details, such as: Product Name Description Price Category Multiple Product Images (file upload support)
* Image Upload Handling: Implemented functionality to allow multiple product images to be uploaded. Ensured proper validation for image formats and file sizes.
* Data Management: Configured state management to handle form inputs efficiently. Validated user inputs before submission to ensure accurate product data.


---

# Milestone 10: Product Schema and Endpoint

This milestone focuses on creating a Mongoose schema for products and building a POST endpoint to store product details in MongoDB.


## Implementation

*   **Product Schema:** The `product.js` file (or similar) defines the structure of product data (name, description, price, image URL, etc.) using Mongoose, with appropriate validation rules.
*   **Endpoint:** A POST endpoint (`/products` or similar) handles incoming product data, validates it, and saves it to the MongoDB database.

 mile11
---

# Milestone 11: Dynamic Product Display on Home Page

## Overview

This milestone focuses on making the home page display products dynamically by fetching data from the MongoDB database.  We will create a backend endpoint to retrieve product data and then use that data on the frontend to populate product cards.

## Implementation Details

*   The backend endpoint should use the appropriate MongoDB driver methods to retrieve all product documents.
*   The frontend `fetchProducts` function should use `fetch` or a similar library to make the API call.
*   The product card component should be designed to receive product data as props and display it accordingly.



----

# Milestone 12: My Products Page

## Overview

This milestone focuses on creating the "My Products" page, which displays all the products added by a specific user (identified by their email).  We will implement a backend endpoint to retrieve these products from MongoDB, filter them by email, and send them to the frontend.  The frontend will then dynamically display these products using the existing product card component.

## Learning Goals

*   Write an endpoint that filters data in MongoDB based on a user's email and sends the results to the frontend.
*   Receive data on the frontend.
*   Dynamically display the received data using the product card component.





# Milestone 13: Product Editing Functionality


## Overview

This project is a step-by-step implementation of an e-commerce platform.  Each milestone focuses on adding specific features and building upon the previous ones.  The current focus is on managing product data, including adding, displaying, and editing products.  The project utilizes a MongoDB database to store product information and a frontend interface to interact with the data through API endpoints.

*   Implemented the ability to edit existing product data.
*   Added an "Edit" button to product cards on the frontend.
*   Developed a backend endpoint to handle updating product details in the MongoDB database.
*   Implemented form auto-filling with existing product data for editing.
*   Users can now modify product information and save the changes.  This involved:
    *   Creating an API endpoint to receive updated product data.
    *   Implementing the update operation in MongoDB.
    *   Adding an edit button to the product card.
    *   Populating the edit form with existing product data.
    *   Enabling users to edit and save the updated data.



 # Milestone 14: Deleting Product Data from MongoDB
In this milestone, we focused on implementing delete functionality for product data, allowing users to remove existing product records from the database. Key achievements include:

Backend: Creating a Delete Endpoint Developed a DELETE endpoint to remove product data from MongoDB using the product ID. Used Mongoose to find and delete the product by its ID. Implemented error handling to manage scenarios where the product ID does not exist.

Frontend: Delete Button and Request Handling Added a Delete button to each product card. Clicking the Delete button sends a request to the delete endpoint with the product ID. Implemented a confirmation dialog to ensure users intend to delete the product. Updated the product list dynamically to remove the deleted product without refreshing the page.

UI and UX Enhancements Provided feedback on successful or failed delete operations. Enhanced the user experience with a clean and responsive UI for managing product deletions.



