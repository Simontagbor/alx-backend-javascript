
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow additional attributes with any name and type
  }

  interface Directors extends Teacher {
    numberOfReports: number;
  }

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;  
  }

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstNameInitial = firstName.charAt(0).toUpperCase();
  return `${firstNameInitial}. ${lastName}`;
  };

  interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Export the class
export { StudentClass, StudentConstructor };

