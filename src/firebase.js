// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebase = () => {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBb2-qXcZBqq60_Z9lQ1ObDHuZjnC9WG5s",
    authDomain: "school-management-system-cb2fa.firebaseapp.com",
    projectId: "school-management-system-cb2fa",
    storageBucket: "school-management-system-cb2fa.appspot.com",
    messagingSenderId: "22595629780",
    appId: "1:22595629780:web:68347ab777679570744141",
    measurementId: "G-BJYV6EF6E1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
}
export default firebase;