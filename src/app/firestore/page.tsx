import FirestoreTodoApp from '../../components/FirestoreTodoApp';

export default function FirestorePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Firestore Database Todo</h1>
      <div className="max-w-md mx-auto">
        <FirestoreTodoApp />
      </div>
    </div>
  );
}
