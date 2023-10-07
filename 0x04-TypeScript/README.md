# 0x04. Typescript
## Learning Objectives
In this folder, we will find a compilation of files that will help us to understand the concept of:
- Basic typescript
- Interface
- Functions
- Classes
- Generics
- namespaces
- merging declarations

## Tasks
### 0. Creating an interface for a student
I created an interface named Student with:
- firstName of type string
- lastName of type string
- age of type number
- location of type string
I then used vanilla Javascript to render a table with the student info.

### 1. Let's build a Teacher interface
I created an interface named Teacher with:
- firstName of type string
- lastName of type string
- fullTimeEmployee of type boolean
- location of type string
- yearsOfExperience of type number
I then added the possibility to add any attribute to the teacher object without specifying the attribute name.

### 2. Extending the Teacher class
I wrote an interface named Directors that extends Teacher and it requires an attribute named numberOfReports of type number.


### 3. Printing teachers
I wrote a function printTeacher that accepts a Teacher[] and prints each Teacher to the console.

### 4. Writing a class
I wrote a class named StudentClass with a constructor accepting firstName, lastName and location arguments. I then created a method named workOnHomework that accepts no arguments and returns void. I also created a method named displayName that accepts no arguments and returns a string.

### 5. Advanced types Part 1
I created the `DirectorInterface` with 3 expected methods:
`workFromHome` which accepts no arguments and returns a string
`getCoffeeBreak` which accepts no arguments and returns a string
`workDirectorTasks` which accepts no arguments and returns a string

i created the `TeacherInterface` with 3 expected methods:
`workFromHome` which accepts no arguments and returns a string.
`getCoffeeBreak` which accepts no arguments and returns a string.
`workTeacherTasks` which accepts no arguments and returns a string.

I created the `Director` class that implements the `DirectorInterface` interface.
I created the `Teacher` class that implements the `TeacherInterface` interface.


### 6. Creating functions specific to employees
I created a function `isDirector` that accepts an employee `Director`/`Teacher` and returns a boolean.
I created a function `executeWork` that accepts an `Employee` and executes the `work` function.


### 7. String literal types
I created a union type named `Subjects` whose values are the different subject areas taught at a school (History, Math, CS).



### 8. Ambient Namespaces
I created an `AmbientSchoolInterface` interface with 3 members:
`teachers` which is an array of `Teacher` (a class created in a previous task)
`students` which is an array of `string`s
`subjects` which is an array of `Subjects` (a union created in a previous task)

