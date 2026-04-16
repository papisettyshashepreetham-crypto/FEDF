let students = [];
let editIndex = -1;

function addStudent() {
  let id = document.getElementById("studentId").value;
  let name = document.getElementById("studentName").value;
  let attendance = document.getElementById("attendance").value;

  if (id === "" || name === "") {
    alert("Please fill all fields");
    return;
  }

  students.push({ id, name, attendance });
  renderTable();
  clearInputs();
}

function renderTable() {
  let tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";

  students.forEach((student, index) => {
    let row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.attendance}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    tbody.innerHTML += row;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}

function editStudent(index) {
  let student = students[index];

  document.getElementById("studentId").value = student.id;
  document.getElementById("studentName").value = student.name;
  document.getElementById("attendance").value = student.attendance;

  editIndex = index;
}

function updateStudent() {
  if (editIndex === -1) {
    alert("Select a student to edit first");
    return;
  }

  students[editIndex] = {
    id: document.getElementById("studentId").value,
    name: document.getElementById("studentName").value,
    attendance: document.getElementById("attendance").value,
  };

  editIndex = -1;
  renderTable();
  clearInputs();
}

function clearInputs() {
  document.getElementById("studentId").value = "";
  document.getElementById("studentName").value = "";
}
