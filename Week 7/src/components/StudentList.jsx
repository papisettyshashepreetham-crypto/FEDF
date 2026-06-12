import { useContext } from "react";
import StudentContext from "../StudentContext";

function StudentList() {
    const { students } = useContext(StudentContext);

    return (
        <div className="student-list-card" id="student-list-container">
            <div className="list-header">
                <h3 className="section-title">Student List</h3>
                <span className="student-count" id="student-counter">
                    {students.length} {students.length === 1 ? 'Student' : 'Students'}
                </span>
            </div>

            {students.length === 0 ? (
                <div className="empty-state" id="empty-state">
                    <div className="empty-icon-wrapper">
                        <svg className="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="empty-title">No Students Yet</p>
                    <p className="empty-subtitle">Use the form on the left to add students to the list.</p>
                </div>
            ) : (
                <ul className="student-list" id="student-ul">
                    {students.map((student, index) => (
                        <li key={index} className="student-item" id={`student-item-${index}`}>
                            <div className="student-avatar">
                                {student.charAt(0).toUpperCase()}
                            </div>
                            <div className="student-info">
                                <span className="student-name">{student}</span>
                                <span className="student-id">ID: STU-{(index + 1).toString().padStart(4, '0')}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default StudentList;
