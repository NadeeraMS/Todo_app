Todo List Application
A simple yet powerful Todo List application built with React and Material-UI, featuring add, edit, delete, and toggle completion functionalities. The tasks are persisted across page refreshes using localStorage.

Features
Add Task: Allows users to add tasks with a title and description.
Edit Task: Users can update the title and description of an existing task.
Delete Task: Users can remove tasks from the list.
Toggle Completion: Mark tasks as completed or incomplete.
Persistent State: All tasks are saved in localStorage to ensure persistence across page refreshes.
Responsive Design: The application is mobile-friendly and features a dark theme with a gradient background.


Tech Stack
React: JavaScript library for building user interfaces.
Material-UI (MUI): React components for faster and easier web development.
localStorage: Used to persist tasks across page refreshes.
React Router: For navigation between pages.
Prerequisites
Ensure you have the following installed:

Node.js: Version >= 14
npm or yarn

Getting Started

1. Clone the Repository
git clone https://github.com/your-username/todo-app.git
cd todo-app

2. Install Dependencies

Run the following command to install the required dependencies:
npm install

or if you're using yarn:
yarn install

3. Run the Application
To start the development server, run:

npm start
or:

yarn start
The application will start at http://localhost:3000 (for Create React App) or the appropriate URL if using Vite.

4. Build for Production
To create a production build,
run:
npm run build
or:
yarn build
This will create an optimized build in the build folder.

Project Structure
src/
components/
 Todo/
  AddTodo.jsx       # Component to add a new task
  TodoItem.jsx      # Individual task item (edit, delete, toggle)
  TodoList.jsx      # List of tasks (active and completed)

EditTodoModal.jsx # Modal for editing a task
context
 TodoContext.jsx       # Context to manage task state and actions
  theme.js                  # MUI theme configuration
    App.jsx                   # Main app component and routing
    index.js                  # Entry point of the app
      styles.css                # Global styles for dark theme and responsiveness



Features Explained

1. Display Todo List
Tasks are displayed in a list, showing the title, description, and their status (completed/incomplete).
The tasks are divided into two sections: active tasks and completed tasks.

2. Add Todo
Users can add a new task by providing a title and description through the form.
The task is added to the list of active tasks.

3. Edit Todo
Users can click the "Edit" button next to a task to update its title or description.
A modal is displayed to allow the user to edit the task.

4. Delete Todo
Users can delete a task by clicking the "Delete" button.
The task is removed from the list.

5. Toggle Completion
Users can toggle the status of a task between completed and incomplete.
Completed tasks appear in a separate section, while incomplete tasks remain in the active list.

6. Persistent State
Tasks are saved in the browser's localStorage so they persist even after refreshing the page.
Customization

Theme: You can modify the theme.js file to change the primary and secondary colors of the app.

Styles: Update styles.css for custom CSS changes such as background, typography, and layout.
