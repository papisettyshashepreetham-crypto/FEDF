import { useState, useContext } from "react";
import StudentContext from "../StudentContext";

function StudentForm() {
    const [name, setName] = useState("");
    const { students, setStudents } = useContext(StudentContext);

    const addStudent = (e) => {
        if (e) e.preventDefault();
        if (name.trim() === "") return;
        setStudents([...students, name.trim()]);
        setName("");
    };

    return (
        <form onSubmit={addStudent} className="student-form-card" id="student-form">
            <h3 className="section-title">Add New Student</h3>
            <div className="input-group">
                <label htmlFor="student-name" className="input-label">Student Name</label>
                <div className="input-wrapper">
                    <input
                        id="student-name"
                        type="text"
                        value={name}
                        placeholder="Enter Student Name"
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        autoComplete="off"
                    />
                    <span className="input-focus-line"></span>
                </div>
            </div>
            <button type="submit" className="btn-add" id="add-student-btn">
                <span>Add Student</span>
                <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </form>
    );
}

export default StudentForm;
