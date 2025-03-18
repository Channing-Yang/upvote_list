# Upvote List App

This project is a React application built using TypeScript that implements a reusable upvote component along with an upvote list that supports managing multiple upvotes. The project was developed as part of a technical assessment and demonstrates best practices for component reusability, state management, and testing in a React ecosystem.

## Table of Contents

- [Features](#Features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)

## Features

- **Reusable Upvote Component**
  - Displays an upvote arrow.
  - Supports two states: default (not-selected) and selected.
  - Visual state is indicated by different background and arrow colors:
    - **Default:** Background `#F4F6F8`, Arrow `#343A40`
    - **Selected:** Background `#E5E8FD`, Arrow `#253CF2`
  - Toggling state on click via a onClick passed through props.

- **Reusable Dynamic Upvote List**
  - Each list maintains its own shared selection state.
  - Clicking any upvote in a list toggles the state for all upvotes in that list.
  - A `+` button allows users to add additional upvotes dynamically.
  - Newly added upvotes are linked to the same state as the existing ones.

- **Data Management & Persistence**
  - The list data is persisted using the browser's localStorage, ensuring upvote states remain after a page refresh.

- **Testing**
  - A test is provided using React Testing Library to verify that the upvote selection toggles correctly on click.

## Project Structure

```plaintext
src/
│── Upvote/
│   ├── Upvote.tsx        # Reusable upvote component
│   ├── UpvoteList.tsx    # Upvote list component managing multiple upvotes
│   ├── __tests__/
│       ├── Upvote.test.tsx   # Unit test for verifying upvote selection toggle
│── App.tsx               # Main application component rendering upvote lists
│── index.tsx             # Entry point for the application

```

## Installation & Setup

Clone the Repository
- `git clone https://github.com/Channing-Yang/upvote_list` 
- `cd upvote_list`

Install Dependencies
- `npm install`

Start the Development Server
- `npm start`

Test
- `npm test`