export default function createReportObject(employeesList) {
  const report = {
    "allEmployees": employeesList,
    getNumberOfDepartments() {
      const department = [];
      for (const value of Object.keys(employeesList)) {
        department.push(value);
      }
      const dept_count = new Set(department).size;
      return dept_count;
    }
  };
  return report;
}
