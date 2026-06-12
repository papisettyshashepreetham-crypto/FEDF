import { useState } from "react";
import StudentContext from "./StudentContext";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
    // State stored in Parent Component (Lifting State Up)
    const [students, setStudents] = useState([]);

    return (
        <StudentContext.Provider value={{ students, setStudents }}>
            <div className="app-container">
                <header className="app-header">
                    <div className="header-badge">React State Management</div>
                    <h1 className="app-title">Student Management System</h1>
                    <p className="app-subtitle">
                        Demonstrating <strong>Lifting State Up</strong>, <strong>Context API</strong>, and <strong>Component Patterns</strong> in React.
                    </p>
                </header>

                <main className="dashboard-grid">
                    <div className="grid-col-form">
                        <StudentForm />
                        
                        <div className="concept-explanation-card">
                            <h4 className="explanation-title">System Architecture Flow</h4>
                            <div className="flow-steps">
                                <div className="flow-step">
                                    <span className="step-num">1</span>
                                    <p className="step-text">User enters student name and clicks Add.</p>
                                </div>
                                <div className="flow-step">
                                    <span className="step-num">2</span>
                                    <p className="step-text">State updates in <code>App.jsx</code> (Lifting State Up).</p>
                                </div>
                                <div className="flow-step">
                                    <span className="step-num">3</span>
                                    <p className="step-text"><code>StudentContext.Provider</code> broadcasts the updated state.</p>
                                </div>
                                <div className="flow-step">
                                    <span className="step-num">4</span>
                                    <p className="step-text"><code>StudentList</code> consumes context and automatically re-renders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid-col-list">
                        <StudentList />
                    </div>
                </main>
                
                <footer className="app-footer">
                    <p>FEDF Lab Assignment — Week 7</p>
                </footer>
            </div>
        </StudentContext.Provider>
    );
}

export default App;
