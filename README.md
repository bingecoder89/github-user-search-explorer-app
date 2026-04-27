# GitHub User Explorer

A lightweight React app for searching GitHub profiles by username and viewing key public profile details.

## Features

- Search GitHub users by username
- Fetch profile data from the GitHub API
- Display avatar, name, bio, location, Twitter handle, followers, following, and public repositories
- Loading spinner during API requests
- Error messaging for failed lookups
- Responsive UI built with Tailwind CSS

## Built With

- React 19
- Vite
- Tailwind CSS 4
- React Spinners
- Remix Icon

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Then open the local URL shown in the terminal.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` � main app logic and GitHub fetch flow
- `src/components/Header.jsx` � top bar and search input wrapper
- `src/components/Search.jsx` � search input and button
- `src/components/UserCard.jsx` � user profile display
- `src/components/Loading.jsx` � loading state indicator
- `src/components/ErrorMessage.jsx` � error display

## Scripts

- `npm run dev` � start development server
- `npm run build` � create production build
- `npm run preview` � preview the production build
- `npm run lint` � run ESLint

## Notes

- Search is triggered by pressing Enter or clicking the search icon
- The UI uses Tailwind CSS utility classes for styling
- The app fetches data from `https://api.github.com/users/{username}`

## License

This project is provided as-is.
