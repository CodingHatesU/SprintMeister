# SprintMeister

SprintMeister is a powerful, open-source project management tool designed to help teams streamline their workflow, manage tasks effectively, and gain insights into their progress. Inspired by Jira, it provides a comprehensive suite of features for agile development, including sprint planning, task tracking, and performance analytics.

## ✨ Features

- **Workspace Management:** Create and manage multiple workspaces to organize different projects and teams.
- **Project Management:** Define projects, set goals, and track progress from a centralized dashboard.
- **Task Management:** Create, assign, and track tasks with a flexible Kanban board.
- **Drag & Drop:** Easily reorder and update task statuses with a smooth drag-and-drop interface.
- **Sprints:** Organize tasks into sprints for better planning and execution.
- **Analytics:** Gain valuable insights into team performance and project progress with detailed analytics and charts.
- **Authentication:** Secure user authentication with support for email/password and OAuth providers.
- **Members:** Invite and manage team members with different roles and permissions.
- **Responsive Design:** A fully responsive UI that works seamlessly on desktops, tablets, and mobile devices.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
- **State Management:** [TanStack Query](https://tanstack.com/query)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **API:** [Hono](https://hono.dev/)
- **Backend:** [Appwrite](https://appwrite.io/)
- **Tables:** [TanStack Table](https://tanstack.com/table)
- **Drag & Drop:** [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
- **Charts:** [Recharts](https://recharts.org/)
- **Calendar:** [React Big Calendar](http://jquense.github.io/react-big-calendar/)

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [Bun](https://bun.sh/)
- An [Appwrite](https://appwrite.io/) instance

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/SprintMeister.git
    cd SprintMeister
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add the necessary environment variables. See the [Environment Variables](#-environment-variables) section for more details.

4.  **Run the development server:**

    ```bash
    bun run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

```
NEXT_PUBLIC_APPWRITE_PROJECT_ID=
NEXT_PUBLIC_APPWRITE_ENDPOINT=
APPWRITE_API_KEY=
```

You can get these values from your Appwrite project settings.

## 📜 Available Scripts

In the project directory, you can run:

| Script        | Description                                     |
| ------------- | ----------------------------------------------- |
| `bun run dev`   | Runs the app in the development mode.           |
| `bun run build` | Builds the app for production.                  |
| `bun run start` | Starts the production server.                   |
| `bun run lint`  | Runs the linter to check for code quality.      |

## 📁 Project Structure

The project follows a feature-based architecture, where each feature has its own directory containing all the related files (API routes, components, hooks, etc.).

```
.
├── src/
│   ├── app/                # Next.js App Router, contains all the routes
│   ├── components/         # Shared components and UI library
│   ├── features/           # Feature-based modules (auth, projects, tasks, etc.)
│   ├── hooks/              # Shared hooks
│   ├── lib/                # Shared libraries and utilities
│   └── config.ts           # Project configuration
├── public/               # Static assets
└── ...                   # Other configuration files
```

## 📦 Data Models

Here are the main data models used in the application:

### Workspace

```typescript
export type Workspace = {
  name: string;
  imageUrl: string;
  inviteCode: string;
  userId: string;
};
```

### Project

```typescript
export type Project = {
  name: string;
  imageUrl: string;
  workspaceId: string;
};
```

### Task

```typescript
export enum TaskStatus {
  BACKLOG = "BACKLOG",
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  IN_REVIEW = "IN_REVIEW",
  DONE = "DONE"
};

export type Task = {
  name: string;
  status: TaskStatus;
  workspaceId: string;
  assigneeId: string;
  projectId: string;
  position: number;
  dueDate: string;
  description?: string;
};
```

### Member

```typescript
export enum MemberRole {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER"
};

export type Member = {
  workspaceId: string;
  userId: string;
  role: MemberRole;
};
```

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
