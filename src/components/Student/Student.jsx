import React, { useState } from 'react';
import user_2 from "../../assets/user-2.png";
import user_5 from "../../assets/user_5.jpg";
import white_arrow from "../../assets/white-arrow.png"
import "./Student.css";

const dummyDatabase = {
  "REG123": {
    name: "John Doe",
    department: "CSE",
    dob: "2005-08-20",
    image: user_2
  },
  "REG456": {
    name: "Jane Smith",
    dob: "2006-03-15",
    image: "https://via.placeholder.com/150"
  },
  "13UEN609": {
    name: "Gobalakrishnan S",
    department: "BA English literature",
    deptNo: "13UEN609",
    adhar: 563765921777,
    batch: "2013 to 2016",
    dob: "1990-08-20",
    image: user_5
  }
};

const Student = () => {
  const [showInput, setShowInput] = useState(false);
  const [regNo, setRegNo] = useState('');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const found = dummyDatabase[regNo.trim().toUpperCase()];
    if (found) {
      setStudent(found);
      setError('');
    } else {
      setStudent(null);
      setError("Student not found.");
    }
  };

  const handleClose = () => {
    setShowInput(false);
    setRegNo('');
    setStudent(null);
    setError('');
  };

  return (
    <div className="student">
      <div className="student-container">
        <button className="btn dark-btn student-btn" onClick={() => setShowInput(true)}>
          Register No <img src={white_arrow} alt="" />
        </button>

        {showInput && (
          <div className="student-form">
            <input
              type="text"
              placeholder="Enter Reg No"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              className="student-input"
            />
            <button
              className="student-search-btn"
              onClick={handleSearch}
            >
              View Details
            </button>

            {student && (
              <div className="student-details">
                <h5>St. Peter's college of Engineering & Technology</h5>
                <img src={student.image} alt={student.name} className="student-image" />
                <h4>Studnet Info:</h4>
                <p className="student-name"><b>Name : </b> {student.name}</p>
                <p className="student-dob"><b>Department : </b> {student.department}</p>
                <p className="student-dob"><b>Dept No : </b> {student.deptNo}</p>
                <p className="student-dob"><b>Batch : </b> {student.batch}</p>
                <p className="student-dob"><b>Adhar No : </b> {student.adhar}</p>
                <p className="student-dob"><b>DOB : </b> {student.dob}</p>
              </div>
            )}

            {error && (
              <p className="student-error">{error}</p>
            )}

            {student && (
              <button
                className="student-close-btn"
                onClick={handleClose}
              >
                Close
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Student;
