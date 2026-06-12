import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import BookDeletion from "./components/BookDeletion";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Login setIsLoggedIn={setIsLoggedIn} />
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/deletebook"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <BookDeletion />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
