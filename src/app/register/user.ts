export class User {
  id: string;
  username: string;
  password: string;
  street: string;
  number: string;
  place: string;
  zip: string;
  role: string;

  constructor(id: string, username: string, password: string, street: string, number: string, place: string, zip: string, role: string) {
    this.username = username;
    this.password = password;
    this.street = street;
    this.number = number;
    this.place = place;
    this.zip = zip;
    this.role = role;
    this.id = id;
  }
}
