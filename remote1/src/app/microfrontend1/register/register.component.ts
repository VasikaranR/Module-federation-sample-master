import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm:FormGroup|any;


  constructor(private formBuilder:FormBuilder, private router:Router, private userService:UserService ) {
    this.userForm=this.formBuilder.group({
      userName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      userEmail:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]),
      password:new FormControl('',[Validators.required,Validators.pattern('^([A-Z]{1})[a-z0-9]{7,11}$')]),
      confirmPassword:new FormControl('',[Validators.required,Validators.pattern('^([A-Z]{1})[a-z0-9]{7,}$')])

    })
   }

  ngOnInit(): void {
  }
   

  get userName(){
    return this.userForm.get('userName')

  }

  get password(){
    return this.userForm.get('password')
  }

  get userEmail(){
    return this.userForm.get('userEmail')
  }

  get confirmPassword(){
    return this.userForm.get('confirmPassword')
 }

 register(userForm:FormGroup){
  
  this.userService.postDetails(userForm.value).subscribe((res)=>{

  })
 }

}

