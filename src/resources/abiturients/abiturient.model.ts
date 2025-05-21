export interface Abiturient {
  id: string;
  firstName: string;
  lastName: string;
  numCertificate: number;
}

export class AbiturientModel implements Abiturient {
  id: string;

  firstName: string;

  lastName: string;

  numCertificate: number;

  constructor({ id, firstName, lastName, numCertificate }: Abiturient) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.numCertificate = numCertificate;
  }
} 