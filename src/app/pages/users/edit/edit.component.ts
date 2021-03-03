import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {




  id: number;
  header: string;
  user: User;
  UserForm: FormGroup;


  constructor(private fb: FormBuilder,private router: Router, private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit(): void {




    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add User' : 'Edit User';



    this.UserForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['',Validators.required],
      age: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      email: ['',[Validators.required,	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      address: this.fb.group({
        street: [''],
        barangay: [''],
        city: [''],
        province: [''],
        country: [''],
        zipcode: ['']
      }),
    });


    if (this.id != 0 ) {
      this.user = this.userService.onGetUser(this.id);
    this.UserForm.setValue( {
   fname: this.user.fname,
   lname: this.user.lname,
   age: this.user.age,
   email: this.user.email,
   mobile: this.user.mobile,
   address: {
     street: this.user.address.street,
     barangay: this.user.address.barangay,
     city: this.user.address.city,
     province: this.user.address.province,
     country: this.user.address.country,
     zipcode: this.user.address.zipcode
       }
  });


    }
  }
  get f(){
    return this.UserForm.controls;
  }

  onSubmit() {

    if(this.id === 0) {
      this.user = {
        id: this.userService.getGeneratedUserId(),
        fname: this.UserForm.value.fname,
        lname: this.UserForm.value.lname,
        age: this.UserForm.value.age,
        email: this.UserForm.value.email,
        address: this.UserForm.value.address,
        mobile: this.UserForm.value.mobile
      }

      this.userService.onAdd(this.user);
    console.log(this.UserForm.controls);

    } else {
      this.user = {
        id: this.id,
        fname: this.UserForm.value.fname,
        lname: this.UserForm.value.lname,
        age: this.UserForm.value.age,
        email: this.UserForm.value.email,
        address: this.UserForm.value.address,
        mobile: this.UserForm.value.mobile
      }
      this.userService.onUpdate(this.user);
    }
    this.router.navigateByUrl('');
  }

}
