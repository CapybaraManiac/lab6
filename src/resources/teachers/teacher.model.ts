export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  degree: string;
}

export class TeacherModel implements Teacher {
  id: string;
  firstName: string;
  lastName: string;
  degree: string;

  constructor({ id, firstName, lastName, degree }: Teacher) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.degree = degree;
  }
} 