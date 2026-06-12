import React, { useState } from "react";

function RegistrationForm() {
  // Hook: useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      `Registration Successful!
Name: ${name},
Email: ${email},
Course: ${course}`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-input"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-input"
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Course:</label>
          <input
            type="text"
            className="form-input"
            placeholder="Computer Science"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Register</button>
      </form>
      {message && <h3 className="success-message">{message}</h3>}
    </div>
  );
}

export default RegistrationForm;
