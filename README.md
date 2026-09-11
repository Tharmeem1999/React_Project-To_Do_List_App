# To-Do List App

A small, client-side to-do list built with React and Vite. Add tasks, assign priorities, mark work as complete, edit existing tasks, filter the list, and sort tasks by priority. Tasks are saved in the browser, so the list remains available after a refresh without requiring an account or backend.

## Features

- Add tasks with a text description and a numeric priority.
- Mark tasks complete or incomplete.
- Edit a task's description and priority inline.
- Delete tasks.
- Show only incomplete tasks.
- Sort tasks from lowest to highest priority.
- Persist tasks in `localStorage`.
- Use Lucide icons for task actions and controls.

## Tech Stack

- React 19
- Vite 8
- JavaScript with JSX
- `lucide-react` for icons
- ESLint with React Hooks and React Refresh rules

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Build the application for production in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## How It Works

1. Enter a task description and a priority of `1` or higher.
2. Select the plus button to add the task.
3. Use the checkbox to toggle completion.
4. Select the pencil button to edit a task, then select the check button to save it.
5. Use the trash button to remove a task.
6. Enable **Show only incomplete** to hide completed tasks.
7. Select the sort control to order tasks by ascending priority.

Blank task descriptions are ignored. New tasks start as incomplete, and the form resets to priority `1` after a task is added.

## Data Persistence

Tasks are stored in the browser under the `tasks` key. The stored value is a JSON array with this shape:

```json
[
	{
		"id": 1710000000000,
		"text": "Review project README",
		"priority": 1,
		"done": false
	}
]
```

Data is scoped to the browser and origin. Clearing site data or using a different browser or device will remove or hide the saved list. There is currently no synchronization between devices and no server-side storage.

## Project Structure

```text
src/
├── App.jsx                         # Application state and task operations
├── main.jsx                        # React entry point
├── components/
│   ├── EditTaskForm.jsx            # Inline task editing
│   ├── TaskControls.jsx            # Filtering and sorting controls
│   ├── TaskForm.jsx                # New task form
│   ├── TaskItem.jsx                # Task row and actions
│   └── TaskList.jsx                # Filtering, editing state, and list rendering
└── utils/
    └── localStorageUtils.js        # Read and write browser storage
```

`App.jsx` owns the task collection and passes event handlers to the child components. Each add, edit, delete, completion toggle, and sort operation updates React state and persists the resulting array.

## Screenshots

<img width="816" height="446" alt="Image" src="https://github.com/user-attachments/assets/345c6dc6-0d09-4a15-84a8-261721714f50" />
<img width="815" height="607" alt="Image" src="https://github.com/user-attachments/assets/a3e2ed1d-a8ed-407e-8677-6c1849a480c2" />
<img width="816" height="560" alt="Image" src="https://github.com/user-attachments/assets/dd5eba33-5636-4e26-9bc3-e71c21d53c4a" />

## License

This project is available under the terms of the [MIT License](LICENSE).
