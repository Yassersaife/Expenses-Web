import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7qFh1Emk4so3WvOIsWJYmYjuMzkV7p7A",
    authDomain: "task-quizplus.firebaseapp.com",
    projectId: "task-quizplus",
    storageBucket: "task-quizplus.appspot.com",
    messagingSenderId: "889573960862",
    appId: "1:889573960862:web:54d01eaebf09dbbac0df8f"
  };
  const app = initializeApp(firebaseConfig);
  export const firestore = getFirestore(app);

