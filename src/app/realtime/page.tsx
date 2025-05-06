'use client';

import TodoList from '../../components/TodoList';

export default function RealtimePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Realtime Database Todo</h1>
      <TodoList />
    </div>
  );
}
