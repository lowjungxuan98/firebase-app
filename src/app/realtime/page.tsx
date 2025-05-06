import TodoApp from '../../components/TodoApp';

export default function RealtimePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Realtime Database Todo</h1>
      <div className="max-w-md mx-auto">
        <TodoApp />
      </div>
    </div>
  );
}
