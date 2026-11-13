# Student Management Application

A simple Student Management Application built using Angular 22 to practise Angular fundamentals, component communication, and data management.

## Features

- Display a list of students.
- Add new students dynamically.
- Share data between parent and child components.
- Custom pipe to capitalize student names.
- Custom directive to highlight active students.
- Angular lifecycle hooks.
- Responsive user interface.

## Technologies Used

- Angular 22
- TypeScript
- HTML
- CSS

## Project Structure

```text
src/
└── app/
    ├── components/
    │   ├── student-list/
    │   ├── student-card/
    │   └── student-form/
    ├── services/
    ├── pipes/
    ├── directives/
    ├── app.ts
    └── app.html
```

## Installation and Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd student-management
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
ng serve
```

Open your browser at:

```text
http://localhost:4200
```

## Learning Objectives

This project demonstrates practical implementation of:

- Angular Services and Dependency Injection
- Custom Pipes and Directives
- Lifecycle Hooks
- Component Composition
- `@Input()` and `@Output()`
- Parent-child communication
- Angular Data Binding

---

**Developed as part of Angular learning and practical assignment.**