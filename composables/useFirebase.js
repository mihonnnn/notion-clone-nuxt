import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  };

  // Firebaseの初期化
  const app = initializeApp(firebaseConfig);

  // 必要なサービスを取得
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  return {
    app,
    auth,
    db,
    storage,
  };
};
