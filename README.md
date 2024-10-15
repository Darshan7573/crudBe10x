# CRUD Application

This is a CRUD (Create, Read, Update, Delete) application built using Next.js and MongoDB. The application allows users to manage topics with titles and descriptions.

## Features

- **Create Topics**: Add new topics to the list.
- **Read Topics**: View a list of all topics.
- **Update Topics**: Edit existing topics.
- **Delete Topics**: Remove topics from the list.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB (Mongoose)

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local installation or cloud service)
- Git
- Next js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/crudapp.git
   cd crudapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory and add your MongoDB connection string:
     ```bash
     MONGODB_URI=<your_mongodb_connection_string>
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

- **GET /api/topics**: Fetch all topics.
- **POST /api/topics**: Create a new topic.
- **GET /api/topics/:id**: Fetch a specific topic by ID.
- **PUT /api/topics/:id**: Update a specific topic by ID.
- **DELETE /api/topics/:id**: Delete a specific topic by ID.
