export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (Array.isArray(studentList)) {
    const updatedlist = studentList
      .filter((student) => student.location === city)
      .map((student) => {
        const Grades = newGrades.find((grade) => grade.studentId === student.id);
        if (Grades) {
          return { ...student, grade: Grades.grade };
        }
        return { ...student, grade: 'N/A' };
      });
    return updatedlist;
  }
  return [];
}
