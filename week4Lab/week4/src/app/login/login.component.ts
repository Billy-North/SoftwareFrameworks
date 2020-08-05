import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  email: string,
  password: string
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email = ""
  password = ""
  invalidLogin = false
  

  users: User[] = [
    {
      email: '123@mail.com',
      password: '123'
    },
    {
      email: '456@mail.com',
      password: '456'
    }
  ]



  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
    console.log("ngOninitCalled")
  }

  login() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.email && this.users[i].password === this.password) {
        this.router.navigateByUrl('/account')
        //this.router.navigateByUrl('/account/' + this.email );
        this.invalidLogin = false 
        return
      }
    }
    this.invalidLogin = true
  }



}
/*
  login(): void {
    console.log(this.email)
    console.log(this.password)




*/