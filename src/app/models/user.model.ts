export class User {
  id: number;
  fname: string;
  lname: string;
  age: number;
  email: string;
  address: {street: string,barangay: string, city: string,province:string,country:string,zipcode: string}
  mobile: string;
}
