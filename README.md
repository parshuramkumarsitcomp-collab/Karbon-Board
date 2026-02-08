🗂️ Kanban Board Application

A Kanban Board web application built using React + TypeScript, where users can manage tasks by moving them across different stages like Todo, In Progress, and Done.

This project is inspired by real-world project management tools such as Trello and Jira and is created to practice frontend architecture, state management, and drag-and-drop functionality.

# Project Objective

The main goal of this project is to:

Understand component-based architecture

Implement drag and drop functionality

Manage application state efficiently

Build a realistic, interview-ready frontend project

# Features

Create new tasks

Delete existing tasks

Drag and drop tasks between columns

Persistent data using LocalStorage

Clean and responsive UI

Hover effects and smooth interactions

Mobile and desktop friendly design

# Tech Stack
Technology 
React--       	Component-based UI development
TypeScript--	Type safety and better code quality
Vite-	        Fast development server
CSS -         	Custom styling and layout
LocalStorage-	Data persistence without backend

 # Folder Structure
src/
├── components/
│   ├── KanbanBoard.tsx   // Main board logic
│   ├── Column.tsx        // Column UI & task handling
│   └── Card.tsx          // Single task card
│
├── data.ts               // Initial dummy data
├── types.ts              // TypeScript interfaces
├── App.tsx               // Root component
├── main.tsx              // Entry point
└── index.css             // Global styles

# How to Run the Project (Local Setup)
npm install
npm run dev


After running the command, open browser and visit:

http://localhost:5173

# Application Logic (Simple Explanation)

Application state is managed using React useState

Tasks are stored as objects and grouped by columns

Drag and drop updates the state dynamically

Updated state is saved in LocalStorage

On page reload, data is fetched from LocalStorage

# Challenges Faced & Learnings

Understanding drag-and-drop logic

Managing state updates efficiently

Designing reusable components

Structuring a scalable frontend project

This project helped me gain confidence in real-world React development.




# Author

Parshuram Kumar
Fullsteck Developer