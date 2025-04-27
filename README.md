
# 🌍 REST Countries Explorer – React Frontend Application

## 📘 SE3040 – Application Frameworks  
**BSc (Hons) in Information Technology – Software Engineering**  
**Assignment 02 – 2025**

---

## 🔥 Project Overview

This project is a React frontend application developed using **functional components** that integrates with the [REST Countries API](https://restcountries.com/). It allows users to search, filter, and view detailed information about countries around the world.

---

## 🎯 Objectives

- ✅ Use React functional components
- ✅ Integrate REST Countries API (4+ endpoints)
- ✅ Enhance UI with a modern CSS framework (Bootstrap)
- ✅ Implement user session management
- ✅ Maintain version control using GitHub
- ✅ Deploy on a free hosting platform
- ✅ Perform unit and integration testing
- ✅ Document setup and challenges

---

## 🚀 Live Demo

🌐 [Visit Live Application](https://your-deployed-url.netlify.app)

📂 [GitHub Repository](https://github.com/yourusername/rest-countries-app)

---

## 🧪 Testing

Testing is implemented using **Jest** and **React Testing Library** to ensure app functionality and reliability.

### To run tests:

```bash
npm test
```

### Tests included:

- Search functionality (country name)
- Region filtering
- Language filtering
- Country detail rendering
- Session persistence

---

## 🛠️ Technologies Used

| Area           | Tools/Frameworks                    |
|----------------|-------------------------------------|
| Frontend       | React (Functional Components)       |
| Styling        | Bootstrap                           |
| Routing        | React Router DOM                    |
| State Mgmt     | React Hooks (useState, useEffect)   |
| API            | REST Countries API                  |
| Testing        | Jest + React Testing Library        |
| Deployment     | Netlify / Vercel / GitHub Pages     |
| Version Control| Git + GitHub                        |

---

## 🌐 REST Countries API Endpoints Used

- `GET /all` – Get all countries
- `GET /name/{name}` – Search by name
- `GET /region/{region}` – Filter by region
- `GET /alpha/{code}` – Country details by code

---

## ✨ Features

### 📌 View Countries
- Country list with flag, name, region, capital, and population

### 🔍 Search
- Real-time search by country name

### 🗺️ Filter
- Filter by **region** and **language**

### 🏳️ Country Details
- Detailed view including languages and flag (on country click)

### 🔐 Session Management
- User login with basic session persistence (using localStorage)

---

## 🧱 Folder Structure

```
rest-countries-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── CountryCard.js
│   │   ├── CountryDetails.js
│   │   └── Filters.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   └── LoginPage.js
│   ├── App.js
│   ├── index.js
│   ├── App.test.js
│   └── context/AuthContext.js
├── .gitignore
├── README.md
└── package.json
```

---

## 🧪 Sample Test Case

```jsx
// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search bar', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/search for a country/i);
  expect(inputElement).toBeInTheDocument();
});
```

---

## 📥 Installation & Setup

### Step 1 – Clone the Repository
```bash
git clone https://github.com/yourusername/rest-countries-app.git
cd rest-countries-app
```

### Step 2 – Install Dependencies
```bash
npm install
```

### Step 3 – Run Locally
```bash
npm start
```

---

## 🚀 Deployment

Deployed using **[Netlify](https://netlify.com)** / **[Vercel](https://vercel.com)** / **GitHub Pages**

> Hosted URL is included above in the Live Demo section.

---

## 🧠 Challenges Faced

| Challenge                          | Solution                                       |
|-----------------------------------|------------------------------------------------|
| CORS issues with some endpoints   | Used CORS-friendly `https://restcountries.com` |
| Session state on refresh          | Implemented `localStorage`                    |
| Search/filter performance         | Debounced input and optimized rendering       |
| Layout on smaller screens         | Used Bootstrap grid and utilities             |

---

## 📜 License

This project is for academic purposes as part of SE3040 – Application Frameworks.

---

## 🧑‍💻 Author

**Heshan Jeewantha**  
[GitHub](https://github.com/heshanjeewantha) • [LinkedIn](https://linkedin.com/in/heshanjeewantha)
