'use client';

import FirestoreTodoList from '../../components/FirestoreTodoList';

export default function FirestorePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Firestore Database Todo</h1>
      <FirestoreTodoList />
    </div>
  );
}
