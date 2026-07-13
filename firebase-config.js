 // استيراد الخدمات المطلوبة من Firebase عبر CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// بيانات الاتصال الخاصة بمشروعك eduVibe
const firebaseConfig = {
  apiKey: "AIzaSyCxd-JRjFaN7LCzCoiBq-D0V5B8ZLHzo3k",
  authDomain: "eduvibe-755aa.firebaseapp.com",
  projectId: "eduvibe-755aa",
  storageBucket: "eduvibe-755aa.firebasestorage.app",
  messagingSenderId: "425890324867",
  appId: "1:425890324867:web:6935aa00b26a3ed032d6b6"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// تصدير الخدمات للاستخدام في ملفات الـ JS الأخرى
export const auth = getAuth(app);
export const db = getFirestore(app);