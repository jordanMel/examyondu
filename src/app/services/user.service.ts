import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  useridgenerate: number = 2;
  users: User[] = [
    {
      id: 1,
      fname: 'jordan',
      lname: 'catabona',
      age: 27,
      email: 'jmcatabona0101@gmail.com',
      address: {
        street: 'asdasd',
        barangay: 'asdasd',
        city: 'asdasdasd',
        province: 'asdasdasd',
        country: 'asdasdasd',
        zipcode: 'asdasdasd',
      },
      mobile: '5023123123',
    },
    {
      id: 2,
      fname: 'jane',
      lname: 'doe',
      age: 23,
      email: 'jane@gmail.com',
      address: {
        street: 'asdasd',
        barangay: 'asdasd',
        city: 'asdasdasd',
        province: 'asdasdasd',
        country: 'asdasdasd',
        zipcode: 'asdasdasd',
      },
      mobile: '000123213',
    },
  ];
  constructor() { }

  onGet() {
    return this.users;
  }

  onGetUser(id: number) {
    return this.users.find(x=>x.id === id);
  }

  onAdd(user: User) {
    this.users.push(user);
  }

  onUpdate(user: User) {
    let oldUser =  this.users.find(x=>x.id === user.id);

    oldUser.fname = user.fname;
    oldUser.lname = user.lname;
    oldUser.age = user.age;
    oldUser.email = user.email;
    oldUser.mobile = user.mobile;
    oldUser.address = user.address;
  }

  getGeneratedUserId() {
    return this.useridgenerate + 1;
  }

  onDelete(id: number) {
    let user = this.users.find(x=>x.id === id );
    let index = this.users.indexOf(user,0);
    this.users.splice(index,1);
  }

}
