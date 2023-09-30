export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      const department = [];

      for (const value of Object.keys(employeesList)) {
        department.push(value);
      }
      const deptCount = new Set(department).size;
      return deptCount;
    },
  };
  return report;
}
