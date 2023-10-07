interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 = {firstName: "valerie", lastName: "Guye", age: 55, location: "Adabraka" };
const student2 = {firstName: "John", lastName: "Guy", age: 35, location: "Adabraka" };

const studentList = [student1, student2 ];

function renderStdentTable (studentList) {
  const tableBody = document.getElementById("studenttableBody");
  if (tableBody) {
    studentList.forEach((student, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.location}</td>
      `;
      tableBody.appendChild(row);
    });
  }
}

