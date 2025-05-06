# Firebase Todo App

A simple Todo application built with Next.js and Firebase Realtime Database with support for dark mode.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Firebase](https://firebase.google.com/) account

## Firebase Setup

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Enter a project name (e.g., "todo-app")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create Project"

### 2. Set Up Realtime Database

1. In your Firebase project, navigate to "Build" → "Realtime Database" in the left sidebar
2. Click "Create Database"
3. Choose a location for your database (select the one closest to your users)
4. Start in "test mode" for development (allows unrestricted access)
   - **Important:** For production, set proper security rules!
5. Click "Enable"

### 3. Register Your Web App

1. In your Firebase project, click on the gear icon ⚙️ next to "Project Overview"
2. Scroll down to "Your apps" and select the web platform (</> icon)
3. Enter a nickname for your app (e.g., "todo-web-app")
4. (Optional) Check "Also set up Firebase Hosting"
5. Click "Register app"
6. You'll see a configuration object like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.REGION.firebasedatabase.app",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

7. Save these values for the next step

## Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd firebase-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

1. Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your-project-id-default-rtdb.region.firebasedatabase.app
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

2. Replace the placeholders with the values from your Firebase configuration

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Create, Read, Update, and Delete (CRUD) operations for todo items
- Realtime data synchronization with Firebase Realtime Database
- Automatic dark mode based on system preferences
- Responsive design

## Project Structure

- `src/app` - Next.js app router pages and layouts
- `src/components` - React components including TodoList and TodoApp
- `src/lib` - Utilities including Firebase setup
- `src/services` - Firebase service functions for CRUD operations
- `src/types` - TypeScript interfaces

## Deploying to Production

Before deploying to production:

1. Update your Realtime Database security rules in the Firebase console:

```
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

2. Consider implementing authentication for a more secure application
3. Deploy using Vercel or your preferred hosting platform:

```bash
npm run build
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)
