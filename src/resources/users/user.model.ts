export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
}

export class UserModel implements User {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  role: 'admin' | 'teacher' | 'student';

  constructor({ id, firstName, lastName, email, role }: User) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
  }
} 