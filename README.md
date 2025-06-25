# 📱 AppNest – Discover, Install & Review Apps

**AppNest** is a sleek, fully responsive app store platform designed to help users discover, install, and review applications from various categories. It brings together trending apps, smart browsing, and real user feedback to offer an engaging and simplified experience.

---

## 🔗 Live Site

👉 [Visit AppNest Live](https://gorgeous-figolla-bc1175.netlify.app/)

---

## 🎯 Purpose

Create a dynamic, user-friendly app store experience that showcases apps by category, provides secure login, and enables users to install apps and leave reviews—all in one seamless platform.

---

## ✨ Key Features

* 🔐 Email/Password & Google Authentication
* 🌟 Trending and categorized app browsing
* 📲 Install/Uninstall functionality with session persistence
* ✍️ In-session review & rating system (1–5 stars)
* 🧾 Dynamic App Details page (Protected)
* 📂 Extra route for developer documentation
* 🧑‍💼 Protected My Profile route with Firebase updateProfile support
* ⚡ Dynamic document titles per route
* 🔁 Auth persistence on reload (onAuthStateChanged)
* 🌗 Dark/Light Theme toggle
* 🚫 404 Not Found page

---

## 🧱 Tech Stack

* **Frontend**: React, Tailwind CSS, DaisyUI, Vite
* **Authentication**: Firebase Auth, onAuthStateChanged
* **Routing**: React Router v7
* **State Management**: React Hooks
* **UI Enhancements**: SweetAlert2, React Toastify, Dynamic Titles

---

## 🚀 Installation & Setup

### ✅ Prerequisites

* Node.js (v18+)

### 🔧 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/appnest.git
cd appnest
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Variables**

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. **Run locally**

```bash
npm run dev
```

---

## 🧾 JSON App Data Structure (Sample)

```json
[
  {
    "id": "app001",
    "name": "Programming Hero",
    "developer": "Programming Hero Ltd.",
    "thumbnail": "https://i.ibb.co/sWbb4Z5/programming-hero-thumb.jpg",
    "banner": "https://i.ibb.co/vj5rT68/programming-hero-banner.jpg",
    "downloads": 3500000,
    "category": "Education",
    "rating": 4.8,
    "description": "Programming Hero is a fun and interactive way to learn programming. Whether you're a beginner or looking to brush up your skills, this app makes learning to code exciting and practical.",
    "features": [
      "Interactive coding lessons",
      "Real-world projects",
      "Gamified learning experience"
    ],
    "reviews": [
      {
        "user": "coder_nadia",
        "rating": 5,
        "comment": "Best app for beginners! The lessons are super easy to follow and engaging."
      }
    ]
  }
]
```

---

## 🗂️ Pages Overview

* **Home**: Slider, trending apps, categorized sections
* **Apps Page**: List all apps with sort & filter features
* **App Details**: Protected route with install/review capability
* **Login/Register**: With validation, Google Auth
* **My Profile**: Update name & photoURL via Firebase
* **Developer Docs** (Extra route): Info for developers
* **404 Page**: Custom error route

---

## ✅ Form Validations

* **Login/Register**:

  * Password must include uppercase, lowercase, and be 6+ characters

* **Submit Review**:

  * Rating must be between 1 and 5
  * No review allowed before installation

---

## ⚙️ Extra Functionalities

* ✅ Installed apps toggle (Install/Uninstall)
* ✅ Review only after install (submit allowed after uninstall)
* ✅ My Profile update via `updateProfile()`
* ✅ Auth persistence using `onAuthStateChanged`

---

## 🔌 Key Dependencies

```json
"dependencies": {
  "firebase": "^11.10.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.2",
  "react-toastify": "^9.1.2",
  "sweetalert2": "^11.10.0",
  "tailwindcss": "^4.1.10"
},
"devDependencies": {
  "@vitejs/plugin-react": "^4.4.0",
  "daisyui": "^5.0.43",
  "vite": "^6.3.5"
}
```

---

## 👨‍💻 Author

Made with 💡 by Kawser Ahmed Nihad

---

## 📜 License

This project is licensed under the MIT License.
