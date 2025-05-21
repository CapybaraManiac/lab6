export interface User {
  id: string;
  firstName: string;
  lastName: string;
  numCertificate: number;
}

export class UserModel implements User {
  id: string;

  firstName: string;

  lastName: string;

  numCertificate: number;

  constructor({ id, firstName, lastName, numCertificate }: User) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.numCertificate = numCertificate;
  }
} 