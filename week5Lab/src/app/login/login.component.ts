import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
}

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
    private router: Router,
    private http: HttpClient

  ) { }

  ngOnInit(): void {
    console.log("ngOninitCalled")
    
  }

  login() {

    const bodyData = { username: this.email, password: this.password }
    this.http.post('http://localhost:3000/api/auth', bodyData, httpOptions).subscribe((data: any) => {

      if (data) {
        if (typeof(Storage) !== undefined) {
          sessionStorage.setItem('user',JSON.stringify(data))
          this.router.navigateByUrl('/account')
          this.invalidLogin = false
        } else {
          alert("Browser does not support storage")
        }
      } else {
        this.invalidLogin = true
      }

      // sessionStorage.setitem('key', 'value');
      // console.log(sessionStorage.getitem('key'))


    },
      (err: any) => {
        alert(err.error);
      }
    );


    // for (let i = 0; i < this.users.length; i++) {
    //   if (this.users[i].email === this.email && this.users[i].password === this.password) {
    //     this.router.navigateByUrl('/account')
    //     //this.router.navigateByUrl('/account/' + this.email );
    //     this.invalidLogin = false 
    //     return
    //   }
    // }
    // this.invalidLogin = true
  }



}
/*
  login(): void {
    console.log(this.email)
    console.log(this.password)




*/